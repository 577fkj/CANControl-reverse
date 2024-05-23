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
