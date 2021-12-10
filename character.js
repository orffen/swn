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
  "Specialist/Talk": "Talk",
  "Star Captain": "Lead",
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

const characterEquipmentPackages = { // equipment package, AC modifier from base of AC 10
  "Barbarian": [["Spear (1d6+1 damage)", "Backpack (TL0)", "Primitive hide armor (AC 13)", "7 days rations", "Primitive shield (+1 AC)", "20m rope", "Knife (1d4 damage)", "500 credits"], 4],
  "Blade":[["Monoblade sword (1d8+1 dmg)", "Backpack (TL0)", "Woven Body Armor (AC 15)", "Compad", "Secure Clothing (AC 13)", "Lazarus patch", "Thermal knife (1d6 damage)", "50 credits"], 5],
  "Thief": [["Laser Pistol (1d6 damage)", "2 type A cells", "Armored Undersuit (AC 13)", "Backpack (TL0)", "Monoblade knife (1d6 damage)", "Compad", "Climbing harness", "Metatool", "Low-light goggles", "25 credits"], 3],
  "Hacker": [["Laser Pistol (1d6 damage)", "2 type A cells", "Secure Clothing (AC 13)", "Dataslab", "Postech toolkit", "Metatool", "3 units of spare parts", "2 line shunts", "100 credits"], 3],
  "Gunslinger": [["Laser Pistol (1d6 damage)", "8 type A Cells", "Armored Undersuit (AC 13)", "Backpack (TL0)", "Monoblade Knife (1d6 damage)", "Compad", "100 credits"], 3],
  "Soldier": [["Combat Rifle (1d12 damage)", "80 rounds ammo", "Woven Body Armor (AC 15)", "Backpack (TL0)", "Knife (1d4 damage)", "Compad", "100 credits"], 5],
  "Scout": [["Laser Rifle (1d10 damage)", "8 type A cells", "Armored vacc suit (AC 13)", "Backpack (TL0)", "Knife (1d4 damage)", "Compad", "Survey scanner", "25 credits", "Survival kit", "Binoculars (TL 3)"], 3],
  "Medic": [["Laser Pistol (1d6 damage)", "Backpack (TL0)", "Secure Clothing (AC 13)", "Medkit", "4 Lazarus patches", "Compad", "2 doses of Lift", "Bioscanner", "25 credits"], 3],
  "Civilian": [["Secure Clothing (AC 13)", "Compad", "700 credits"], 3],
  "Technician": [["Laser Pistol (1d6 damage)", "4 type A cells", "Armored Undersuit (AC 13)", "Backpack (TL0)", "Monoblade knife (1d6 damage)", "Dataslab", "Postech toolkit", "Metatool", "6 units of spare parts", "200 credits"],  3]
};

function arrayRemove(arr, val) { 
  return arr.filter(function(ele){ 
    return ele !== val; 
  });
}

