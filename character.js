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

const characterClasses = { // STR, DEX, CON, INT, WIS, CHA, HD modifier, Attack Bonus, Physical Save, Evasion Save, Mental Save, Effort not including highest psychic skill
  "Expert (Smart)": ["10 (+0)", "12 (+0)", "11 (+0)", "14 (+1)", "7 (-1)", "9 (+0)", 0, "+0", 15, 14, 15, "None"],
  "Expert (Smooth)": ["7 (-1)", "9 (+0)", "10 (+0)", "12 (+0)", "11 (+0)", "14 (+1)", 0, "+0", 15, 15, 14, "None"],
  "Expert (Nimble)": ["10 (+0)", "14 (+1)", "12 (+0)", "11 (+0)", "9 (+0)", "7 (-1)", 0, "+0", 15, 14, 15, "None"],
  "Warrior (Melee)": ["14 (+1)", "9 (+0)", "12 (+0)", "7 (-1)", "10 (+0)", "11 (+0)", 2, "+1", 14, 15, 15, "None"],
  "Warrior (Ranged)": ["9 (+0)", "14 (+1)", "12 (+0)", "10 (+0)", "7 (-1)", "11 (+0)", 2, "+1", 15, 14, 15, "None"],
  "Warrior (Leader)": ["7 (-1)", "10 (+0)", "9 (+0)", "11 (+0)", "12 (+0)", "14 (+1)", 2, "+1", 15, 15, 14, "None"],
  "Psychic (Seer)": ["9 (+0)", "11 (+0)", "12 (+0)", "10 (+0)", "14 (+1)", "7 (-1)", 0, "+0", 15, 15, 14, 2],
  "Psychic (Adept)": ["12 (+0)", "10 (+0)", "14 (+1)", "9 (+0)", "11 (+0)", "7 (-1)", 2, "+0", 14, 15, 15, 2] // HD modifier incorporates CON bonus
};

const characterBackgrounds = {
  "Barbarian": ["Survive", "Notice", "Any Combat"],
  "Clergy": ["Talk", "Perform", "Know"],
  "Courtesan": ["Perform", "Notice", "Connect"],
  "Criminal": ["Connect", "Sneak", "Talk"],
  "Dilettante": ["Connect", "Know", "Talk"],
  "Entertainer": ["Perform", "Talk", "Connect"],
  "Merchant": ["Trade", "Talk", "Connect"],
  "Noble": ["Lead", "Connect", "Administer"],
  "Official": ["Administer", "Talk", "Connect"],
  "Peasant": ["Exert", "Sneak", "Survive"],
  "Physician": ["Heal", "Know", "Notice"],
  "Pilot": ["Pilot", "Fix", "Shoot or Trade"],
  "Politician": ["Talk", "Lead", "Connect"],
  "Scholar": ["Know", "Administer", "Connect"],
  "Soldier": ["Any Combat", "Exert", "Survive"],
  "Spacer": ["Fix", "Pilot", "Program"],
  "Technician": ["Fix", "Notice", "Exert"],
  "Thug": ["Any Combat", "Talk", "Connect"],
  "Vagabond": ["Notice", "Sneak", "Survive"],
  "Worker": ["Connect", "Exert", "Work"]
};

const characterPsychicSkills = {
  "Biopsionics": [["Mastered Succor", "Organic Purification Protocols", "Remote Repair"], "Psychic Succor"],
  "Metapsionics": [["Cloak Powers", "Mindtracing", "Synthetic Adaptation"], "Psychic Refinement"],
  "Precognition": [["Intuitive Response", "Sense the Need", "Terminal Reflection"], "Oracle"],
  "Telekinesis": [["Kinetic Transversal", "Pressure Field", "Telekinetic Armory"], "Telekinetic Manipulation"],
  "Telepathy": [["Facile Mind", "Transmit Thought"], "Telepathic Contact"],
  "Teleportation": [["Proficient Apportation", "Spatial Awareness"], "Personal Apportation"]
};

const characterFocuses = {
  "Expert (Smart)": [["Specialist/Fix", "Die Hard"], ["Hacker", "Tinker"], ["Specialist/Know", "Healer"], ["Specialist/Fix", "Tinker"], ["Healer", "Ironhide"], ["Specialist/Fix", "Hacker"]],
  "Expert (Smooth)": [["Diplomat", "Connected"], ["Specialist/Talk", "Die Hard"], ["Diplomat", "Alert"], ["Specialist/Lead", "Authority"], ["Healer", "Specialist/Talk"], ["Specialist/Notice", "Specialist/Talk"]],
  "Expert (Nimble)": [["Specialist/Pilot", "Starfarer"], ["Healer", "Die Hard"], ["Tinker", "Gunslinger"], ["Specialist/Sneak", "Assassin"], ["Specialist/Sneak", "Specialist/Exert"], ["Specialist/Entertain", "Specialist/Sneak"]],
  "Warrior (Melee)": [["Savage Fray", "Shocking Assault"], ["Assassin", "Specialist/Sneak"], ["Armsman", "Close Combatant"], ["Close Combatant", "Savage Fray"], ["Ironhide", "Die Hard"], ["Unarmed Combatant", "Close Combatant"]],
  "Warrior (Ranged)": [["Gunslinger", "Close Combatant"], ["Sniper", "Specialist/Sneak"], ["Assassin", "Specialist/Sneak"], ["Ironhide", "Die Hard"], ["Gunslinger", "Tinker"], ["Close Combat", "Alert"]],
  "Warrior (Leader)": [["Gunslinger", "Authority"], ["Ironhide", "Connected"], ["Armsman", "Specialist/Lead"], ["Gunslinger", "Specialist/Talk"], ["Assassin", "Die Hard"], ["Close Combatant", "Henchkeeper"]],
  "Psychic (Seer)": [["Alert"], ["Healer"], ["Specialist/Notice"], ["Psychic Training"], ["Savage Fray"], ["Hacker"]],
  "Psychic (Adept)": [["Armsman"], ["Ironhide"], ["Die Hard"], ["Psychic Training"], ["Healer"], ["Unarmed Combatant"]]
};

