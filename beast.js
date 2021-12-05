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

const beastTypes = {
  "Small Vicious Beast": ["1 HP", "14", "+1", "1d2", "10m", "7", "+1", "15+"],
  "Small Pack Hunter": ["1", "13", "+1", "1d4", "15m", "8", "+1", "15+"],
  "Large Pack Hunter": ["2", "14", "+2", "1d6", "15m", "9", "+1", "14+"],
  "Large Aggressive Prey Animal": ["5", "13", "+4", "1d10", "15m", "8", "+1", "12+"],
  "Lesser Lone Predator": ["3", "14", "+4 x2", "1d8 each", "15m", "8 +2", "14+"],
  "Greater Lone Predator": ["5", "15", "+6 x2", "1d10 each", "10m", "9 +2", "12+"],
  "Terrifying Apex Predator": ["8", "16", "+8 x2", "1d10 each", "20m", "9 +2", "11+"],
  "Gengineered Murder Beast": ["10", "18", "+10 x4", "1d10 each", "20m", "11 +3", "10+"]
};

const beastAnimalFeatures = [
  "Amphibian, froggish or newtlike",
  "Bird, winged and feathered",
  "Fish, scaled and torpedo-bodied",
  "Insect, beetle-like or fly-winged",
  "Mammal, hairy and fanged",
  "Reptile, lizardlike and long-bodied",
  "Spider, many-legged and fat",
  "Exotic, made of wholly alien elements",
  "Twice"
];

const beastBodyPlans = ["Humanoid", "Quadruped", "Many-legged", "Bulbous", "Amorphous", "Twice"];

const beastLimbNovelties = ["Wings", "Many joints", "Tentacles", "Opposable thumbs", "Retractable", "Varying sizes"];

const beastSkinNovelties = ["Hard shell", "Exoskeleton", "Odd texture", "Molts regularly", "Harmful to touch", "Wet or slimy"];

const beastMainWeapons = ["Teeth or mandibles", "Claws", "Poison", "Harmful discharge", "Pincers", "Horns"];

const beastSizes = ["Cat-sized", "Wolf-sized", "Calf-sized", "Bull-sized", "Hippo-sized", "Elephant-sized"];

const beastBehavioralTraits = {
  "Predator": [
    "Hunts in kin-group packs",
    "Favors ambush attacks",
    "Cripples prey and waits for death",
    "Pack supports alpha-beast attack",
    "Lures or drives prey into danger",
    "Hunts as a lone, powerful hunter",
    "Only is predator at certain times",
    "Mindlessly attacks humans"
  ],
  "Prey": [
    "Moves in vigilant herds", 
    "Exists in small family groups", 
    "They all team up on a single foe", 
    "They go berserk when near death", 
    "They're violent in certain seasons", 
    "They're vicious if threatened", 
    "Symbiotic creature protects them", 
    "Breeds at tremendous rates"
  ],
  "Scavenger": [
    "Never attacks unwounded prey",
    "Uses other beasts as harriers",
    "Always flees if significantly hurt",
    "Poisons prey, waits for it to die",
    "Disguises itself as its prey",
    "Remarkably stealthy",
    "Summons predators to weak prey",
    "Steals prey from weaker predator"
  ]
};

const beastHarmfulDischarges = [
  "Acidic spew doing its damage on a hit",
  "Toxic spittle or cloud",
  "Super-heated or super-chilled spew",
  "Sonic drill or other disabling noise",
  "Natural laser or plasma discharge",
  "Nauseating stench or disabling chemical",
  "Equipment-melting corrosive",
  "Explosive pellets or chemical catalysts"
];

const beastPoisonEffects = ["death", "paralysis", "1d4 dmg per onset interval", "convulsions", "blindness", "hallucinations"];

const beastPoisonOnsets = ["instantly", "1 round", "1d6 rounds", "1 minute", "1d6 minutes", "1 hour"];

const beastPoisonDurations = ["1d6 rounds", "1 minute", "10 minutes", "1 hour", "1d6 hours", "1d6 days"];

function Beast () {
  let beastKeys = Object.keys(beastTypes);
  this.type = beastKeys[Math.floor(Math.random() * beastKeys.length)];
  this.animalFeature = beastAnimalFeatures[Math.floor(Math.random() * beastAnimalFeatures.length)];
  if (this.animalFeature === "Twice") {
    let tempAnimalFeatures = new Set();
    while (tempAnimalFeatures.size < 2) {
      let newAnimalFeature = beastAnimalFeatures[Math.floor(Math.random() * beastAnimalFeatures.length)];
      if (newAnimalFeature !== "Twice") { // don't allow another 'Twice' beastAnimalFeature to be added
        tempAnimalFeatures.add(newAnimalFeature);
      }
    }
    this.animalFeature = [...tempAnimalFeatures].join("/"); // convert to string for output
  }
  this.bodyPlan = beastBodyPlans[Math.floor(Math.random() * beastBodyPlans.length)];
  if (this.bodyPlan === "Twice") {
    let tempBodyPlans = new Set();
    while (tempBodyPlans.size < 2) {
      let newBodyPlan = beastBodyPlans[Math.floor(Math.random() * beastBodyPlans.length)];
      if (newBodyPlan !== "Twice") { // don't allow another 'Twice' beastBodyPlan to be added
        tempBodyPlans.add(newBodyPlan);
      }
    }
    this.bodyPlan = [...tempBodyPlans].join("/"); // convert to string for output
  }
  this.limbNovelty = beastLimbNovelties[Math.floor(Math.random() * beastLimbNovelties.length)];
  this.skinNovelty = beastSkinNovelties[Math.floor(Math.random() * beastSkinNovelties.length)];
  this.mainWeapon = beastMainWeapons[Math.floor(Math.random() * beastMainWeapons.length)];
  this.size = beastSizes[Math.floor(Math.random() * beastSizes.length)];
  let behaviorKeys = Object.keys(beastBehavioralTraits);
  this.behavior = behaviorKeys[Math.floor(Math.random() * behaviorKeys.length)];
  this.behaviorTrait = beastBehavioralTraits[this.behavior][Math.floor(Math.random() * beastBehavioralTraits[this.behavior].length)];
  this.harmfulDischarge = beastHarmfulDischarges[Math.floor(Math.random() * beastHarmfulDischarges.length)];
  this.poison = "None";
  if (this.harmfulDischarge === "Toxic spittle or cloud") {
    let effect = beastPoisonEffects[Math.floor(Math.random() * beastPoisonEffects.length)];
    let onset = beastPoisonOnsets[Math.floor(Math.random() * beastPoisonOnsets.length)];
    let duration = beastPoisonDurations[Math.floor(Math.random() * beastPoisonDurations.length)];
    if (effect.startsWith("1d4")) {
      effect = effect.replace("1d4", Math.floor(Math.random() * 4) + 1);
      if (onset === "instantly") {
        onset = "(once, instantly)";
      } else {
        onset = "(every " + onset + ")";
      }
    } else if (onset.startsWith("1")) {
      onset = "within " + onset;
    }
    onset = onset.replace("1d6", Math.floor(Math.random() * 6) + 1);
    duration = duration.replace("1d6", Math.floor(Math.random() * 6) + 1);
    if (effect === "death" || onset === "(once, instantly)") {
      duration = "";
    } else {
      duration = ", for " + duration;
    }
    this.poison = "Causes " + effect + " " + onset + duration;
  }
}
