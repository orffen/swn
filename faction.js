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

var types = {
    Minor: {
        stats: [4, 3, 1],
        assets: [1, 1],
        hitPoints: 15
    },
    Major: {
        stats: [6, 5, 3],
        assets: [2, 2],
        hitPoints: 29
    },
    Hegemon: {
        stats: [8, 7, 5],
        assets: [4, 4],
        hitPoints: 49
    }
};
var tags = [
    "Colonists",
    "Deep Rooted",
    "Eugenics Cult",
    "Exchange Consulate",
    "Fanatical",
    "Imperialists",
    "Machiavellian",
    "Mercenary Group",
    "Perimeter Agency",
    "Pirates",
    "Planetary Government",
    "Plutocratic",
    "Preceptor Archive",
    "Psychic Academy",
    "Savage",
    "Scavengers",
    "Secretive",
    "Technical Expertise",
    "Theocratic",
    "Warlike"
];
var assets = {
    Force: {
        1: ["Security Personnel", "Hitmen", "Militia Unit"],
        2: ["Heavy Drop Assets", "Elite Skirmishers", "Hardened Personnel", "Guerilla Populace"],
        3: ["Zealots", "Cunning Trap", "Counterintel Unit"],
        4: ["Beachhead Landers", "Extended Theater", "Strike Fleet", "Postech Infantry"],
        5: ["Blockade Fleet", "Pretech Logistics", "Psychic Assassins"],
        6: ["Pretech Infantry", "Planetary Defenses", "Gravtank Formation"],
        7: ["Deep Strike Landers", "Integral Protocols", "Space Marines"],
        8: ["Capital Fleet"]
    },
    Cunning: {
        1: ["Smugglers", "Informers", "False Front"],
        2: ["Lobbyists", "Saboteurs", "Blackmail", "Seductress"],
        3: ["Cyberninjas", "Stealth", "Covert Shipping"],
        4: ["Party Machine", "Vanguard Cadres", "Tripwire Cells", "Seditionists"],
        5: ["Organization Moles", "Cracked Comms", "Boltholes"],
        6: ["Transport Lockdown", "Covert Transit Net", "Demagogue"],
        7: ["Popular Movement", "Book of Secrets", "Treachery"],
        8: ["Panopticon Matrix"]
    },
    Wealth: {
        1: ["Franchise","Harvesters","Local Investments"],
        2: ["Freighter Contract","Lawyers","Union Toughs","Surveyors"],
        3: ["Postech Industry","Laboratory","Mercenaries"],
        4: ["Shipping Combine","Monopoly","Medical Center","Bank"],
        5: ["Marketers","Pretech Researchers","Blockade Runners"],
        6: ["Venture Capital","R&D Department","Commodities Broker"],
        7: ["Pretech Manufactory","Hostile Takeover","Transit Web"],
        8: ["Scavenger Fleet"]
    }
};

function generateFaction() {
    var type = ["Minor", "Major", "Hegemon"][Math.floor(Math.random() * 3)];
    var hitPoints = types[type].hitPoints;
    let typeStats = types[type].stats.slice(); // copy the original array so we don't alter it
    var stats = [];
    for (let index = typeStats.length; index > 0; index--) {
        stats.push(parseInt(typeStats.splice(Math.floor(Math.random() * typeStats.length), 1))); // force into int type, otherwise it returns object
    }
    var numTags = [1, 1, 1, 1, 2][Math.floor(Math.random() * 5)];
    var tag = [];
    for (let index = 0; index < numTags; index++) {
        tag.push(tags[Math.floor(Math.random() * tags.length)]);
    }
    tag = tag.join(", ");

    // generate assets - types[type][assets] is (X,Y) - X is biggest stat, Y is randomly amongst others
    var asset = [];
    let bigStat = stats.indexOf(Math.max(...stats));
    stats = {
        0: ["Force", stats[0]],
        1: ["Cunning", stats[1]],
        2: ["Wealth", stats[2]]
    };
    for (let index = 0; index < types[type].assets[0]; index++) { // biggest stat
        let number = Math.floor(Math.random() * stats[bigStat][1]) + 1;
        let assetList = assets[stats[bigStat][0]][number]; // for code clarity next:
        asset.push(assetList[Math.floor(Math.random() * assetList.length)] + "/" + stats[bigStat][0] + " " + number);
    }
    for (let index = 0; index < types[type].assets[1]; index++) { // other stats
        let stat = Object.keys(stats); // get stats
        stat.splice(bigStat, 1); // remove bigStat
        stat = stat[Math.floor(Math.random() * stat.length)]; // pick randomly which stat to use
        let number = Math.floor(Math.random() * stats[stat][1]) + 1;
        let assetList = assets[stats[stat][0]][number]; // for code clarity next:
        asset.push(assetList[Math.floor(Math.random() * assetList.length)] + "/" + stats[stat][0] + " " + number);
    }
    asset = asset.join(", "); // format for output
    return [type, hitPoints, stats[0][1], stats[1][1], stats[2][1], tag, asset];
}
