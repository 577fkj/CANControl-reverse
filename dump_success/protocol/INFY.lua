Ver = "INFY-" .. Ver
SSID = SSID:concat("Control", Ver)
OV, OA, OW, IW, OT, IT, NTC, X0 = 0, 0, 0, 0, 0, 0, 0,
                                  encode.fromHex("0000000000000000")
LSV = LSV or (750 * OVD)
MSV = MSV or (200 * OVD)
Ti, AH, WH, NTC, YS, DS, OL = 0, "0.00", "0.00", 0, 0, 1, 0
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
    IT = 0,
    ST2 = 0,
    ST1 = 0,
    ST0 = 0
}

function SetVA(V, A, S, C)
    local V1, V2 = (V or SV) / OVD * 1000, (A or SA) / OAD * 1000
    can.send(1, 0x029B3FF0, encode.fromHex(DTH(V1, "%08X") .. DTH(V2, "%08X")))
    if S then
        KSA, KSi, SA, SV = {KS1, KS2, KS3, KS4}, S, A, V
        SetCFG("KSi", KSi)
        SetCFG("KS" .. S, {V, A}, C)
    end
end

function SetPON(V)
    PON = (V or 0)
    can.send(1, 0x029A3FF0, encode.fromHex(DTH(PON, "%02X") .. "00000000000000"))
    Mode = PON == 0 and "WT" or (Mode == "T" and "T" or "SP")
end

function CANRecv(Format, ID, Data)
    OL = 5
    if GM then LOG(DTH(ID) .. "  " .. ETH(Data)) end
    if UPDate then return end
    if ID ~= 0x0286f000 and ID ~= 0x0281f03f and ID ~= 0x0284F000 and ID ~=
        0x028AF000 then return end
    local T, C, K = encode.toHex(Data), C, K
    if ID == 0x0286f000 then
        IV = T:sub(1, 4)
        if IV == "0000" then IV = T:sub(9, 12) end
        IV = HTD(IV) / 10
        Set.IV = IV
        can.send(1, 0x02813FF0, X0)
    elseif ID == 0x0281f03f then
        C = T:sub(1, 8)
        K = T:sub(9, 16)
        OV = HTF(C) * OVT
        OA = HTF(K) * OAT
        if OA < CLV then OA = 0 end
        Set.OV = OV
        Set.OA = OA
        OW = OV * OA
        Set.OW = OW
        can.send(1, 0x02883FF0, X0)
    elseif ID == 0x0284F000 then
        IT = HTD(T:sub(9, 10))
        Set.IT = IT
        Set.ST2 = HTD(T:sub(11, 12))
        Set.ST1 = HTD(T:sub(13, 14))
        Set.ST0 = HTD(T:sub(15, 16))
        can.send(1, 0x028600F0, X0)
    elseif ID == 0x028AF000 then
        if MSV == 0 then MSV = HTD(T:sub(5, 8)) * OVD end
        if LSV == 0 then LSV = HTD(T:sub(1, 4)) * OVD end
        if LSA == 0 then LSA = HTD(T:sub(9, 12)) * OAD end
    end
end

tmr.create():alarm(1000, 1, function()
    OL = OL - (OL > 0 and 1 or 0)
    if UPDate then return end
    local MSG = ""
    for K, T in pairs(Set) do MSG = MSG .. " " .. K .. "=" .. T end
    ShowMSG(MSG)
    can.send(1, 0x028400F0, X0)
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
tmr.create():alarm(1000, 0, function() SetPON(0) end)
tmr.create():alarm(1500, 0, function() SetVA(SV, (HQ == 0 and SA or 1)) end)
tmr.create():alarm(1800, 0, function() can.send(1, 0x028A00F0, X0) end)
