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

var characterClasses = {
  "Expert (Smart)": ["10 (+0)", "12 (+0)", "11 (+0)", "14 (+1)", "7 (-1)", "9 (+0)", 0, "+0"],
  "Expert (Smooth)": ["7 (-1)", "9 (+0)", "10 (+0)", "12 (+0)", "11 (+0)", "14 (+1)", 0, "+0"],
  "Expert (Nimble)": ["10 (+0)", "14 (+1)", "12 (+0)", "11 (+0)", "9 (+0)", "7 (-1)", 0, "+0"],
  "Warrior (Melee)": ["14 (+1)", "9 (+0)", "12 (+0)", "7 (-1)", "10 (+0)", "11 (+0)", 2, "+1"],
  "Warrior (Ranged)": ["9 (+0)", "14 (+1)", "12 (+0)", "10 (+0)", "7 (-1)", "11 (+0)", 2, "+1"],
  "Warrior (Leader)": ["7 (-1)", "10 (+0)", "9 (+0)", "11 (+0)", "12 (+0)", "14 (+1)", 2, "+1"],
  "Psychic (Seer)": ["9 (+0)", "11 (+0)", "12 (+0)", "10 (+0)", "14 (+1)", "7 (-1)", 0, "+0"],
  "Psychic (Adept)": ["12 (+0)", "10 (+0)", "14 (+1)", "9 (+0)", "11 (+0)", "7 (-1)", 2, "+0"] // HD modifier incorporates CON bonus
};

var backgrounds = {
  "Barbarian": ["Survive-0", "Notice-0", "Any Combat-0"],
  "Clergy": ["Talk-0", "Perform-0", "Know-0"],
  "Courtesan": ["Perform-0", "Notice-0", "Connect-0"],
  "Criminal": ["Connect-0", "Sneak-0", "Talk-0"],
  "Dilettante": ["Connect-0", "Know-0", "Talk-0"],
  "Entertainer": ["Perform-0", "Talk-0", "Connect-0"],
  "Merchant": ["Trade-0", "Talk-0", "Connect-0"],
  "Noble": ["Lead-0", "Connect-0", "Administer-0"],
  "Official": ["Administer-0", "Talk-0", "Connect-0"],
  "Peasant": ["Exert-0", "Sneak-0", "Survive-0"],
  "Physician": ["Heal-0", "Know-0", "Notice-0"],
  "Pilot": ["Pilot-0", "Fix-0", "Shoot or Trade-0"],
  "Politician": ["Talk-0", "Lead-0", "Connect-0"],
  "Scholar": ["Know-0", "Administer-0", "Connect-0"],
  "Soldier": ["Any Combat-0", "Exert-0", "Survive-0"],
  "Spacer": ["Fix-0", "Pilot-0", "Program-0"],
  "Technician": ["Fix-0", "Notice-0", "Exert-0"],
  "Thug": ["Any Combat-0", "Talk-0", "Connect-0"],
  "Vagabond": ["Notice-0", "Sneak-0", "Survive-0"],
  "Worker": ["Connect-0", "Exert-0", "Work-0"]
};

var psychicSkills = [
  "Biopsionics-0",
  "Metapsionics-0",
  "Precognition-0",
  "Telekinesis-0",
  "Telepathy-0",
  "Teleportation-0"
];

var focuses = {
  "Expert (Smart)": [["Specialist/Fix", "Die Hard"], ["Hacker", "Tinker"], ["Specialist/Know", "Healer"], ["Specialist/Fix", "Tinker"], ["Healer", "Ironhide"], ["Specialist/Fix", "Hacker"]],
  "Expert (Smooth)": [["Diplomat", "Connected"], ["Specialist/Talk", "Die Hard"], ["Diplomat", "Alert"], ["Specialist/Lead", "Authority"], ["Healer", "Specialist/Talk"], ["Specialist/Notice", "Specialist/Talk"]],
  "Expert (Nimble)": [["Specialist/Pilot", "Starfarer"], ["Healer", "Die Hard"], ["Tinker", "Gunslinger"], ["Specialist/Sneak", "Assassin"], ["Specialist/Sneak", "Specialist/Exert"], ["Specialist/Entertain", "Specialist/Sneak"]],
  "Warrior (Melee)": [["Savage Fray", "Shocking Assault"], ["Assassin", "Specialist/Sneak"], ["Armsman", "Close Combatant"], ["Close Combatant", "Savage Fray"], ["Ironhide", "Die Hard"], ["Unarmed Combatant", "Close Combatant"]],
  "Warrior (Ranged)": [["Gunslinger", "Close Combatant"], ["Sniper", "Specialist/Sneak"], ["Assassin", "Specialist/Sneak"], ["Ironhide", "Die Hard"], ["Gunslinger", "Tinker"], ["Close Combat", "Alert"]],
  "Warrior (Leader)": [["Gunslinger", "Authority"], ["Ironhide", "Connected"], ["Armsman", "Specialist/Lead"], ["Gunslinger", "Specialist/Talk"], ["Assassin", "Die Hard"], ["Close Combatant", "Henchkeeper"]],
  "Psychic (Seer)": [["Alert"], ["Healer"], ["Specialist/Notice"], ["Psychic Training"], ["Savage Fray"], ["Hacker"]],
  "Psychic (Adept)": [["Armsman"], ["Ironhide"], ["Die Hard"], ["Psychic Training"], ["Healer"], ["Unarmed Combatant"]]
};

var focusesSkills = {
//TODO: poopulate with skill lists for focuses
};


function generateCharacter () {
  var characterClassesKeys = Object.keys(characterClasses);
  var characterClass = characterClassesKeys[Math.floor(Math.random() * characterClassesKeys.length)];
  var characterStatistics = characterClasses[characterClass];
  characterStatistics[6] += Math.floor(Math.random() * 6) + 1; // roll HD
  var backgroundKeys = Object.keys(backgrounds);
  var characterBackground = backgroundKeys[Math.floor(Math.random() * backgroundKeys.length)];
  var characterSkills = backgrounds[characterBackground];
  //TODO: add psychic skills, randomly pick technique if level-1
  var characterFocuses = focuses[characterClass][Math.floor(Math.random() * focuses[characterClass].length)];
  //TODO: add skills based on focuses, incrementing if the skill already exists
  //TODO: add bonus skill, incrementing if the skill already exists

  //TODO: add effort to characterClasses
  //TODO: add saving throws to characterClasses

  //TODO: add equipment package


  return [characterClass, characterStatistics, characterBackground, characterSkills, characterFocuses];
}
