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

 var rooms = [
    "Armory: locked gun cabinets, armor racks",
    "Art studio: half-finished pieces, tools",
    "Balcony: flowers, crumbling vines",
    "Ballroom: musical instruments, decorations",
    "Barracks: footlockers, stacked bunks",
    "Bath chamber: large bathing pool, steam rooms",
    "Bedroom: locked cabinets, personal mementos",
    "Biotech lab: unfinished experiments, toxins",
    "Broadcasting stage: holocams, props",
    "Cellar: mold, dampness, spiderwebs on shelves",
    "Cold storage: haunches of alien meat",
    "Computer room: flickering servers, vent fans",
    "Council chamber: large table, mapboard, records",
    "Crypt: sarcophagi, bones, grave goods",
    "Dining room: long tables, epergnes, portraits",
    "Dormitory: bunks, dividers, common baths",
    "Engineering workshop: parts, electricity, scrap",
    "Game room: table games, nets, flashing baubles",
    "Garden: benches, fountains, exotic foliage",
    "Great hall: large hearth, tables, raised dais",
    "Greenhouse: vegetables, irrigation systems, insects",
    "Icon room: religious paintings, statues, kneelers",
    "Kennel: stink, fur, bones, feeding bowls",
    "Kitchen: boiling pots, ovens, numerous knives",
    "Lavatory: sonic showers, nonhuman facilities",
    "Lecture hall: podium, seats, holoboard",
    "Library: scrolls, dataslabs, codices, massive folios",
    "Lumber room: spare furniture, dropcloths, dust",
    "Maintenance closet: mops, cleaning solvents, sinks",
    "Medical clinic: empty sprayhypos, antiseptic smell",
    "Monitoring center: banks of screens, darkness",
    "Mortuary: emblaming tools, canopic jars",
    "Museum: display cases, plaques, audio explanations",
    "Nursery: toys, brightly-painted walls, cribs",
    "Operating theater: overhead lights, tables, scalpels",
    "Pantry: dusty cannisters, sacks of grain",
    "Prayer room: icons, kneelers, washbasins",
    "Prison cell: mold, vermin, peeling paint",
    "Quarantine room: cot, bedpan, handwritten will",
    "Solarium: transparent aluminum ceiling, plants",
    "Sparring room: floor mats, practice weapons",
    "Storeroom: crates, bales, cabinets, chests",
    "Theater: costumes, stage, secret machinery",
    "Torture chamber: straps, chemicals, recording gear",
    "Trophy room: xenolife body parts, plaques, chairs",
    "Unfinished room: bare wiring, stacked paneling",
    "Vault: cameras, thick doors, timed locks",
    "Vestibule: coat racks, shoe rests, matting",
    "Wardrobe: out-of-date clothing, mirrors, shoes",
    "Wellhouse: water filters, tanks, heaters"
];

function generateRoom() {
    return rooms[Math.floor(Math.random() * rooms.length)];
}
