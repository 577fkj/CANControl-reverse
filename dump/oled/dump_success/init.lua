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
