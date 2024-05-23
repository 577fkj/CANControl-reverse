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
