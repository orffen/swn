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

var npcTypes = {
  "Peaceful Human": [1, "10", "+0", "Unarmed", "10m", "6", "+1", "15+"],
  "Martial Human": [1, "10", "+1", "By weapon", "10m", "8", "+1", "15+"],
  "Veteran Fighter": [2, "14", "+2", "By weapon +1", "10m", "9", "+1", "14+"],
  "Elite Fighter": [3, "16 (combat)", "+4", "By weapon +1", "10m", "10", "+2", "14+"],
  "Heroic Fighter": [6, "16 (combat)", "+8", "By weapon +3", "10m", "11", "+3", "12+"]
};

var backgrounds = [
  "The local underclass or poorest natives",
  "Common laborers or cube workers",
  "Aspiring bourgeoise or upper class",
  "The elite of this society",
  "Minority or foreigners",
  "Offworlders or exotics"
];

var roles = [
  "Criminal, thug, thief, swindler",
  "Menial, cleaner, retail worker, servant",
  "Unskilled heavy labor, porter, construction",
  "Skilled trade, electrician, mechanic, pilot",
  "Idea worker, programmer, writer",
  "Merchant, business owner, trader, banker",
  "Official, bureaucrat, courtier, clerk",
  "Military, soldier, enforcer, law officer"
];

var problems = [
  "They have significant debt or money woes",
  "A loved one is in trouble; reroll for it",
  "Romantic failure with a desired person",
  "Drug or behavioral addiction",
  "Their superior dislikes or resents them",
  "They have a persistent sickness",
  "They hate their job or life situation",
  "Someone dangerous is targeting them",
  "They're pursuing a disastrous purpose",
  "They have no problems worth mentioning"
];

var ages = [
  "Unusually young or old for their role",
  "Young adult",
  "Mature prime",
  "Middle-aged or elderly"
];

var desires = [
  "They want a particular romantic partner",
  "They want money for them or a loved one",
  "They want a promotion in their job",
  "They want answers about a past trauma",
  "They want revenge on an enemy",
  "They want to help a beleaguered friend",
  "They want an entirely different job",
  "They want protection from an enemy",
  "They want to leave their current life",
  "They want fame and glory",
  "They want power over those around them",
  "They have everything they want from life"
];

var characterTraits = [
  "Ambition",
  "Avarice",
  "Bitterness",
  "Courage",
  "Cowardice",
  "Curiosity",
  "Deceitfulness",
  "Determination",
  "Devotion to a cause",
  "Filiality",
  "Hatred",
  "Honesty",
  "Hopefulness",
  "Love of a person",
  "Nihilism",
  "Paternalism",
  "Pessimism",
  "Protectiveness",
  "Resentment",
  "Sham"
];

function generateNPC () {
  var background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  var role = roles[Math.floor(Math.random() * roles.length)];
  var problem = problems[Math.floor(Math.random() * problems.length)];
  var age = ages[Math.floor(Math.random() * ages.length)];
  var desire = desires[Math.floor(Math.random() * desires.length)];
  var characterTrait = characterTraits[Math.floor(Math.random() * characterTraits.length)];
  var statistics = npcTypes["Peaceful Human"];
  if (role === "Criminal, thug, thief, swindler") {
    statistics = npcTypes["Martial Human"];
  } else if (role === "Military, soldier, enforcer, law officer") {
    statistics = npcTypes["Veteran Fighter"];
  }
  return [statistics, background, role, problem, age, desire, characterTrait];
}
