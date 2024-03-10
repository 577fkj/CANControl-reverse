Ver = "Huawei-" .. Ver
SSID = SSID:concat("Control", Ver)
OV, OA, OW, IW, OT, Init = 0, 0, 0, 0, 0, 0
LSV = LSV or (58.5 * OVD)
MSV = MSV or (41 * OVD)
Ti, AH, WH, NTC, YS, OL = 0, "0.00", "0.00", 0, 0, 0
Set = {
    IV = {"01780000", 0},
    IW = {"01700000", 0, 1024 / OVT},
    OA = {"01810000", 0, 1024 / OAT},
    IV1 = {"01780003", 0},
    OA2 = {"00010000", 0, 20 / OAT},
    OV = {"01750000", 0, 1024 / OVT},
    IA = {"01720000", 0, 1024 / OVT},
    MA = {"01760000", 0, 20 / OAT},
    OA1 = {"01820000", 0, 1024 / OAT},
    IT = {"01800000", 0},
    OT = {"017f0000", 0},
    OW = {"01730000", 0, 1024 / OVT},
    XW = {"01050000", 0, 1024 / OVT}
}

function CANSend(ID, K, V)
    can.send(1, ID, encode.fromHex(K .. string.format("%08X", V)))
end

function SetVA(V, A, S, C)
    CANSend(0x108180FE, "01000000", V / OVD * 1024)
    CANSend(0x108180FE, "01010000", V / OVD * 1024)
    CANSend(0x108180FE, "01030000", A / OAD * 20)
    CANSend(0x108180FE, "01040000", A / OAD * 20)
    CANSend(0x108180FE, "01050000", SMW * 1024)
    if S then
        KSA, KSi, SA, SV = {KS1, KS2, KS3, KS4}, S, A, V
        SetCFG("KSi", KSi)
        SetCFG("KS" .. S, {V, A}, C)
    end
end

function SetSFan(V)
    CANSend(0x108180FE, "0134000" .. (V == 0 and 0 or 1), 0)
    FON = V
end

function SetPON(V)
    PON = V or 1
    Mode = PON == 0 and "WT" or (Mode == "T" and "T" or "SP")
    CANSend(0x108180FE, "0132000" .. (V or 1), 0)
    SetFan(0)
end

function Init1()
    CANSend(0x108181FE, "01020000", 60416)
    CANSend(0x108181FE, "01090000", 0)
    CANSend(0x108181FE, "010c0000", 0)
    CANSend(0x108181FE, "010d0000", 0)
    CANSend(0x108181FE, "01010000", 54784)
    CANSend(0x108181FE, "01040000", 148)
    CANSend(0x108181FE, "01060000", 1024)
end

function CANRecv(Format, ID, Data)
    OL = 3
    if (UPDate and GM == 0) or ID == 0x1001117E then return 0 end
    local T, I, V = 0, 0, 0
    if ID == 0x1081407F or ID == 0x1081807E or ID == 0x1001117E then
        T = ETH(Data)
        I = T:sub(1, 8)
        V = HTD(T:sub(9, 16))
        for K, T in pairs(Set) do
            if I == T[1] then
                T[2] = string.format("%0.2f", (V / (T[3] or 1024)))
                break
            end
        end
    elseif ID == 0x1081507F then
        if Init then
            LOG("Init")
            Init1()
            Init = 0
            LOG("Init")
        end
    end
    if GM then
        LOG(DTH(ID) .. "  " .. (T == 0 and ETH(Data) or (I .. "  " .. V)))
    end
end

TOA = {0, 0, 0, 0, 0, 0}

function Avg(V)
    local Ave = 0
    for i = 1, #TOA, 1 do
        TOA[i] = (i == #TOA and V or TOA[i + 1])
        Ave = Ave + TOA[i]
    end
    -- Ave = Ave / #TOA
    return (V == 0 and 0 or (Ave / #TOA))
end

tmr.create():alarm(1000, 1, function()
    OL = OL - (OL > 0 and 1 or 0)
    if UPDate then return end
    if (Set.OT[2] + 0) <= 0 or (Set.OT[2] + 0) > 150 then Set.OT[2] = 0 end
    OV = Set.OV[2] + 0
    IW = Set.IW[2] + 0
    OT = Set.OT[2] + 0
    OW = Set.OW[2] + 0
    OA = (Set.OA[2] + 0)
    Set.OA[2] = OA
    local MSG = ""
    for K, T in pairs(Set) do MSG = MSG .. " " .. K .. "=" .. T[2] end
    ShowMSG(MSG)
    if OW >= FMW then
        SetSFan(1)
    elseif OT >= FMT then
        SetSFan(2)
    else
        SetSFan(0)
    end
    if Init then CANSend(0x108150FE, "00000000", 0) end
    CANSend(0x108140FE, "00000000", 0)
    CANSend(0x108180FE, "01000000", SV / OVD * 1024)
end)
can.setup({
    speed = 125,
    tx = 5,
    rx = 4,
    dual_filter = false,
    code = 0,
    mask = 0xffffffff
}, CANRecv)
can.start()
CANSend(0x108180FE, "01050000", SMW * 1024)
CANSend(0x108180FE, "01000000", SV / OVD * 1024)
tmr.create():alarm(2000, 0, function()
    SetVA(SV, (HQ == 0 and SA or 1))
    CANSend(0x108180FE, "01050000", SMW * 1024)
end)
