#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// a8:42:e3:2b:b3:d4 S: b45623
// 5c:6a:4b:84:ff:1d S: 00ae8b S1: 51c110

static char CODE_CHARS[] = "0123456789abcdef";
static uint64_t U_CHANNEL_KEY = 0x12f5bd2llu; // 用户超级密码
static uint64_t G_CHANNEL_KEY0 = 0x28fllu;    // 系统超级密码
static uint64_t G_CHANNEL_KEY1 = 0x0llu;

static uint64_t S_CHANNEL_KEY = 0x12a403ac3llu; // 旧激活码
static uint64_t S1_CHANNEL_KEY0 = 0x2acllu;     // 新激活码
static uint64_t S1_CHANNEL_KEY1 = 0x0llu;

static void print_usage(const char *arg0)
{
    printf("usage: %s <mac> <channel/key>\n", arg0);
    printf("channel: U, S, S1, G\n");
}

static void strinv(char *out, char *in)
{
    char ch;
    for (; in--, out < in; out++)
    {
        ch = *in;
        *in = *out;
        *out = ch;
    }
    return;
}

static char *substr(char *buf, size_t begin, size_t end)
{
    memmove(buf, &buf[begin], end - begin);
    buf[end - begin] = '\0';
    return buf;
}

static char *generate_code(uint64_t seed, char *code, size_t size)
{
    char *ptr = code;
    if (size - 2 < 0xF)
    {
        uint64_t cur_seed;
        do
        {
            cur_seed = seed;
            seed = seed / size;
            *ptr++ = CODE_CHARS[cur_seed % size];
        } while (cur_seed >= size);
        strinv(code, ptr);
        *ptr = '\0';
    }
    else
    {
        code[0] = '\0';
    }
    return code;
}

static char *get_activation_code(uint64_t mac, uint64_t key, char *code)
{
    return generate_code(mac + key, code, 16); // 0-9a-f
}

static char *get_activation_code2(uint64_t mac, uint64_t key0, uint64_t key1, char *code)
{
    uint64_t seed = mac + key1;
    size_t code_len = 0;

    generate_code(seed, code, 10); // 0-9
    code_len = strlen(code);

    int32_t mul = 0;
    for (size_t i = 0; i < code_len; i++)
        mul += code[i];
    seed = (seed / key0) * mul;

    generate_code(seed, code, 16); // 0-9a-f
    code_len = strlen(code);

    substr(code, code_len - 6, code_len);
}

static int get_activation_key(char *code, uint64_t mac, char *channel)
{
    if (mac == 0)
    {
        printf("invalid mac address!\n");
        return -1;
    }

    if (strcmp(channel, "U") == 0)
    {
        get_activation_code(mac, U_CHANNEL_KEY, code);
        substr(code, 4, 8);
        return 0;
    }

    if (strcmp(channel, "S") == 0)
    {
        get_activation_code(mac, S_CHANNEL_KEY, code);
        substr(code, 2, 8);
        return 0;
    }

    if (strcmp(channel, "S1") == 0)
    {
        get_activation_code2(mac, S1_CHANNEL_KEY0, S1_CHANNEL_KEY1, code);
        return 0;
    }

    if (strcmp(channel, "G") == 0)
    {
        get_activation_code2(mac, G_CHANNEL_KEY0, G_CHANNEL_KEY1, code);
        return 0;
    }

    printf("invalid channel!\n");
    return -1;
}

static uint64_t str_to_mac(const char *s)
{
    unsigned char a[6];
    int last = -1;

    int rc = sscanf(s, "%hhx:%hhx:%hhx:%hhx:%hhx:%hhx%n", &a[5], &a[4], &a[3], &a[2], &a[1], &a[0], &last);
    if (rc != 6)
        return 0;

    return (uint64_t)a[0] << 40 |
           (uint64_t)a[1] << 32 |
           // 32-bit instructions take fewer bytes on x86, so use them as much as possible
           ((uint32_t)a[2] << 24 | (uint32_t)a[3] << 16 | (uint32_t)a[4] << 8 | (uint32_t)a[5]);
}

int main(int argc, char **argv)
{
    if (argc <= 2)
    {
        print_usage(argv[0]);
        return 1;
    }

    // get mac & channel
    char *mac_str = argv[1];
    char *channel = argv[2];
    uint64_t mac = str_to_mac(mac_str);

    char code[65];
    memset(code, 0, sizeof(code));
    if (get_activation_key(code, mac, channel) != 0)
    {
        printf("failed to get activation key!");
        return 1;
    }

    printf("[%s] %s: %s\n", channel, mac_str, code);
    return 0;
}