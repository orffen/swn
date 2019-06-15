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

var leaderships = [
    "Social elite: the group is led by members of the planet's ruling class",
    "Outcasts: the group's leadership is filled out by members of a taboo, outcast, or otherwise socially marginal group",
    "Bourgeoisie: the group is driven by a leadership drawn from the middle class and those aspiring to join the elite",
    "Proletariat: the working class, both agricultural and industrial, provides the leadership for this group",
    "Urban: city-dwellers compose the leadership of the group",
    "Rural: farmers, herdsmen, small-town artisans, and other residents of the rural zones of a planet make up the leadership of the group",
    "Pious: clergy and devout laymen of a religion form the leadership",
    "Intellectuals: the movement is led by intellectuals"
];
var economicPolicies = [
    "Laissez-faire: minimal or no government intervention in the market",
    "State industry: the government should own or support specific industries important to the group",
    "Protectionist: the government should tax imports that threaten to displace the products of local manufactures",
    "Autarky: the government should ensure that the world can provide all of its own goods and services and forbid the import of foreign goods",
    "Socialist: the market should be harnessed to ensure a state-determined minimal standard of living for all",
    "Communist: the state should control the economy, disbursing its products according to need and determined efficiency"
];
var importantIssues = [
    "Poverty among the group's membership",
    "Social hostility to the group's membership",
    "Immigration and immigrants",
    "The membership's important industries",
    "Religion in public life",
    "Gender roles and sexual mores",
    "Culture of the group membership",
    "Military preparedness",
    "Governmental reform",
    "Secession",
    "Foreign relations",
    "Wealth redistribution"
];
var descriptors = [
    "People's",
    "Freedom",
    "National",
    "Unified",
    "Democratic",
    "Royal",
    "Social",
    "Progressive",
    "Popular",
    "Republican",
    "Federal",
    "Liberty",
    "(A local animal)",
    "Homeland",
    "Conservative",
    "Liberal",
    "Victory",
    "Black",
    "White",
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Scarlet",
    "Emerald",
    "Cyan",
    "Amber",
    "Purple",
    "Crimson",
    "Grey",
    "Orange",
    "Bronze",
    "Silver",
    "Gold",
    "Steel",
    "Iron",
    "Northern",
    "Southern",
    "Western",
    "Eastern",
    "Ascendant",
    "Upward"
];
var names = [
    "Front",
    "Party",
    "Faction",
    "Group",
    "Element",
    "Consensus",
    "Council",
    "Banner",
    "Union",
    "Combine",
    "Society",
    "Sodality",
    "Brotherhood",
    "Commune",
    "Pact",
    "Foundation",
    "Fellowship",
    "Guild",
    "Federation",
    "Alliance"
];

function generatePoliticalParty() {
    var name = descriptors[Math.floor(Math.random() * descriptors.length)] + " " + names[Math.floor(Math.random() * names.length)];    
    var leadership = leaderships[Math.floor(Math.random() * leaderships.length)];
    var economicPolicy = economicPolicies[Math.floor(Math.random() * economicPolicies.length)];
    var importantIssue = importantIssues[Math.floor(Math.random() * importantIssues.length)];
    return [name, leadership, economicPolicy, importantIssue];
}
