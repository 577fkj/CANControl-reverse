-- convert.run.lua
function HTF(V)
if not V then return 0 end
if type(V)=="string" then V=tonumber(V,16) end
local sign = math.floor(V/(2^31))
local exp = V % (2^31)
exp = math.floor(exp/(2^23))-127
local man = V % (2^23)
for i=1,23 do man=man/2 end
local result = (-1)^sign * (1+man) * 2^exp
return result
end
function FTH(V)
local S,E,M,N,C=0,0,0,0,0
if V==0 then return "00000000" end
local D=math.floor(V)
local F,P=(V-D),D
S=(V>0 and 0 or 1) * 2^31
repeat  D=math.floor(D/2),C=C+1 until(D==0)
E=C-1,N=23-E,P=P % (2^E)
P=P*(2^N),E=E+127,E=E*2^23
for i=1,N do
F=F*2,D=math.floor(F),F=(F-D)
M = M + D*2^(N-i)
end
return string.format("%08X",(S+E+(P+M)))
end

-- Display.lua
local Y,C,X={3,19,48},1,0
local LCD1,LED2=21,14
local L1,L2,P1,P2,P3,P4,F1,F2,F3,F4,F5,F7,B1,F8=1,1,1,1,1,1,1,1,1,1,1,1,1,1
VT=VT or 0
gpio.config({gpio=19,dir=gpio.IN, pull=gpio.PULL_UP})
gpio.config({gpio=23,dir=gpio.IN, pull=gpio.PULL_UP})
if DV>=2 then X=4
bus = spi.master(spi.HSPI, {sclk=19, mosi=23})
if DV==2 and u8g2.st7567_pi_132x64 then disp = u8g2.st7567_pi_132x64(bus, 22, 16, 17) end
if DV==3 and u8g2.ssd1309_128x64_noname0 then disp = u8g2.ssd1309_128x64_noname0(bus, 22, 16, 17) end
gpio.config({gpio=LED2,dir=gpio.OUT}),gpio.write(LED2,1)
LCD1=ledc.newChannel({gpio=LCD1,bits=10,mode=0,timer=1,channel=2,frequency=5000,duty=550})
else
gpio.config({gpio={16,17},dir=gpio.IN, pull=gpio.PULL_UP})
i2c.setup(i2c.HW0, 16, 17, i2c.FAST)
if DV==0 then disp=u8g2.sh1106_i2c_128x64_noname(i2c.HW0, 0x3c) end
if DV==1 then disp=u8g2.ssd1306_i2c_128x64_noname(i2c.HW0, 0x3c) end
end
disp:setFont(u8g2.font_6x10_tf)
disp:setFontDirection(SR)
if VT>0 and ShowLogo then ShowLogo(disp) end
function DrawRect(x,y,x1,y1,x2,y2) if SR==1 then DrRect(128-y,x,128-y1,x1) else DrRect(x,y,x1,y1) end end
function DrawRectx(x,y,z,t)if SR==1 then DrRect(128-y,x,128-t,z),DrRect(128-y,x+1,128-t,z+1) else DrRect(x,y,z,t),DrRect(x+1,y,z+1,t) end end
function DrawRecty(x,y,z,t)if SR==1 then DrRect(128-y,x,128-t,z),DrRect(127-y,x,127-t,z) else DrRect(x,y,z,t),DrRect(x,y+1,z,t+1) end end
local function DrawStr(x,y,t)
disp:clearBuffer()
if SR==2 then t=string.reverse(t) end
for i = 1 ,#t,1 do
v=t:sub(i,i)
if v=="." then x=x+4 else x=x+6+4 end
if v:match(SR==2 and "[134567890]" or "[456890]") then DrawRectx(x, y, x,y+6) end
if v:match(SR==2 and "[235680]" or "[23567890]") then DrawRecty(x, y, x+7,y) end
if v:match(SR==2 and "[2680]" or "[12347890]") then DrawRectx(x+6, y, x+6,y+6) end
if v:match("[2345689]") then DrawRecty(x, y+6, x+7,y+6) end
if v:match(SR==2 and "[12347890]" or "[2680]") then DrawRectx(x, y+6, x,y+13) end
if v:match(SR==2 and "[23567890]" or "[235680]") then DrawRecty(x, y+12, x+7,y+12) end
if v:match(SR==2 and "[456890]" or "[134567890]") then DrawRectx(x+6, y+6, x+6,y+13) end
if v=="." then if SR==2 then DrawRecty(x+6, y, x+7,y) else DrawRecty(x+6, y+12, x+7,y+12) end end
if v=="a" then
if SR==2 then
DrawRect(x, y+1, x,y+6),DrawRect(x+6, y+1, x+6,y+6),DrawRect(x,y+3,x+6,y+3)
DrawRect(x, y+5, x+3,y+11),DrawRect(x+6, y+5, x+3,y+11)
else
DrawRect(x, y+8, x,y+13),DrawRect(x+6, y+8, x+6,y+13),DrawRect(x,y+10,x+6,y+10)
DrawRect(x, y+8, x+3,y+2),DrawRect(x+3, y+2, x+6,y+8)
end
end
if v=="v" then
if SR==2 then
DrawRect(x, y+8, x,y+12),DrawRect(x+6, y+8, x+6,y+12)
DrawRect(x, y+8, x+3,y+2),DrawRect(x+3, y+2, x+6,y+8)
else
DrawRect(x, y+2, x,y+7),DrawRect(x+6, y+2, x+6,y+7)
DrawRect(x, y+6, x+3,y+12),DrawRect(x+6, y+6, x+3,y+12)
if SR==1 then x=-13 , y=y+19 end
end
end
end
DrRect(F1[1],F1[2],F1[3],F1[4])
DrRect(F2[1],F2[2],F2[3],F2[4])
DrRect(F3[1],F3[2],F3[3],F3[4])
if SR==1 then
S4_="IN  "..format("%04d",IW).."W"
DrStr(50,5,"OUT "..SOW_.."W")
DrStr(40,5,"NTC "..format("%5.2f",OT))
elseif SDL==1 then
disp:drawBox((SR==2 and (DV>1 and 131 or 128)-SOC or B1[1]+(DV>1 and 0 or -3)),B1[2],SOC+5,B1[4])
DrLine(F7[1],F7[2],F7[3],F7[4])
DrRect(F8[1],F8[2],F8[3],F8[4])
DrStr(L3[1],L3[2],format("%3.0f",SOC,"%"))
end
if CurrKey==1 then DrLine(F4[1],F4[2],F4[3],F4[4])
elseif CurrKey==2 then DrLine(F5[1],F5[2],F5[3],F5[4])
elseif CurrKey==3 then DrLine(F6[1],F6[2],F6[3],F6[4]) end
DrStr(L1[1],L1[2],SSV_..S3_..SSA_),DrStr(L2[1],L2[2],S4_)
DrStr(P2[1],P2[2],SWH_),DrStr(P3[1],P3[2],SAH_),DrStr(P4[1],P4[2],STI_)
disp:sendBuffer()
end
function SetSR(V,S)
if V==1 then
F4,F5,F6={115,2,11,35},{115,26,11,36},{115,2,11,60}
L1,L2={116,5},{60,5}
P1,P2,P3,P4={28,2},{23,10},{13,10},{2,10}
F1,F2,F3={113,0,113,64},{73,0,73,64},{35,0,35,64}
elseif SDL==0 then
if V==0 then
F4,F5,F6={2,29,33,11},{38,29,33,11},{2,29,69,11}
L1,L2={4,38},{4,57}
P1,P2,P3,P4={75,28},{77,35},{77,47},{77,59}
F1,F2,F3={0,24,128,24},{0,44,73,44},{73,24,73,64}
elseif V==2 then
F4,F5,F6={93,25,33,11},{57,25,33,11},{57,25,69,11}
L1,L2={123,26},{124,7}
P1,P2,P3,P4={49,35},{51,29},{51,17},{51,5}
F1,F2,F3={0,40,128,40},{55,20,128,20},{55,0,55,40}
end
else
if V==0 then
F4,F5,F6={2,25,33,11},{38,25,33,11},{2,25,69,11}
L1,L2,L3={4,34},{4,50},{105,64}
P1,P2,P3,P4={75,21},{80,31},{80,41},{80,51}
F1,F2,F3={0,20,128,20},{0,38,73,38},{73,20,73,54}
F7,B1,F8={0,56,102,8},{0,56,60,8},{0,54,128,54}
elseif V==2 then
F4,F5,F6={93,30,33,11},{57,30,33,11},{57,30,69,11}
L1,L2,L3={123,31},{124,14},{22,0}
P1,P2,P3,P4={49,35},{48,34},{48,24},{48,14}
F1,F2,F3={0,45,128,45},{55,26,128,26},{55,10,55,45}
F7,B1,F8={26,0,102,8},{72,0,60,8},{0,10,128,10}
end
end
SR=V,disp:setFontDirection(SR)
if S==0 then Setcfg("SR",V,1) end
end
function DrLine(x,y,x1,y1) disp:drawLine(x+X,y,x1,y1) end
function DrStr(x,y,s) disp:drawStr(x+X,y,s) end
function DrRect(x,y,x1,y1) disp:drawRect(x+X,y,x1+X,y1) end
function format(S,V,O) return string.format(S,V)..(O or "") end
SAH_,SWH_,SOW_,SOT_,SOV_,SOA_,STI_,SSA_,SSV_,SINF_=""
S1_,S2_,S3_,S4_="%2.1f","%2.1f",""
SDL=0
function Draw(S,R)
if VT>0 then VT=VT-1,return end
if PON==1 and SDP==1 then disp:clearBuffer(),disp:sendBuffer(),return end
if DCA[KSi]~=0 then if SDL==0 then SDL=1,SetSR(SR) end
else if SDL==1 then SDL=0,SetSR(SR) end  end
S1_,S2_,S3_="%2.1f","%2.1f",""
if SOV_==0 and R then return end
if SR==1 then
if CurrKey==1 then S2_="%02d" elseif CurrKey==2 then S1_="%02d" else S1_="%02d",S2_=S1_,S3_="  "end
end
if R==0 then
SOV_=format(OV>=100 and "%5.1f" or "%5.2f",OV,"v ")
SOA_=format("%5.2f",OA,"a")
SWH_=format("%6.0f",WH,"WH")
SAH_=format("%6.2f",AH,"AH")
STI_=ToS(Ti)
SOW_=format("%04d",OW)
SOT_=format("%02d",OT)
S4_="T="..SOT_.." W="..SOW_
end
SSV_=format(S1_,SV,(SV>=100 and " " or "V "))
SSA_=format(S2_,SA,"A")
DrawStr(-3,Y[SR+1] ,SOV_..SOA_)
end
SetSR(SR,1),Load("Key")

