Ver="Increase-"..Ver,SSID=SSID:concat("Control",Ver)
OV,OA,OW,IW,OT,NTC=0,0,0,0,0,0
LSV=LSV or (100*OVD),MSV=MSV or (20*OVD)
Ti,AH,WH,CID,NTC,YS,DS,OL=0,"0.00","0.00",0x1307C080,0,0,1,0
Set1={IV=0,IA=0,OA=0,MA=0,OV=0,IA=0,IT=0,OT=0,OW=0,OA1=0,EFI=0,OT1=0,IW=0,IT=0,ST1=0,ST0=0}
Set2={IV=0,IA=0,OA=0,MA=0,OV=0,IA=0,IT=0,OT=0,OW=0,OA1=0,EFI=0,OT1=0,IW=0,IT=0,ST1=0,ST0=0}
Set3={IV=0,IA=0,OA=0,MA=0,OV=0,IA=0,IT=0,OT=0,OW=0,OA1=0,EFI=0,OT1=0,IW=0,IT=0,ST1=0,ST0=0}
Set4={IV=0,IA=0,OA=0,MA=0,OV=0,IA=0,IT=0,OT=0,OW=0,OA1=0,EFI=0,OT1=0,IW=0,IT=0,ST1=0,ST0=0}
Set0={Set1,Set2,Set3,Set4},Set=Set0[DS]
function Send1()
can.send(1,0x13008081,"")
can.send(1,0x1307A081,encode.fromHex("3100000000000000"))
end
function CANSend(C,V1,V2,V3)
V1=string.format("%04X",V1),V2=string.format("%08X",V2)
C=encode.fromHex(C..V1..V2),can.send(1,CID+(V3 or DS),C)
end
function SetVA(V,A,S,C)
CANSend("0000",(A or SA)/OAD*1000,(V or SV)/OVD*1000)
if S then
KSA,KSi,SA,SV={KS1,KS2,KS3,KS4},S,A,V
SetCFG("KSi",KSi),SetCFG("KS"..S,{V,A},C)
end
end
function SetPON(V) PON=(V or 0)
CANSend("0200",0,PON==1 and 170 or 85)
Mode=PON==0 and "WT" or (Mode=="T" and "T" or "SP")
end
function CANRecv(Format,ID,Data) OL=3
if GM then LOG(DTH(ID) .."  "..ETH(Data)) end
if UPDate then return end
if ID~=0x1207C081 and ID~=0x1207A081 and ID~=0x12008081 then return end
local T=encode.toHex(Data)
local C,i,J,K=T:sub(1,2)+0,1
if ID==0x1207C081 and C==1 then
J,K=HTD(T:sub(5,8)),HTD(T:sub(9,12))
Set0[i].ST1=HTD(T:sub(13,14))
Set0[i].ST0=HTD(T:sub(15,16))
OA=(J/10*OAT),OV=K/10*OVT
if OA<CLV then OA=0 end
Set0[i].OA=OA,Set0[i].OV=OV
OW=OV*OA,Set.OW=OW
elseif ID==0x12008081 then OT=HTD(T:sub(9,12))/10,Set0[i].OT=OT
elseif ID==0x1207A081 then IV=HTD(T:sub(5,8))/32,Set0[i].IV=IV end
end
TOA={0,0,0,0,0,0}
function Avg(V)
local Ave=0
for i = 1,#TOA,1 do
TOA[i]=(i==#TOA and V or TOA[i+1])
Ave = Ave + TOA[i]
end
Ave = Ave / #TOA
return (V==0 and 0 or Ave)
end
tmr.create():alarm(1000, 1, function()
OL=OL-(OL>0 and 1 or 0),Set=Set0[DS]
if UPDate then return end
local MSG=""
for K,T in pairs(Set) do MSG=MSG.." "..K.."="..T end
CANSend("0100",0,0)
ShowMSG(MSG)
Send1()
end)
can.setup({speed=125,tx=5,rx=4,dual_filter=false,code=0,mask=0xffffffff},CANRecv),can.start()
tmr.create():alarm(2000, 0, function() SetVA(SV,(HQ==0 and SA or 1.8)),SetPON(0) end)
