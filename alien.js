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

var bodyTraits = [
  "Avian, bat-like, or pterodactylian",
  "Reptilian, amphibian, or draconic",
  "Insectile, beetle-like, spiderish, or wasp-like",
  "Mammalian, furred or bare-skinned",
  "Exotic, composed of some novel substance",
  "Hybrid"
];

var lenses = [
  "Collectivity"
  "Curiosity"
  "Despair"
  "Domination"
  "Faith"
  "Fear"
  "Gluttony"
  "Greed"
  "Hate"
  "Honor"
  "Journeying"
  "Joy"
  "Pacifism"
  "Pride"
  "Sagacity"
  "Subtlety"
  "Tradition"
  "Treachery"
  "Tribalism"
  "Wrath"
];

var socialStructures = [
  "Democratic",
  "Monarchic",
  "Tribal",
  "Oligarchic",
  "Multipolar Competitive",
  "Multipolar Competitive",
  "Multipolar Cooperative",
  "Multipolar Cooperative"
];


function generateAlien () {
  var bodyTrait = bodyTraits[Math.floor(Math.random() * bodyTraits.length)];
  if (bodyTrait === "Hybrid") {
    let numberBodyTraits = [2, 2, 3][Math.floor(Math.random() * 3)]; // generate 2 templates twice as often as 3
    let tempBodyTraits = new Set();
    while (tempBodyTraits.size < numberBodyTraits) {
      let newBodyTrait = bodyTraits[Math.floor(Math.random() * bodyTraits.length)];
      if (newBodyTrait != "Hybrid") { // don't allow another 'Hybrid' bodyTrait to be added
        tempBodyTraits.add(newBodyTrait);
      }
    }
    bodyTrait = [...tempBodyTraits].join("/"); // convert to string for output
  }
  var lens = [];
  var limit = [1, 2, 2, 3, 4][(Math.floor(Math.random() * 5))];
  for (let index = 0; index < limit; index++) {
    lens.push(lenses[Math.floor(Math.random() * lenses.length)]);
  }
  var socialStructure = socialStructures[Math.floor(Math.random() * socialStructures.length)];
  return [bodyTrait, lens, socialStructure];
}
