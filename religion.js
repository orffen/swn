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

var evolutions = [
    "New holy book; someone in the faith's past penned or discovered a text that is now taken to be holy writ and the expressed will of the divine.",
    "New prophet; this faith reveres the words and example of a relatively recent prophet, esteeming him or her as the final word on the will of God. The prophet may or may not still be living.",
    "Syncretism",
    "Neofundamentalism; the faith is fiercely resistant to perceived innovations and deviations from their beliefs. Even extremely onerous traditions and restrictions will be observed to the letter.",
    "Quietism; the faith shuns the outside world and involvement with the affairs of nonbelievers. They prefer to keep their own kind and avoid positions of wealth and power.",
    "Sacrifices; the faith finds it necessary to make substatial sacrifices to please God. Some faiths may go so far as to offer human sacrifices, while others insist on huge tithes offered to the building of religious edifices.",
    "Schism; the faith's beliefs are actually almost identical to those of the majority of its origin tradition, save for a few minor points of vital interest to theologians and no practical difference whatsoever to believers. This does not prevent a burning resentment towards the parent faith.",
    "Holy family; God's favor has been shown especially to members of a particular lineage. It may be that only men and women of this bloodline are permitted to become clergy, or they may serve as helpless figureheads for the real leaders of the faith."
];
var leaderships = [
    "Patriarch/Matriarch; a single leader determines doctrine for the entire religion, possibly in consultation wiht other clerics.",
    "Patriarch/Matriarch; a single leader determines doctrine for the entire religion, possibly in consultation wiht other clerics.",
    "Council; a group of the oldest and most revered clergy determine the course of the faith.",
    "Council; a group of the oldest and most revered clergy determine the course of the faith.",
    "Democracy; every member has an equal voice in matters of faith, with doctrine usually decided at regular church-wide councils.",
    "No universal leadership; roll again to determine how each region governs itself. If another 6 is rolled, this faith has no heirarchy."
];
var originTraditions = [
    "Paganism",
    "Roman Catholicism",
    "Eastern Orthodox Christianity",
    "Protestant Christianity",
    "Buddhism",
    "Judaism",
    "Islam",
    "Taoism",
    "Hinduism",
    "Zoroastrianism",
    "Confucianism",
    "Ideology"
];

function generateReligion() {
    var evolution = evolutions[Math.floor(Math.random() * evolutions.length)];
    var leadership = leaderships[Math.floor(Math.random() * leaderships.length)];
    var originTradition = originTraditions[Math.floor(Math.random() * originTraditions.length)];
    return [evolution, leadership, originTradition];
}
