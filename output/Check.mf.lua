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
