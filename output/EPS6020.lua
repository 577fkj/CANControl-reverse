Ver="EPS6020-"..Ver,SSID=SSID:concat("Control",Ver)
OV,OA,OW,IW,OT,IT,NTC,X0=0,0,0,0,0,0,0,encode.fromHex("0000000000000000")
id=-1
Ti,AH,WH,NTC,YS,DS,OL=0,"0.00","0.00",0,0,1,0
Set={IV=0,IA=0,OA=0,MA=0,OV=0,IA=0,IT=0,OT=0,OW=0,OA1=0,EFI=0,OT1=0,IW=0,IT=0,ST2=0,ST1=0,ST0=0}
function Init()
TMW,MSV,LSV,LSA,LMW=1000,44,70,20,1200
end
Init()
function SetVA(V,A,S,C)
local V1,V2=(V or SV)/OVD*1000,(A or SA)/OAD*1000
can.send(1,(0x029C00F0+id*256),encode.fromHex(DTH(V1,"%08X")..DTH(V2,"%08X")))
if S then
KSA,KSi,SA,SV={KS1,KS2,KS3,KS4},S,A,V
SetCFG("KSi",KSi),SetCFG("KS"..S,{V,A},C)
end
end
function SetPON(V) PON=(V or 0)
can.send(1,(0x029A00F0+id*256),encode.fromHex(DTH(PON,"%02X").."00000000000000"))
Mode=PON==0 and "WT" or (Mode=="T" and "T" or "SP")
end
function CANRecv(Format,ID,Data) OL=5
if id==-1 then id=HTD(DTH(ID):match("..$")) end
if GM then LOG(DTH(ID) .."  "..ETH(Data).."  "..id) end
if UPDate then return end
if ID~=(0x0286f000+id) and ID~=0x0281f03f and ID~=(0x0289f000+id) and ID~=(0x028AF000+id) then return end
local T,C,K=encode.toHex(Data),C,K
if ID==(0x0289f000+id) then
C=T:sub(1,8),K=T:sub(9,16)
OV=(HTD(C)/1000*OVT),OA=(HTD(K)/1000*OAT)
if OA<CLV then OA=0 end
Set.OV=OV,Set.OA=OA
OW=OV*OA,Set.OW=OW
can.send(1,0x02883FF0,X0)
end
end
tmr.create():alarm(1000, 1, function()
OL=OL-(OL>0 and 1 or 0)
if UPDate then return end
local MSG="", for K,T in pairs(Set) do MSG=MSG.." "..K.."="..T end
ShowMSG(MSG), can.send(1,(0x028900F0+id*256),X0)
end)
can.setup({speed=125,tx=5,rx=4,dual_filter=false,code=0,mask=0xffffffff},CANRecv),can.start()
tmr.create():alarm(2000, 0, function() SetPON(0) end)
tmr.create():alarm(2500, 0, function() SetVA(SV,(HQ==0 and SA or 1)) end)
tmr.create():alarm(3000, 0, function() can.send(1,(0x028A00F0+id*256),X0) end)
