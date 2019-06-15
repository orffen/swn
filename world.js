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

var atmospheres = [
    "Corrosive",
    "Inert gas",
    "Airless or thin atmosphere",
    "Breathable mix",
    "Breathable mix",
    "Breathable mix",
    "Breathable mix",
    "Breathable mix",
    "Thick atmosphere, breathable with a pressure mask",
    "Invasive, toxic atmosphere",
    "Corrosive and invasive atmosphere"
];
var temperatures = [
    "Frozen",
    "Variable cold-to-temperate",
    "Cold",
    "Cold",
    "Temperate",
    "Temperate",
    "Temperate",
    "Warm",
    "Warm",
    "Variable temperate-to-warm",
    "Burning"
];
var biospheres = [
    "Biosphere remnants",
    "Microbial life",
    "No native biosphere",
    "No native biosphere",
    "Human-miscible biosphere",
    "Human-miscible biosphere",
    "Human-miscible biosphere",
    "Immiscible biosphere",
    "Immiscible biosphere",
    "Hybrid biosphere",
    "Engineered biosphere"
];
var populations = [
    "Failed colony",
    "Outpost",
    "Tens of thousands of inhabitants",
    "Tens of thousands of inhabitants",
    "Hundreds of thousands of inhabitants",
    "Hundreds of thousands of inhabitants",
    "Hundreds of thousands of inhabitants",
    "Millions of inhabitants",
    "Millions of inhabitants",
    "Billions of inhabitants",
    "Alien civilization"
];
var techLevels = [
    "Tech level 0. Stone-age technology.",
    "Tech level 1. Medieval technology.",
    "Tech level 2. Nineteenth-century technology.",
    "Tech level 3. Twentieth-century technology.",
    "Tech level 3. Twentieth-century technology.",
    "Tech level 4. Baseline postech.",
    "Tech level 4. Baseline postech.",
    "Tech level 4. Baseline postech.",
    "Tech level 4. Baseline postech.",
    "Tech level 4 with specialties or some surviving pretech.",
    "Tech level 5. Pretech, pre-Silence technology."
];
var tags = [
    "Abandoned Colony",
    "Alien Ruins",
    "Altered Humanity",
    "Area 51",
    "Badlands World",
    "Bubble Cities",
    "Civil War",
    "Cold War",
    "Colonized Population",
    "Desert World",
    "Eugenic Cult",
    "Exchange Consulate",
    "Feral World",
    "Flying Cities",
    "Forbidden Tech",
    "Freak Geology",
    "Freak Weather",
    "Friendly Foe",
    "Gold Rush",
    "Hatred",
    "Heavy Industry",
    "Heavy Mining",
    "Hostile Biosphere",
    "Hostile Space",
    "Local Specialty",
    "Local Tech",
    "Major Spaceyard",
    "Minimal Contact",
    "Misandry/Misoginy",
    "Oceanic World",
    "Out of Contact",
    "Outpost World",
    "Perimeter Agency",
    "Pilgrimage Site",
    "Police State",
    "Preceptor Archive",
    "Pretech Cultists",
    "Primitive Aliens",
    "Psionics Fear",
    "Psionics Worship",
    "Psionics Academy",
    "Quarantined World",
    "Radioactive World",
    "Regional Hegemon",
    "Restrictive Laws",
    "Rigid Culture",
    "Seagoing Cities",
    "Sealed Menace",
    "Sectarians",
    "Seismic Activity",
    "Secret Masters",
    "Theocracy",
    "Tomb World",
    "Trade Hub",
    "Tyranny",
    "Unbraked AI",
    "Warlords",
    "Xenophiles",
    "Xenophobes",
    "Zombies"
];

function generateWorld() {
    var atmosphere = atmospheres[Math.floor(Math.random() * atmospheres.length)];
    var temperature = temperatures[Math.floor(Math.random() * temperatures.length)];
    var biosphere = biospheres[Math.floor(Math.random() * biospheres.length)];
    var population = populations[Math.floor(Math.random() * populations.length)];
    var techLevel = techLevels[Math.floor(Math.random() * techLevels.length)];
    var tag = [];
    for (let index = 0; index < 2; index++) {
        tag.push(tags[Math.floor(Math.random() * tags.length)]);
    }
    return [atmosphere, temperature, biosphere, population, techLevel, tag];
}