const characterFocusSkills = {
  "Alert": "Notice",
  "Armsman": "Stab",
  "Assassin": "Sneak",
  "Authority": "Lead",
  "Close Combatant": "Any Combat",
  "Connected": "Connect",
  "Diplomat": "Talk",
  "Gunslinger": "Shoot",
  "Hacker": "Program",
  "Healer": "Heal",
  "Henchkeeper": "Lead",
  "Savage Fray": "Stab",
  "Sniper": "Shoot",
  "Specialist/Entertain": "Entertain",
  "Specialist/Exert": "Exert",
  "Specialist/Fix": "Fix",
  "Specialist/Know": "Know",
  "Specialist/Lead": "Lead",
  "Specialist/Notice": "Notice",
  "Specialist/Pilot": "Pilot",
  "Specialist/Sneak": "Sneak",
  "Specialist/Talk": "Talk",  "Star Captain": "Lead",
  "Starfarer": "Pilot",
  "Tinker": "Fix",
  "Unarmed Combatant": "Punch",
  "Wanderer": "Survive"
};

const characterBonusSkills = [
  "Administer",
  "Connect",
  "Exert",
  "Fix",
  "Heal",
  "Know",
  "Lead",
  "Notice",
  "Perform",
  "Pilot",
  "Program",
  "Punch",
  "Shoot",
  "Sneak",
  "Stab",
  "Survive",
  "Talk",
  "Trade",
  "Work",
  "Any",
];

function calculateSkillLevels (s) {
  let skills = [...s];
  let skillsCounted = [];
  let skillsDict = {};
  skills.forEach(function(i) {
    if (!skillsCounted.includes(i)) {
      skillsDict[i] = skills.filter(e => e === i).length - 1;
      skillsCounted.push(i);
    }
  });
  let r = [];
  Object.keys(skillsDict).forEach(key => r.push(key + "-" + skillsDict[key]));
  return r.sort();
}

function Character () {
  let characterClassesKeys = Object.keys(characterClasses);
  let backgroundKeys = Object.keys(characterBackgrounds);
  let psychicSkillsKeys = Object.keys(characterPsychicSkills);
  let characterStatistics = [...characterClasses[this.class]];

  this.class = characterClassesKeys[Math.floor(Math.random() * characterClassesKeys.length)];
  this.background = backgroundKeys[Math.floor(Math.random() * backgroundKeys.length)];
  this.strength = characterStatistics[0];
  this.dexterity = characterStatistics[1];
  this.constitution = characterStatistics[2];
  this.intelligence = characterStatistics[3];
  this.wisdom = characterStatistics[4];
  this.charisma = characterStatistics[5];
  this.armorClass = 10 + Number(this.dexterity.match(/\+\d/));
  this.hitPoints = characterStatistics[6] += Math.floor(Math.random() * 6) + 1 + Number(this.constitution.match(/\+\d/)); // roll HD
  this.attackBonus = characterStatistics[7];
  this.savePhysical = characterStatistics[8];
  this.saveEvasion = characterStatistics[9];
  this.saveMental = characterStatistics[10];
  this.effort = characterStatistics[11];
  this.skills = [...characterBackgrounds[this.background]];
  this.focuses = [...characterFocuses[this.class][Math.floor(Math.random() * characterFocuses[this.class].length)]];
  for (let i = this.focuses.length - 1; i >= 0; i--) {
    switch (this.focuses[i]) {
      case "Die Hard":
        this.hitPoints += 2;
        break;
      case "Ironhide":
        this.armorClass += 6; // 15 + half level rounded up
        break;
      case "Psychic Training":
        this.skills.push(psychicSkillsKeys[Math.floor(Math.random() * psychicSkillsKeys.length)];
        break;
      case "Shocking Assault":
        //TODO
        break;
      default:
        this.skills.push(characterFocusSkills[this.focuses[i]]);
    }
  }  
  let bonusSkill = characterBonusSkills[Math.floor(Math.random() * characterBonusSkills.length)];
  if (bonusSkill === "Any") {
    bonusSkill = this.skills[Math.floor(Math.random() * this.skills.length)];
  }
  this.skills.push(bonusSkill);
  if (this.class.startsWith("Psychic")) {
    let psychicSkill1 = psychicSkillsKeys[Math.floor(Math.random() * psychicSkillsKeys.length)];
    let psychicSkill2 = psychicSkillsKeys[Math.floor(Math.random() * psychicSkillsKeys.length)];
    this.focuses.push(characterPsychicSkills[psychicSkill1][1]);
    if (psychicSkill1 === psychicSkill2) {
      this.focuses.push(characterPsychicSkills[psychicSkill1][0][Math.floor(Math.random() * characterPsychicSkills[psychicSkill1][0].length)]);
      this.effort += 1; // add psychic skill level-1 to effort
    } else {
      this.focuses.push(characterPsychicSkills[psychicSkill2][1]);
    }
    this.skills.push(psychicSkill1);
    this.skills.push(psychicSkill2);
  }

  //TODO: change 'Any Combat' skills
  //TODO: add equipment package

  this.skills = calculateSkillLevels(this.skills);
}
