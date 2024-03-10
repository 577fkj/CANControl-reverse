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
