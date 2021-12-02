/**
 calculates average exp/run of chapters
 calculates avg consumption of oil
 asks for if any SR/SSR,Rare, or Common ships in fleet
 max oil consumption(surface) is [maxcost * ((100 + min(Level, 99)/200)] + 1
 max oil consumption(subs) is [(maxcost + 1) * (100 + min(Level, 99)/200))]
 doesnt account for limit broken ships
 max amount of stages currently is ~52
 doesnt account for any event exp bonuses/specific faction/ship exp bonuses
 accounts for MVP assuming a ship is guranteed to be MVP in the first place
 asks for which PR ship is being farmed
 PR ships generally needs 3 mil exp to be able to be built
 assumes that s-rank will be obtained each run (1.2x xp)
 started as of 1/14/20
**/