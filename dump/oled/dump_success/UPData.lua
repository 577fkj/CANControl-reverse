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