-- EPS6020.lua
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

-- Huawei.lua
Ver="Huawei-"..Ver,SSID=SSID:concat("Control",Ver)
OV,OA,OW,IW,OT,Init=0,0,0,0,0,0
LSV=LSV or (58.5*OVD),MSV=MSV or (41*OVD)
Ti,AH,WH,NTC,YS,OL=0,"0.00","0.00",0,0,0
Set={IV={"01780000",0},IW={"01700000",0,1024/OVT},OA={"01810000",0,1024/OAT},IV1={"01780003",0},OA2={"00010000",0,20/OAT},
OV={"01750000",0,1024/OVT},IA={"01720000",0,1024/OVT},MA={"01760000",0,20/OAT},OA1={"01820000",0,1024/OAT},
IT={"01800000",0},OT={"017f0000",0},OW={"01730000",0,1024/OVT},XW={"01050000",0,1024/OVT}}
function CANSend(ID,K,V) can.send(1,ID,encode.fromHex(K..string.format("%08X",V))) end
function SetVA(V,A,S,C)
CANSend(0x108180FE,"01000000",V/OVD*1024),CANSend(0x108180FE,"01010000",V/OVD*1024)
CANSend(0x108180FE,"01030000",A/OAD*20),CANSend(0x108180FE,"01040000",A/OAD*20)
CANSend(0x108180FE,"01050000",SMW*1024)
if S then
KSA,KSi,SA,SV={KS1,KS2,KS3,KS4},S,A,V
SetCFG("KSi",KSi),SetCFG("KS"..S,{V,A},C)
end
end
function SetSFan(V)  CANSend(0x108180FE,"0134000"..(V==0 and 0 or 1),0),FON=V end
function SetPON(V) PON=V or 1
Mode=PON==0 and "WT" or (Mode=="T" and "T" or "SP")
CANSend(0x108180FE,"0132000"..(V or 1),0),SetFan(0)
end
function Init1()
CANSend(0x108181FE,"01020000",60416)
CANSend(0x108181FE,"01090000",0)
CANSend(0x108181FE,"010c0000",0)
CANSend(0x108181FE,"010d0000",0)
CANSend(0x108181FE,"01010000",54784)
CANSend(0x108181FE,"01040000",148)
CANSend(0x108181FE,"01060000",1024)
end
function CANRecv(Format,ID,Data) OL=3
if (UPDate and GM==0) or ID==0x1001117E then return 0 end
local T,I,V=0,0,0
if ID==0x1081407F or ID==0x1081807E or ID==0x1001117E then
T=ETH(Data),I=T:sub(1,8),V=HTD(T:sub(9,16))
for K,T in pairs(Set) do
if I==T[1] then T[2]=string.format("%0.2f",(V/(T[3] or 1024))),break end
end
elseif ID==0x1081507F then
if Init then LOG("Init"),Init1(),Init=0,LOG("Init") end
end
if GM then LOG(DTH(ID).."  "..(T==0 and ETH(Data) or (I.."  "..V))) end
end
TOA={0,0,0,0,0,0}
function Avg(V)
local Ave=0
for i = 1,#TOA,1 do
TOA[i]=(i==#TOA and V or TOA[i+1])
Ave = Ave + TOA[i]
end
--Ave = Ave / #TOA
return (V==0 and 0 or (Ave / #TOA))
end
tmr.create():alarm(1000, 1, function()
OL=OL-(OL>0 and 1 or 0), if UPDate then return end
if (Set.OT[2]+0)<=0 or (Set.OT[2]+0)>150 then Set.OT[2]=0 end
OV=Set.OV[2]+0,IW=Set.IW[2]+0,OT=Set.OT[2]+0,OW=Set.OW[2]+0
OA=(Set.OA[2]+0),Set.OA[2]=OA
local MSG=""
for K,T in pairs(Set) do MSG=MSG.." "..K.."="..T[2] end
ShowMSG(MSG)
if OW>=FMW then SetSFan(1) elseif OT>=FMT then SetSFan(2) else  SetSFan(0) end
if Init then CANSend(0x108150FE,"00000000",0) end
CANSend(0x108140FE,"00000000",0)
CANSend(0x108180FE,"01000000",SV/OVD*1024),
end)
can.setup({speed=125,tx=5,rx=4,dual_filter=false,code=0,mask=0xffffffff},CANRecv),can.start()
CANSend(0x108180FE,"01050000",SMW*1024)
CANSend(0x108180FE,"01000000",SV/OVD*1024)
tmr.create():alarm(2000, 0, function() SetVA(SV,(HQ==0 and SA or 1)), CANSend(0x108180FE,"01050000",SMW*1024) end)

-- Increase.lua
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

-- INFY.lua
Ver="INFY-"..Ver,SSID=SSID:concat("Control",Ver)
OV,OA,OW,IW,OT,IT,NTC,X0=0,0,0,0,0,0,0,encode.fromHex("0000000000000000")
LSV=LSV or (750*OVD),MSV=MSV or (200*OVD)
Ti,AH,WH,NTC,YS,DS,OL=0,"0.00","0.00",0,0,1,0
Set={IV=0,IA=0,OA=0,MA=0,OV=0,IA=0,IT=0,OT=0,OW=0,OA1=0,EFI=0,OT1=0,IW=0,IT=0,ST2=0,ST1=0,ST0=0}
function SetVA(V,A,S,C)
local V1,V2=(V or SV)/OVD*1000,(A or SA)/OAD*1000
can.send(1,0x029B3FF0,encode.fromHex(DTH(V1,"%08X")..DTH(V2,"%08X")))
if S then
KSA,KSi,SA,SV={KS1,KS2,KS3,KS4},S,A,V
SetCFG("KSi",KSi),SetCFG("KS"..S,{V,A},C)
end
end
function SetPON(V) PON=(V or 0)
can.send(1,0x029A3FF0,encode.fromHex(DTH(PON,"%02X").."00000000000000"))
Mode=PON==0 and "WT" or (Mode=="T" and "T" or "SP")
end
function CANRecv(Format,ID,Data) OL=5
if GM then LOG(DTH(ID) .."  "..ETH(Data)) end
if UPDate then return end
if ID~=0x0286f000 and ID~=0x0281f03f and ID~=0x0284F000 and ID~=0x028AF000 then return end
local T,C,K=encode.toHex(Data),C,K
if ID==0x0286f000 then
IV=T:sub(1,4)
if IV=="0000" then IV=T:sub(9,12) end
IV=HTD(IV)/10,Set.IV=IV
can.send(1,0x02813FF0,X0)
elseif ID==0x0281f03f then
C=T:sub(1,8),K=T:sub(9,16)
OV=HTF(C)*OVT,OA=HTF(K)*OAT
if OA<CLV then OA=0 end
Set.OV=OV,Set.OA=OA
OW=OV*OA,Set.OW=OW
can.send(1,0x02883FF0,X0)
elseif ID==0x0284F000 then
IT=HTD(T:sub(9,10)),Set.IT=IT,Set.ST2=HTD(T:sub(11,12))
Set.ST1=HTD(T:sub(13,14)),Set.ST0=HTD(T:sub(15,16))
can.send(1,0x028600F0,X0)
elseif ID==0x028AF000 then
if MSV==0 then MSV=HTD(T:sub(5,8))*OVD end
if LSV==0 then LSV=HTD(T:sub(1,4))*OVD end
if LSA==0 then LSA=HTD(T:sub(9,12))*OAD end
end
end
tmr.create():alarm(1000, 1, function()
OL=OL-(OL>0 and 1 or 0)
if UPDate then return end
local MSG="", for K,T in pairs(Set) do MSG=MSG.." "..K.."="..T end
ShowMSG(MSG), can.send(1,0x028400F0,X0)
end)
can.setup({speed=125,tx=5,rx=4,dual_filter=false,code=0,mask=0xffffffff},CANRecv),can.start()
tmr.create():alarm(1000, 0, function() SetPON(0) end)
tmr.create():alarm(1500, 0, function() SetVA(SV,(HQ==0 and SA or 1)) end)
tmr.create():alarm(1800, 0, function() can.send(1,0x028A00F0,X0) end)

-- init.lua
CXJDWX=node,CFile=file,Draw=LOG,CUart=uart,CUart_RT={tx=0,rx=0},CF=CFile,CX=CXJDWX
local GM=CF.exists("GM") or 0
if GM==0 then
CX.output(function(S) end, 0),uart=0,node=0,file=0,CUart_RT={tx=1,rx=3}
CUart.setup(2,115200,8,CUart.PARITY_NONE,CUart.STOPBITS_1,{tx=1,rx=3})
end
Net,MF,RST,SSID,Ver,WFi=0,"",1,"ESP32-Err","1.0",2
function DoStr(Str) return pcall(loadstring(Str)) end
function Load(N) if CF.exists(N) then require(N) end end
function Save(S,N) CF.open(N,"w"),CF.write(S),CF.close() end
function Open(N) if CF.exists(N) then CF.open(N,"r"),local S=CF.read(),CF.close(),return S end end
function GetSHA1(S) local T=crypto.new_hash("SHA1"),T:update(S),return encode.toHex(T:finalize()) end
function GetFile(V) local L,CF.open(V,"r"),repeat L=CF.readDrawRect() TCPSend("<F>"..L) until L==0,CF.close() end
function CSet(N,V,C,S)
local T,TP="(\n"..N.."=)[^\n]+",type(V)
if TP=="string" then V= "'"..V.."'"
elseif TP=="table" then V="{"..V[1]..","..V[2].."}" end
DoStr(N.."="..V)
if V==0 then C=C:concat(T,"")
elseif C:match(T) then C=C:concat(T,"%1"..V)
else C=C.."\n"..N.."="..V end
if S then Save(C,S) end,return C
end
function SetCFG(N,V,S) Config=CSet(N,V,Config,S and "Config" or 0)  end
Config=Open("Config"),Load("Config"),Load("UPData")
function LOG(...) BSend(...),if GM then Draw(...) end,if TCP then TCPSend(...) end end
function BSend(V) if CK then CUart.write(2,V.."\n") end end
function TCPSend(...) Draw(...) end
function Uncode(V)
if Un==0 then Load("Uncode") end
for i=#Un,1,-1 do
V=V:concat(Un[i][2],Un[i][1])
end
return V
end
CK=0
CUart.setup(2,115200,8,0,1,CUart_RT,0)
CUart.on(2, "data", "\n",function(T)
local D=T:match("(.+)\n")
if D:match("DISCONNECT") then CK=0
elseif CK==1 then
local C,S=string.match(D,"<([^>]+)>(.*)")
if     C=="S" then CF.open(S..".UP","w+"),UPDate=1
elseif C=="E" then CF.close(),UPDate=0
elseif C=="W" then S=Uncode(S) , CF.write(S.."\n")
elseif C=="C" then if S:match("(uart)")==S:match("(file)") then DoStr(S) end  end
BSend("<R>"..D)
elseif D:match("CONNECT") then
tmr.create():alarm(300, 0, function()
if CK~=1 then
CK="CK"..GetSHA1("CX"..CX.uptime())
BSend(CK.."\nCAN:"..(Ver or 1).." QQ:"..(QQ or 1))
CK=GetSHA1(CK.."@t*s$e#T.'1)`")
end
end)
elseif D==CK then
CK=1,BSend("CheckOK")
BSend("CHIP=0 Key="..CX.chipid())
if WFi==2 then Setcfg("WFi",0,1) end
end
end)
CUart.start(2)
BSend("AT+POWE=9\r")
if WFi>0 then Load("Wifi.lua") end
local R,X,E = CX.bootreason()
LOG("RST="..R.." "..(X or 0).." "..(E or 0))
if not (R==2 and X==19 and E>(Restart or 2)) then
for N,S in pairs(CF.list()) do
if N:match("%.run$") then Load(N) end
if N:match("%.mf$") then MF=N end
if N:match("%.net$") then Net=N end
end
if MF then Load(MF) end
else Load("Wifi.lua") end

-- Key.lua
CurrKey=0
local NA,NV=0,0
local Key,Save=-1
local T_i,Keep,TOUT=0,0,-1
local Tick=tmr.create()
local UP,Down,OK=2,15,0
function KeyDown(K,V)
if Key==-1 then
gpio.trig(K),Key=K,Tick:start()
if K~=OK then
if CurrKey==1 then SV=SV+(K==KUP and (SV<MSV and 0 or -0.1) or 0.1) end
if CurrKey==2 then SA=SA+(K==KUP and (SA<1 and 0 or -0.1) or 0.1) end
if CurrKey==3 then
KSi=KSi+(K==2 and (KSi==1 and 3 or -1) or (KSi==4 and -3 or 1))
SV=KSA[KSi][1],SA=KSA[KSi][2]
end
end
if SV>LSV then SV=LSV end
if SA>LSA then SA=LSA end
Draw(1,1)
end
end
function KeyPress(K,V)
if K==OK then if Keep==0 then CurrKey=3,Draw(1,1) end return  end
if CurrKey==1 then SV=SV+(K==KUP and (SV<MSV and 0 or -1) or 1)
elseif CurrKey==2 then SA=SA+(K==KUP and (SA<2 and 0 or -1) or 1) end
if SV>LSV then SV=LSV end
if SA>LSA then SA=LSA end
Draw(1,1)
end
function KeyUP(K,V)
if (ULOK>0 or KEY==1) and Keep==0 then   --Unlock
if K==OK then
CurrKey=(CurrKey>=2 and 0 or (CurrKey+1))
if CurrKey==0 then SetVA(SV,SA,KSi,1) end
end
Draw(1,1)
else--if REGT>0 or KEY==0 then --Reg
REGK1=REGK1..K
if REGT==-1 then if REGKEY==REGK1 then CurrKey=1,Draw(1,1),ULOK=4,REGK1=""  end end
LOG(ULOK.."  "..KEY.."  "..K.."  "..REGK1..type(REGK1).."  "..REGKEY..type(REGKEY).." "..REGT.."  "..(REGK1==REGKEY and "OK" or "Er"))
end
end
Tick:register(50, 1, function() TOUT=4,KOUT=2--,ULOK=(ULOK==-1 and -1 or 20)
if gpio.read(Key)==1 then Tick:stop(),KeyUP(Key,1),T_i=0,Keep=0,gpio.trig(Key,gpio.INTR_DOWN, KeyDown),Key=-1
else
if T_i==22 then T_i=18,KeyPress(Key,0),Keep=1 else T_i=T_i+1 end
end
end)
tmr.create():alarm(1000, 1, function()
if TOUT > 0 then TOUT=TOUT-1 elseif TOUT == 0 then CurrKey=0,SetVA(SV,SA,KSi,1),TOUT=-1,ULOK=-1 end  --Tout
if REGT > 0 then REGT=REGT-1 elseif REGT == 0 then REGT=-1,Setcfg("REGKEY",REGK1,1),REGKEY=REGK1,REGK1="",LOG("RegKey end") end   --Save Key
if KOUT > 0 then KOUT=KOUT-1 elseif KOUT == 0 then if REGT==-1 then REGK1="" end,KOUT=-1,LOG(KOUT)  end   --Unlock
-- if ULOK > 0 then ULOK=ULOK-1 elseif ULOK == 0 then ULOK=-1 end
end)
gpio.config({gpio={OK,UP,Down},dir=gpio.IN, pull=gpio.PULL_UP})
gpio.trig(UP,gpio.INTR_DOWN, KeyDown)
gpio.trig(Down,gpio.INTR_DOWN, KeyDown)
gpio.trig(OK,gpio.INTR_DOWN,KeyDown)
REGKEY=REGKEY or "0215"
REGK1=""
REGT=-1
KOUT=-1
ULOK=-1
function RegKey(V) REGT=V,REGK1="" end

-- Logo.run.lua
Logo=Logo or '0104',VT=Logo:sub(3,4)+0,local VV=Logo:sub(1,2)+0
if SR==0 then
Tx1=string.char(0x00,0x03,0x00,0x03,0x7F,0x03,0x60,0x7F,0xE0,0x61,0xB6,0x31,0xFC,0x06,
0x78,0x06,0x18,0x06,0x3C,0x0F,0x6C,0x0F,0xE6,0x19,0x83,0x19,0xC0,0x30,0x60,0x60,0x30,0xC0)
Tx2=string.char(0x00,0x00,0x0C,0x03,0xD8,0x7D,0xD8,0x6C,0xC0,0x6C,0xC0,0x6C,0xDF,0x6C,
0xD8,0x6C,0xD8,0x6C,0xD8,0x7F,0xD8,0x3D,0xD8,0x0C,0x18,0x0C,0x3C,0x0C,0xE6,0xFF,0x00,0x00)
Tx3=string.char(0x18,0x06,0x18,0x06,0xF8,0xFF,0x0C,0x06,0x0C,0x06,0xEE,0x7F,0x6E,0x66,
0x6F,0x66,0xEC,0x7F,0x0C,0x06,0xCC,0x06,0x8C,0x07,0x0C,0x03,0x8C,0x07,0xCC,0x1C,0x7C,0xF0)
Tx4=string.char(0x00,0x00,0xFC,0x3F,0x8C,0x31,0x8C,0x31,0x8C,0x31,0xFC,0x3F,0x8C,0x31,
0x8C,0x31,0x8C,0x31,0xFC,0x3F,0x8C,0x31,0x8C,0x31,0x8C,0x31,0x86,0x31,0x86,0x3D,0x03,0x18)
else
Tx4=string.char(0x03,0x0C,0x06,0x06,0x0C,0x03,0x98,0xC1,0x98,0x67,0xF0,0x36,0xF0,0x3C,
0x60,0x18,0x60,0x1E,0x60,0x3F,0x8C,0x6D,0x86,0x07,0xFE,0x06,0xC0,0xFE,0xC0,0x00,0xC0,0x00)
Tx3=string.char(0x00,0x00,0xFF,0x67,0x30,0x3C,0x30,0x18,0x30,0x1B,0xBC,0x1B,0xFE,0x1B,
0x36,0x1B,0x36,0x1B,0x36,0xFB,0x36,0x03,0x36,0x03,0x36,0x1B,0xBE,0x1B,0xC0,0x30,0x00,0x00)
Tx2=string.char(0x0F,0x3E,0x38,0x33,0xE0,0x31,0xC0,0x30,0xE0,0x31,0x60,0x33,0x60,0x30,
0xFE,0x37,0x66,0xF6,0x66,0x76,0xFE,0x77,0x60,0x30,0x60,0x30,0xFF,0x1F,0x60,0x18,0x60,0x18)
Tx1=string.char(0x18,0xC0,0xBC,0x61,0x8C,0x61,0x8C,0x31,0x8C,0x31,0x8C,0x31,0xFC,0x3F,
0x8C,0x31,0x8C,0x31,0x8C,0x31,0xFC,0x3F,0x8C,0x31,0x8C,0x31,0x8C,0x31,0xFC,0x3F,0x00,0x00)
end
function ShowLogo(disp) disp:clearBuffer()
disp:drawXBM(11,(SR==0 and 25 or 30),16,16,Tx1)
disp:drawXBM(41,(SR==0 and 25 or 30),16,16,Tx2)
disp:drawXBM(71,(SR==0 and 25 or 30),16,16,Tx3)
disp:drawXBM(101,(SR==0 and 25 or 30),16,16,Tx4)
if VV==1 then disp:drawStr((SR==0 and 80 or 50),(SR==0 and 63 or 5),'Ver:'..Ver:match('-(.+)')) end
disp:sendBuffer(),end

-- NTC10.run.lua
local NTC_10K = {97120,91660,86540,81720,77220,72980,69000,65260,61760,58460,
55340,52420,49660,47080,44640,42340,40160,38120,36200,34380,
32660,31040,29500,28060,26680,25400,24180,23020,21920,20880,
19900,18970,18090,17260,16460,15710,15000,14320,13680,13070,
12490,11940,11420,10920,10450,10000,9574,9166,8778,8408,
8058,7722,7404,7098,6808,6532,6268,6016,5776,5546,
5326,5118,4918,4726,4544,4368,4202,4042,3888,3742,
3602,3468,3340,3216,3098,2986,2878,2774,2674,2580,
2488,2400,2316,2234,2158,2082,2012,1942,1876,1813,
1751,1693,1637,1582,1530,1480,1432,1385,1341,1298,
1256,1216,1178,1141,1105,1071,1038,1006,975,945.2,
916.4,888.8,862,836.4,811.4,787.4,764.2,741.8,720.2}
-- -20 TO 98
local Index = 2     --Save the last tag index
function ReadADC(IO)
local ADC,Max,Min,Mean={},0,4095,0
for i = 1,7,1 do
ADC[i]=adc.read(1,IO)
if Max < ADC[i] then Max = ADC[i] end
if Min > ADC[i] then Min = ADC[i] end
Mean = Mean + ADC[i]
-- LOG(ADC[i])
end
Mean = (Mean - Max - Min) / 5
-- LOG(Min,Max,Mean)
return Mean
end
function GetNTC(IO,RS,VCC)
VCC = VCC or 3.3 , RS = RS or 10000
local V_NTC, NTC = (4096-ReadADC(IO)+150)/1200, 2          --SOLO
if V_NTC > 2.5 or V_NTC < 0.22 then return -1 end
local R_NTC = (RS * V_NTC) / (VCC - V_NTC)
--LOG(V_NTC)
if NTC_10K[Index] < R_NTC then Index = 2 end
for i = Index , 119 , 1 do
if NTC_10K[i] <= R_NTC then Index = i-5 , NTC = i , break end
end
local Str1 = NTC_10K[NTC-1] - NTC_10K[NTC]
local Str2 = (NTC_10K[NTC-1] - R_NTC) / Str1
return tonumber(string.format("%.1f",(NTC - 21 + Str2)))
end

-- UPData.lua
CF=(CFile or file)
SetCFG("Ver","3.48")
CF.remove("UPData")
CF.remove("GM")
for N,S in pairs(CF.list()) do
if N:match("%.Bak$") then CF.remove(N) end
local SN=N:match("(.+)%.UP$")
if SN=="Logo.run" and CF.exists(SN) then
CF.remove(SN..".UP")
else
if SN then CF.remove(SN),CF.rename(N,SN) end
end
end

-- Wifi.lua
Wifi={{ssid="config",pwd="88888888"},{ssid="CMCC-Cxjdwx",pwd="5003819715"}}
Load("Wifi")
TCP,IP,Connected=0,"",false
local function Send(MSG) TCP:send(MSG.."\n")  end
function TCPSend(V) TCP=(pcall(Send,V) and TCP or 0) end
local TK,CK,WT,Tick,RTK=1,false,1,tmr.create(),1
sv = net.createServer(net.TCP, 30)
sv:listen(1998, function(coon) TCP=coon,CK=false
coon:on("receive", function(U,T)
if CK then
for D in T:gmatch('(.-)\n') do
local C,S=string.match(D,"<([^>]+)>(.*)")
if     C=="S" then CFile.remove(S..".Bak"),CFile.open("Update.tmp","w+"),UPDate=1
elseif C=="E" then CFile.close(),CFile.rename(S,S..".Bak"),CFile.rename("Update.tmp",S),UPDate=0
elseif C=="W" then CFile.write(S.."\n")
elseif C=="C" then DoStr(S) end
TCPSend("<R>"..D)
end
else
if T==TK.."\n" then CK= true ,TCPSend("CheckOK\n") end
end
end)
TK="CK"..GetSHA1("Cxjdwx"..CXJDWX.uptime()),TCPSend(TK.."\nCAN:"..(Ver or 1).." QQ:"..(QQ or 1))
TK=GetSHA1(TK.."@t*s$e#T.'1)`"),TCPSend("<U>"..(IP or 0))
end)
function SetWifi(S,P)
local add,Str=1,""
for i = 1,#Wifi,1 do
if Wifi[i].ssid==S then Wifi[i].pwd=P,add=0,LOG("ADD") end
Str=Str.."      {ssid=\""..Wifi[i].ssid.."\",pwd=\""..Wifi[i].pwd.."\"},\n"
end
if add == 1 then
table.insert(Wifi,{ssid=S,pwd=P})
Str=Str.."      {ssid=\""..S.."\",pwd=\""..P.."\"},\n"
end
Str=Str:concat("^ +",""):concat("[\n,]+$","")
Str="Wifi={"..Str.."}", Save(Str,"Wifi")
end
wifi.mode(AP==0 and 1 or 3),wifi.start()
wifi.sta.on("got_ip",function(E,I)
if Net and RST==1 then Load(Net) end
IP=I.ip,RST=0,LOG(IP),Connected=true
if SetIP then SetIP(IP,I.netmask,I.gw) end
if Coned then Coned(IP,I.netmask,I.gw) end
end)
wifi.sta.on("disconnected",function(E,I) Connected=false
wifi.sta.disconnect(), Tick:start()
if DEBUG then LOG("Disconnect") end
end)
function SCAN()
if DEBUG then LOG("Scan Wifi") end
wifi.sta.scan({hidden=0}, function(err,arr)
if err then wifi.sta.disconnect()
else
for i,ap in ipairs(arr) do
for j,ap1 in pairs(Wifi) do
if ap.ssid==ap1.ssid then Tick:stop(),wifi.sta.config(ap1),return end
end
end
end
end)
if DEBUG then LOG("Can,t Find") end
end
Tick:register(15000, 1, SCAN),Tick:start()
UDP = net.createUDPSocket(),UDP:listen(1988)
UDP:on("receive", function(s,d,p,ip) s:send(p,ip,SSID..":"..(ip:match("192%.168%.4%.") and "192.168.4.1" or IP)) end)
if AP==1 then wifi.ap.config({ssid=SSID,pwd="88888888"}) end
SCAN()

-- ZTE.lua
Ver="ZTE-"..Ver,SSID=SSID:concat("Control",Ver)
OV,OA,OW,IW,OT=0,0,0,0,0
LSV=LSV or (59*OVD),MSV=MSV or (41.5*OVD)
Ti,AH,WH,CID,NTC,YS,DS,OL=0,"0.00","0.00",0,0,0,1,0
Set={IV=0,IA=0,OA=0,MA=0,OV=0,IA=0,IT=0,OT=0,OW=0,OA1=0,EFI=0,OT1=0,IW=0,IT=0}
function CANSend(ID,V1,V2,V3,V4)
V2=string.format("%04X",V2),V3=string.format("%04X",V3), V4=string.format("%04X",V4) ,
V1=encode.fromHex(V1..V2..V3..V4) , can.send(1,ID,V1)
end
function SetVA(V,A,S,C)
CANSend(0x12780020,"7820","600",V/OVD*10,A/OAD*10)
CANSend(0x12780022,"7822","600",V/OVD*10,A/OAD*10)
if S then
KSA,KSi,SA,SV={KS1,KS2,KS3,KS4},S,A,V
SetCFG("KSi",KSi),SetCFG("KS"..S,{V,A},C)
end
end
function SetPON(V) PON=(V or 0)
Mode=PON==0 and "WT" or (Mode=="T" and "T" or "SP")
CANSend(0x12780030+CID,"7830",PON==1 and 0 or 256,0,0),SetFan(0)
end
--function SPIO() SPM=1-SPM,gpio.write(27,SPM),SetCFG("SPM",SPM,1) end
function CANRecv(Format,ID,Data) OL=3
if GM then LOG(string.format("%08X",ID) .."  "..ETH(Data)) end
if UPDate and GM==0 then return end
if CID==0 then CID=HTD(string.format("%08X",ID):sub(3,4))*256 end
if ID~=0x1a007810+CID*256 then return end
local T=ETH(Data)
local I,J,K,V=T:sub(3,4),HTD(T:sub(5,8)),HTD(T:sub(9,12)),HTD(T:sub(13,16))
if I=="00" then Set.IV=J/10
elseif I=="41" then Set.IA=J/10*IAT,IW=Set.IA*Set.IV,Set.IW=IW
elseif I=="42" then
OA=Avg(K/10*OAT),if OA<CLV then OA=0 end
OT=V/10,OV=J/10*OVT,OW=OA*OV
Set.OA=OA,Set.OT=OT,Set.OV=OV,Set.OW=OW
elseif I=="84" then Set.MA=V/10 end
if GM then
LOG(string.format("%08X",ID) .."  "..T:sub(1,2).."  "..I.."  "..(J/10).."  "..(K/10).."  "..(V/10))
end
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
OL=OL-(OL>0 and 1 or 0)
if UPDate then return end
if NTC>=0 and NTC<=95 then NTC=GetNTC(5),Set.IT=Set.OT,Set.OT=NTC,OT=NTC end
local MSG=""
for K,T in pairs(Set) do MSG=MSG.." "..K.."="..T end
ShowMSG(MSG)
if id ~= "00" then CANSend(0x1A780012+CID,"7810",0,0,0) end
end)
can.setup({speed=500,tx=5,rx=4,dual_filter=false,code=0,mask=0xffffffff},CANRecv),can.start()
tmr.create():alarm(2000, 0, function()  SetVA(SV,(HQ==0 and SA or 2)) end)

-- Check.mf.lua
local LED=12
FIO=13,Mode="WT",CFG1=""
SYS=SYS or 1,QQ=QQ or 'Cxjdwx'
FMW,FMT,SPM,KEY,AJH,PON,FON=1500,45,0,1,0,0,0
OAD,OAT,OVD,OVT,IAT=1,1,1,1,1
SMW,HQ,KUP,DBL,SDP=1,0,2,3,0
TMC,TMW,MSV,LSV,CLV=70,3000,"","",0.45
SOC,HQi,AT=100,0,0
TStr={"ZTE.inf","Huawei.inf","Increase.inf","INFY.inf","EPS6020.inf"}
INF=TStr[DR+1]
local T,C=tmr.create(),1
gpio.config({gpio=LED,dir=gpio.OUT})
T:alarm(500, 1, function() C=1-C,gpio.write(LED, (Connected and 1 or C))end)
Setcfg=SetCFG
function SetCFG(N,V,S) CFG1=CSet(N,V,CFG1,S and INF or 0)  end
function SaveTi() SetCFG("MAH",MAH),SetCFG("MWH",MWH),SetCFG("MTi",MTi,1) end
function SetDR(V)
if Huawei+ZTE+Increase<=1 then return end
local S=(DR==2 and 1 or (DR+2))
for K,T in pairs({ZTE,Huawei,Increase}) do
if K>=S and T==1 then Setcfg("DR",K-1,1),return end
end
DR=2,SetDR()
end
function SetSR(V) if DSP==1 then Setcfg("SR",V,1) end end
function SetDV(V)
if DSP==1 then
if DV==0 then DV=1
elseif DV==1 then DV= u8g2.st7567_pi_132x64 and 2 or 0
elseif DV==2 then DV= u8g2.ssd1309_128x64_noname0 and 3 or 0
elseif DV==3 then DV=0 end
Setcfg("DV",DV,1)
end
end
function GetINF()
local TStr=" SA="..SA.." SV="..SV.." OVT="..OVT.." OAT="..OAT..
" MW="..MW.." SA2="..SA2.." SPM="..SPM..
" GV="..GV.." FS="..FS.." SD="..SD.." LMW="..LMW
TStr=TStr.." OVD="..OVD.." LSV="..LSV.." LSA="..LSA..
" PON="..PON.." HQ="..HQ.." MSV="..MSV..
" KEY="..KEY.." TMS="..TMC.."C"..TMW.."W"
TStr=TStr.." KS1="..KS1[1].."V"..KS1[2].." KS2="..KS2[1].."V"..KS2[2]..
" KS3="..KS3[1].."V"..KS3[2].." KS4="..KS4[1].."V"..KS4[2]..
" DC1="..DC1.." DC2="..DC2.." DC3="..DC3.." DC4="..DC4
TStr=TStr.." AJH="..AJH.." DBL="..DBL.." MFs="..MFs.." KSi="..KSi
local SYS1=" SYS="..SYS.." Huawei="..Huawei.." Increase="..Increase.." ZTE="..ZTE..
" DSP="..DSP.." DR="..DR.." SR="..SR.." DV="..DV
LOG(TStr..SYS1),BSend(SYS1)
end
function Unlock(V)
local T,SHA1={"DSP","Huawei","ZTE","Increase","INFY","EPS6020"},0
for K,S in pairs(T) do
SHA1 = crypto.new_hash("SHA1")
SHA1:update(">.<Cxjdwx.Unlock>.<"..CXJDWX.chipid()..S)
SHA1=encode.toHex(SHA1:finalize())
if SHA1:match("........$")==V then LOG("Unlock="..S),Setcfg(S,1,1) end
end
end
function SetFan(T)
local TFs=MFs+(tonumber(T)-30)*FS ,TFs=(TFs>1013 and 1013 or(TFs < MFs and MFs or TFs))
if math.abs(TFs-Fs)>10 then Fan:setduty(1023-(PON==0 and TFs or 0)),Fs=TFs end
end
function CheckVal()
if AJH > 0 then  if (SV-OV)<1 then SetVA(SV-AJH,SA) elseif (SV-AJH-OV)<1 then SetVA(SV,SA) end end
end
function ToS(V)
local HH=math.floor(V/3600),local MM=math.floor((V-HH*3600)/60),local SS=math.floor(V-MM*60-HH*3600)
return string.format("%02d",HH)..":"..string.format("%02d",MM)..":"..string.format("%02d",SS)
end
function HTD(V) return  string.format("%d","0x"..V) end         --Hex TO Dec
function DTH(V,S) return string.format(S or "%04X",V) end              -- Dec To Hex
function ETH(V) return encode.toHex(V) end                     -- Encoder Data To Hex
function format(S,V,O) return string.format(S,V)..(O or "") end
function Reset()
CFG1="LMW=3500\nLFS=0\nLSA=40\n\nMAH=0\nMWH=0\nMTi=0\n\nOVD=1\n"..
"OVT=1\nIAT=1\nOAT=1\nFS=20\nFs=500\nMFs=400\n\nSD=0\nSV=54.6\nGV=52.6\n"..
"SA=15\nSA2=0\nSMW=1\nMW=3500\n\nSDT=SD*60\n\nHQ=0\n"
Save(CFG1,INF)
end
function ShowMSG(MSG)
local A1,A2=MW/OV,TMW/OV
MSG="Mode="..Mode.." Fan="..Fs.." SDT="..SDT.." SOC="..SOC..
" AH="..format("%0.2f",AH).." Ti="..ToS(YS==0 and Ti or YS).." WH="..format("%0.2f",WH)..
" MWH="..format("%0.2f",MWH).." MAH="..format("%0.2f",MAH).." MTi="..ToS(MTi).." OL="..OL..MSG
if OW > (MW+25) then if SA>A1 then SetVA(SV,A1) end end
if OT >= TMC and OW > (TMW+25) then if OA>A2 then SetVA(SV,A2)end end
local Ah,Wh=(OA/3600),((IW==0 and OW or IW)/3600)
AH=AH+Ah,MAH=MAH+Ah,WH=WH+Wh,MWH=MWH+Wh
if Mode=="WT" then
if OA > 0.5 then Mode="A" end
elseif Mode=="T" then
if YS==0 then SetPON(0),Mode="WT" else YS=YS-1,SetPON(1) end
elseif Mode=="A" then
if SA2 == 0 then if AT > 15 then Mode="C",SaveTi() end
elseif OV>=GV and AT>5 and OA>1 then Mode="B_",SetVA(SV,SA2),NSA=SA2 end
--}else if(OV>=SV2&&AT>5&&OA>1){Mode="B_",SaveT(),}
elseif Mode=="B_" then
if OA > 1 then Mode="B",SetVA(SV,SA2) else CheckVal() end
elseif Mode=="B" then
if AT > 15 then Mode="C",SaveTi() end
if OV > GV then
local V0=(SV-GV)
local V1=V0-(OV-GV)
local V2=SA2/V0
local V3=V1*V2,if V3<1 then V3=1 end
if V3<NSA then SetVA(SV,V3),NSA=V3 end
end
elseif Mode=="C" and SD > 0 then
if OA < 0.5 then CheckVal() end , SDT=SDT-1
if SDT==0 then SaveTi(),Mode="S",Fan:setduty(1023) end
elseif Mode=="S" then SetPON(1) end
if SA-OA<1 and Mode ~="S" then Mode="A" end
if Mode:match("^[ABC]$") then SetFan(OT),MTi=MTi+1,Ti=Ti+1 end
if DCA[KSi]~=0 then
BMin=DCA[KSi]*DBL,BPi=(SV-BMin)/100
SOC=(OV-BMin)/BPi,SOC=format("%0.2f",SOC)+0
SOC=(SOC>100 and 100 or (SOC<0 and 0 or SOC))
end
if HQ > 0 then
if OA > 1 then
if HQi <= HQ then
HQi = HQi + 1
SetVA(SV,((SA - 2) / HQ) * HQi + 2 )
end
else  HQi = 0 ,SetVA(SV,2) end
end
AT=(OA<1 and AT+1 or 0)
LOG(MSG),if Draw then Draw(MSG) end
if LOG then LOG(MSG) end
end
if CFile.exists(INF) then CFG1=Open(INF) else Reset() end
Load(INF),Load(INF:match('(.-)%.inf')),CFG1=Open(INF)
KS1,KS2,KS3,KS4=KS1 or {54.6,15},KS2 or {58.8,15},KS3 or {71.4,15},KS4 or {84.0,15}
KSA,KSi={KS1,KS2,KS3,KS4},(KSi or 1)
SV=KSA[KSi][1],SA=KSA[KSi][2]
DC1,DC2,DC3,DC4=DC1 or 13,DC2 or 14,DC3 or 17,DC4 or 20
DCA={DC1,DC2,DC3,DC4}
Fs=MFs
gpio.config({gpio=27,dir=gpio.IN_OUT, pull=gpio.PULL_DOWN}),gpio.write(27,SPM or 0)
gpio.config({gpio=23,dir=gpio.IN, pull=gpio.PULL_UP})
Fan=ledc.newChannel({gpio=(gpio.read(23)==0 and 23 or 13),bits=10,mode=0,timer=0,channel=0,frequency=1000,duty=1023-Fs})
if (u8g2 and DSP or 0)==1 then Load("Draw") end