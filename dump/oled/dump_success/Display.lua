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
