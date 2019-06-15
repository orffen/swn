/**
 * Copyright (c) 2017 Steve Simenic <orffen@orffenspace.com>
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

var bodyTypes        = ["Humanlike", "Avian", "Reptilian", "Insectile", "Exotic", "Hybrid"];
var lenses           = ["Collectivity", "Curiosity", "Despair", "Domination", "Faith", "Fear", "Gluttony", "Greed", "Hate", "Honor", "Journeying", "Joy", "Pacifism", "Pride", "Sagacity", "Subtlety", "Tradition", "Treachery", "Tribalism", "Wrath"];
var socialStructures = ["Democratic", "Monarchic", "Tribal", "Oligarchic", "Multipolar", "Multipolar"];

function generateAlien() {
    var bodyType        = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
    var lens            = [];
    var socialStructure = socialStructures[Math.floor(Math.random() * socialStructures.length)];
    if (bodyType == "Hybrid") {
        let numberBodyTypes = [2, 2, 3][Math.floor(Math.random() * 3)]; // generate 2 templates twice as often as 3
        let tempBodyTypes = new Set();
        while (tempBodyTypes.size < numberBodyTypes) {
            let newBodyType = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
            if (newBodyType != "Hybrid") { // don't allow another 'Hybrid' bodyType to be added
                tempBodyTypes.add(newBodyType);
            }
        }
        bodyType = [...tempBodyTypes].join("/"); // convert to string for output
    }
    var limit           = [1, 2, 2, 3, 4][(Math.floor(Math.random() * 5))];
    for (let index = 0; index < limit; index++) {
        lens.push(lenses[Math.floor(Math.random() * lenses.length)]);
    }
    return [bodyType, lens, socialStructure];
}