function addSkill (skills, newSkill = characterBonusSkills[Math.floor(Math.random() * (characterBonusSkills.length - 1))]) {
  let newSkillsList = [];
  let skillCount = {};
  skills.forEach(e => typeof skillCount[e] === "undefined" ? skillCount[e] = 1 : ++skillCount[e]);
  if (newSkill === "Shoot or Trade") {
    newSkillsList = ["Shoot", "Trade"];
    newSkill = newSkillsList[Math.floor(Math.random() * newSkillsList.length)];
  } else if (newSkill === "Any Combat") {
    newSkillsList = ["Stab", "Shoot", "Punch"];
    newSkill = newSkillsList[Math.floor(Math.random() * newSkillsList.length)];
  } else {
    newSkillsList = characterBonusSkills.slice(0, -1); // exclude "Any"
  }
  newSkillsList = arrayRemove(newSkillsList, newSkill);
  skills.push("New");
  while (skills[skills.length - 1] === "New") {
    if (skillCount[newSkill] >= 2) {
      newSkill = newSkillsList[Math.floor(Math.random() * newSkillsList.length)];
      newSkillsList = arrayRemove(newSkillsList, newSkill);
    } else {
      skills[skills.length - 1] = newSkill;
    }
  }
}

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
  this.class = characterClassesKeys[Math.floor(Math.random() * characterClassesKeys.length)];
  this.background = backgroundKeys[Math.floor(Math.random() * backgroundKeys.length)];
  let characterStatistics = [...characterClasses[this.class]];
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
  this.skills = [];
  characterBackgrounds[this.background].forEach(e => addSkill(this.skills, e));
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
        addSkill(this.skills, psychicSkillsKeys[Math.floor(Math.random() * psychicSkillsKeys.length)]);
        break;
      case "Shocking Assault":
        if (this.skills.indexOf("Stab")) { // prefer Stab instead of Punch as none of the quick character templates include Punch
          addSkill(this.skills, "Stab");
        } else if (this.skills.indexOf("Punch")) {
          addSkill(this.skills, "Punch");
        } else {
          addSkill(this.skills, ["Stab", "Punch"][Math.floor(Math.random() * 2)]);
        }
        break;
      default:
        addSkill(this.skills, characterFocusSkills[this.focuses[i]]);
    }
  }
  addSkill(this.skills); // Bonus skill
  if (this.class.startsWith("Psychic")) {
    let psychicSkill1 = psychicSkillsKeys[Math.floor(Math.random() * psychicSkillsKeys.length)];
    let psychicSkill2 = psychicSkillsKeys[Math.floor(Math.random() * psychicSkillsKeys.length)];
    this.focuses.push(characterPsychicSkills[psychicSkill1][1]);
    if (psychicSkill1 === psychicSkill2) {
      this.focuses.push(characterPsychicSkills[psychicSkill1][0][Math.floor(Math.random() * characterPsychicSkills[psychicSkill1][0].length)]);
    } else {
      this.focuses.push(characterPsychicSkills[psychicSkill2][1]);
    }
    addSkill(this.skills, psychicSkill1);
    addSkill(this.skills, psychicSkill2);
    let skillCount = {};
    this.skills.forEach(e => typeof skillCount[e] === "undefined" ? skillCount[e] = 1 : ++skillCount[e]);
    let psychicSkills = Object.keys(characterPsychicSkills);
    for (let i = psychicSkills.length - 1; i >= 0; i--) {
      if (skillCount[psychicSkills[i]] >= 2) {
        this.effort += 1;
      }
    }
  }
  this.skills = calculateSkillLevels(this.skills);
  let equipmentPackage = { // package, AC modifier
    "Barbarian": "Barbarian",
    "Clergy": "Civilian",
    "Courtesan": "Civilian",
    "Criminal": "Thief",
    "Dilettante": "Civilian",
    "Entertainer":"Civilian",
    "Merchant": "Civilian",
    "Noble": "Blade",
    "Official": "Civilian",
    "Peasant": "Civilian",
    "Physician": "Medic",
    "Pilot": "Scout",
    "Politician": "Civilian",
    "Scholar": "Civilian",
    "Soldier": "Soldier",
    "Spacer": "Hacker",
    "Technician": "Technician",
    "Thug": "Gunslinger",
    "Vagabond": "Civilian",
    "Worker": "Technician"
  };
  switch (this.class) {
    case "Warrior (Melee)":
      this.equipment = characterEquipmentPackages["Blade"][0];
      break;
    case "Warrior (Ranged)":
      if (this.background === "Soldier") {
        this.equipment = characterEquipmentPackages["Soldier"][0];
      } else {
        this.equipment = characterEquipmentPackages["Gunslinger"][0];
      }
      break;
    default:
      this.equipment = characterEquipmentPackages[equipmentPackage[this.background]][0];
  }
  if (this.armorClass < 15) { // don't adjust if Ironhide
    this.armorClass += characterEquipmentPackages[equipmentPackage[this.background]][1];
  } else if (this.background === "Barbarian") {
    ++this.armorClass; // add shield AC modifier
  }
}
