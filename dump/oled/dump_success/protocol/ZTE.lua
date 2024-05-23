Ver = "ZTE-" .. Ver
SSID = SSID:concat("Control", Ver)
OV, OA, OW, IW, OT = 0, 0, 0, 0, 0
LSV = LSV or (59 * OVD)
MSV = MSV or (41.5 * OVD)
Ti, AH, WH, CID, NTC, YS, DS, OL = 0, "0.00", "0.00", 0, 0, 0, 1, 0
Set = {
    IV = 0,
    IA = 0,
    OA = 0,
    MA = 0,
    OV = 0,
    IA = 0,
    IT = 0,
    OT = 0,
    OW = 0,
    OA1 = 0,
    EFI = 0,
    OT1 = 0,
    IW = 0,
    IT = 0
}

function CANSend(ID, V1, V2, V3, V4)
    V2 = string.format("%04X", V2)
    V3 = string.format("%04X", V3)
    V4 = string.format("%04X", V4)
    V1 = encode.fromHex(V1 .. V2 .. V3 .. V4)
    can.send(1, ID, V1)
end

function SetVA(V, A, S, C)
    CANSend(0x12780020, "7820", "600", V / OVD * 10, A / OAD * 10)
    CANSend(0x12780022, "7822", "600", V / OVD * 10, A / OAD * 10)
    if S then
        KSA, KSi, SA, SV = {KS1, KS2, KS3, KS4}, S, A, V
        SetCFG("KSi", KSi)
        SetCFG("KS" .. S, {V, A}, C)
    end
end

function SetPON(V)
    PON = (V or 0)
    Mode = PON == 0 and "WT" or (Mode == "T" and "T" or "SP")
    CANSend(0x12780030 + CID, "7830", PON == 1 and 0 or 256, 0, 0)
    SetFan(0)
end

-- function SPIO() SPM=1-SPM,gpio.write(27,SPM),SetCFG("SPM",SPM,1) end
function CANRecv(Format, ID, Data)
    OL = 3
    if GM then LOG(string.format("%08X", ID) .. "  " .. ETH(Data)) end
    if UPDate and GM == 0 then return end
    if CID == 0 then CID = HTD(string.format("%08X", ID):sub(3, 4)) * 256 end
    if ID ~= 0x1a007810 + CID * 256 then return end
    local T = ETH(Data)
    local I, J, K, V = T:sub(3, 4), HTD(T:sub(5, 8)), HTD(T:sub(9, 12)),
                       HTD(T:sub(13, 16))
    if I == "00" then
        Set.IV = J / 10
    elseif I == "41" then
        Set.IA = J / 10 * IAT
        IW = Set.IA * Set.IV
        Set.IW = IW
    elseif I == "42" then
        OA = Avg(K / 10 * OAT)
        if OA < CLV then OA = 0 end
        OT = V / 10
        OV = J / 10 * OVT
        OW = OA * OV
        Set.OA = OA
        Set.OT = OT
        Set.OV = OV
        Set.OW = OW
    elseif I == "84" then
        Set.MA = V / 10
    end
    if GM then
        LOG(string.format("%08X", ID) .. "  " .. T:sub(1, 2) .. "  " .. I ..
                "  " .. (J / 10) .. "  " .. (K / 10) .. "  " .. (V / 10))
    end
end

TOA = {0, 0, 0, 0, 0, 0}
function Avg(V)
    local Ave = 0
    for i = 1, #TOA, 1 do
        TOA[i] = (i == #TOA and V or TOA[i + 1])
        Ave = Ave + TOA[i]
    end
    Ave = Ave / #TOA
    return (V == 0 and 0 or Ave)
end

tmr.create():alarm(1000, 1, function()
    OL = OL - (OL > 0 and 1 or 0)
    if UPDate then return end
    if NTC >= 0 and NTC <= 95 then
        NTC = GetNTC(5)
        Set.IT = Set.OT
        Set.OT = NTC
        OT = NTC
    end
    local MSG = ""
    for K, T in pairs(Set) do MSG = MSG .. " " .. K .. "=" .. T end
    ShowMSG(MSG)
    if id ~= "00" then CANSend(0x1A780012 + CID, "7810", 0, 0, 0) end
end)
can.setup({
    speed = 500,
    tx = 5,
    rx = 4,
    dual_filter = false,
    code = 0,
    mask = 0xffffffff
}, CANRecv)
can.start()
tmr.create():alarm(2000, 0, function() SetVA(SV, (HQ == 0 and SA or 2)) end)
