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

var conflicts = {
  "Money": [
    ["Money is owed to a ruthless creditor", "Money was stolen from someone", "A sudden profit opportunity arises", "There's a hidden stash of wealth", "Money is offered from an evil source"],
    ["Organized crime wants it", "Corrupt officials want it", "A sympathetic NPC needs it", "The PCs are owed it", "It will disappear very soon"]
  ],
  "Revenge": [
    ["Someone was murdered", "Someone was stripped of rank", "Someone lost all their wealth", "Someone lost someone's love", "Someone was framed for a crime"],
    ["It was wholly justified", "The wrong person is targeted", "The reaction is excessive", "The PCs are somehow blamed", "Both sides were wronged"]
  ],
  "Power": [
    ["An influential political leader", "A stern community elder", "A ruling patriarch of a large family", "A star expert in a particular industry", "A criminal boss or outcast leader"],
    ["They've betrayed their own", "Someone's gunning for them", "They made a terrible choice", "They usurped their position", "They're oppressing their own"]
  ],
  "Natural Danger": [
    ["A cyclical planetary phenomenon", "A sudden natural disaster", "Sudden loss of vital infrastructure", "Catastrophe from outside meddling", "Formerly-unknown planetary peril"],
    ["Anti-helpful bureaucrats", "Religious zealots panic", "Bandits and looters strike", "The government hushes it up", "There's money in exploiting it"]
  ],
  "Religion": [
    ["Sects that hate each other bitterly", "Zealot reformers forcing new things", "Radical traditionalists fighting back", "Ethnic religious divisions", "Corrupt and decadent institutions"],
    ["Charismatic new leader", "Mandatory state religion", "Heavy foreign influence", "Religious purging underway", "Fighting for holy ground"]
  ],
  "Ideology": [
    ["A universally-despised fringe group", "Terrorists with widespread support", "A political party's goon squads", "Dead-end former regime supporters", "Ruthless ascendant political group"],
    ["Terrorist attack", "Street rioting", "Police state crackdown", "Forced expulsions", "Territory under hostile rule"]
  ],
  "Ethnicity": [
    ["A traditionally subordinate group", "An ethnic group from offworld", "A dominant caste or ethnicity", "An alien or transhuman group", "Two groups that hate each other"],
    ["Forced immigration", "Official ethnic ghettos", "Rigid separation of groups", "Group statuses have changed", "Rising ethnic violence"]
  ],
  "Resources": [
    ["There's a cache of illegal materials", "A hidden strike of rare resources", "Cargo has been abandoned as lost", "Land ownership is disputed", "A resource is desperately necessary"]
    ["Someone thinks they own it", "The state is looking for it", "It has its own protectors", "Rights to it were stolen", "Offworlders want it badly"]
  ]
};

var restraints = [
  "The government is cracking down on the conflict",
  "One side seems invincibly stronger to the other",
  "Both sides have 'doomsday' info or devices",
  "A prior conflict ended horribly for both of them",
  "Foreign participants are keeping things tamped",
  "Elements of both sides seek accommodation",
  "The conflict is only viable in a narrow location",
  "Catastrophic cost of losing a direct showdown",
  "Each thinks they'll win without further exertion",
  "They expect a better opening to appear soon",
  "Former ties of friendship or family restrain them",
  "Religious principles are constraining them",
  "One side's still licking their wounds after a failure",
  "They're building up force to make sure they win",
  "Their cultural context makes open struggle hard",
  "They expect an outside power to hand them a win",
  "They're still searching for a way to get at their goal",
  "One side mistakenly thinks they've already won",
  "A side is busy integrating a recent success",
  "An outside power threatens both sides"
];

var twists = [
  "There's a very sharp time limit for any resolution",
  "The sympathetic side is actually a bunch of bastards",
  "There's an easy but very repugnant solution to hand",
  "PC success means a big benefit to a hostile group",
  "The real bone of contention is hidden from most",
  "A sympathetic figure's on an unsympathetic side",
  "There's a profitable chance for PCs to turn traitor",
  "The 'winner' will actually get in terrible trouble",
  "There's a very appealing third party in the mix",
  "The PCs could really profit off the focus of the strife",
  "The PCs are mistaken for an involved group",
  "Somebody plans on screwing over the PCs",
  "Both sides think the PCs are working for them",
  "A side wants to use the PCs as a distraction for foes",
  "The PCs' main contact is mistrusted by their allies",
  "If the other side can't get it, they'll destroy it",
  "The focus isn't nearly as valuable as both sides think",
  "The focus somehow has its own will and goals",
  "Victory will drastically change one of the sides",
  "Actually, there is no twist. It's all exactly as it seems."
];

function generateProblem() {
  var conflictsKeys = Object.keys(conflicts);
  var conflict = conflictsKeys[Math.floor(Math.random() * conflictsKeys.length)];
  var situation = conflicts[conflict][0][Math.floor(Math.random() * conflicts[conflict][0].length)];
  var focus = conflicts[conflict][1][Math.floor(Math.random() * conflicts[conflict][1].length)];
  var restraint = restraints[Math.floor(Math.random() * restraints.length)];
  var twist = twists[Math.floor(Math.random() * twists.length)];
  return [conflict, situation, focus, restraint, twist];
}
