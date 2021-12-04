/**
 * Copyright (c) 2021 Steve Simenic <orffen@orffenspace.com>
 * 
 * This file is part of the SWN Toolbox.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var hazards = {
  "Social": [
    ["An explosively temperamental VIP", "An unknown but critical social taboo", "A case of mistaken identity", "An expectation for specific PC action", "A frame job hung on the PCs"],
    ["An allied NPC breaks ties", "An enemy is alerted to them", "A new enemy is made", "Cads think the PCs are allies", "An opportunity is lost"]
  ],
  "Legal": [
    ["A regulation unknown to the PCs", "A tax or confiscation", "Vital gear is prohibited here", "Lawsuit from an aggrieved NPC", "A state agent conscripts PC help"],
    ["Substantial monetary fine", "Imprisonment for the party", "Confiscation of possessions", "Deportation from the place", "Loss of rights and protections"]
  ],
  "Environmental": [
    ["Heavy background radiation", "A planetary sickness foreigners get", "Strong or weak local gravity", "Gear-eating microbial life", "Unpredictable psychic power field"],
    ["Catch a lingering disease", "Suffer bodily harm", "Take a penalty on rolls", "Lose some equipment", "Psychic abilities are altered"]
  ],
  "Trap": [
    ["Alarm system attached to a trap", "Snare left for local animals", "Hermit's self-defense measure", "Long-dead builder's trapsmithing", "New occupant's defensive trap"],
    ["Something set on fire", "Guards are summoned", "Fall to a new area", "Equipment is damaged", "Subject is injured"]
  ],
  "Animal": [
    ["Dangerous local swarm vermin", "A big predator lair", "Pack hunters haunt the area", "Flying threats pounce here", "Monstrous beast sleeps or is torpid"],
    ["They have a ranged attack", "They're venomous", "Dangerously coordinated foe", "Killing them inflicts a fine", "Their deaths cause an effect"]
  ],
  "Sentient": [
    ["A group hostile to intruders", "Trickster thieves and con-men", "Hostile expert-system robots", "Secrecy-loving rebels or criminals", "Another area-clearing group"],
    ["Immediate combat", "Treacherous feigned friend", "Lead the PCs into a trap", "Demand payment or loot", "Activate other area defenses"]
  ],
  "Decay": [
    ["Crumbling floor or ceiling", "Waste or heating tubes rupture", "Dangerous standing liquid", "Maintenance robots gone haywire", "Power plant is unstable"],
    ["Ruptures to release a peril", "Toxic or radioactive debris", "Explosive decompression", "Invisible or slow-acting toxin", "Fires or explosions"]
  ],
  "PC-induced": [
    ["Activating a system causes a disaster", "Catastrophic plan proposed by NPCs", "Removing loot triggers defenses", "Handling an object ruins it", "Leaving a thing open brings calamity"],
    ["Horrible vermin are admitted", "Local system goes berserk", "Something ruptures violently", "Ancient defenses awaken", "The PC's goal is imperiled"]
  ]
};

var rewards = [
  "Large cache of credits",
  "Precious cultural artifact",
  "Vital data on the party's goal",
  "Missing or kidnapped",
  "Advanced pretech artifact",
  "Key to some guarded location",
  "Ancient treasure object",
  "Recently-stolen goods",
  "High-tech robotic servitor",
  "Token item of ruling legitimacy",
  "Juicy blackmail material",
  "History-rewriting evidence",
  "Alien artifact of great power",
  "Precious megacorp data files",
  "Map to some valuable thing",
  "Forbidden but precious drug",
  "Legal title to important land",
  "Awful secret of local government",
  "Cache of precious goods",
  "Stock of valuable weaponry"
];

var civilizedOngoings = [
  "Local festival going on",
  "Angry street protests",
  "Minor fire or other disorder",
  "VIP",
  "Tourists from another country",
  "Building repair or maintenance",
  "Recent vehicle crash",
  "Public art performance",
  "Angry traffic jam",
  "Missionaries for a local religion",
  "Loud advertising campaign",
  "Memorial service ongoing",
  "Road work halting traffic",
  "Power outage in the area",
  "Police chasing criminals",
  "Annoying drunks being loud",
  "Beggars seeking alms",
  "Constructing a new building",
  "Local thugs swaggering around",
  "Aerial light display"
];

var wildernessOngoings = [
  "Bandits have moved in",
  "Flooding swept through",
  "Part of it has collapsed",
  "Merchants and peddlers active",
  "Dangerous animals lair here",
  "A rebel cell uses it for a base",
  "Smugglers have landed here",
  "Foreign agents meet here",
  "A hermit has taken up residence",
  "A toxic plant is growing wild",
  "An artist seeks inspiration here",
  "An ancient structure was dug out",
  "The weather has turned savage",
  "A vehicle crashed nearby",
  "Some locals are badly lost",
  "Religious pilgrims come here",
  "Locals fight over control of it",
  "Nature threatens to wipe it out",
  "An old shrine was raised here",
  "A shell of a building remains"
];

function generatePlace() {
  var hazardsKeys = Object.keys(hazards);
  var hazard = hazardsKeys[Math.floor(Math.random() * hazardsKeys.length)];
  var specificExample = hazards[hazard][0][Math.floor(Math.random() * hazards[hazard][0].length)];
  var possibleDanger = hazards[hazard][1][Math.floor(Math.random() * hazards[hazard][1].length)];
  var reward = rewards[Math.floor(Math.random() * rewards.length)];
  var civilizedOngoing = civilizedOngoings[Math.floor(Math.random() * civilizedOngoings.length)];
  var wildernessOngoing = wildernessOngoings[Math.floor(Math.random() * rewards.length)];
  return [hazard, specificExample, possibleDanger, reward, civilizedOngoing, wildernessOngoing];
}
