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

var genders = [
    "Male",
    "Female"
];
var ages = [
    "Young",
    "Middle-aged",
    "Old"
];
var heights = [
    "Very Short",
    "Short",
    "Short",
    "Average height",
    "Average height",
    "Tall",
    "Tall",
    "Very Tall"
];
var problems = [
    "Grudge against local authorities",
    "Has a secret kept from their family",
    "Chronic illness",
    "Enmity of a local psychic",
    "Has enemies at work",
    "Owes loan sharks",
    "Threatened with loss of spouse, sibling, or child",
    "Close relative in trouble with the law",
    "Drug or behavioral addict",
    "Blackmailed by enemy"
];
var jobMotivations = [
    "Greed, because nothing else they can do pays better",
    "Idealistic about the job",
    "Sense of social duty",
    "Force of habit takes them through the day",
    "Seeks to please another",
    "Feels inadequate as anything else",
    "Family tradition",
    "Religious obligation or vow",
    "Nothing better to do, and they need the money",
    "They're quitting at the first good opportunity",
    "It's a stepping stone to better things",
    "Spite against an enemy discomfited by the work"
];
var quirks = [
    "Bald",
    "Terrible taste in clothing",
    "Very thin",
    "Powerful build",
    "Bad eyesight, wears spectacles",
    "Carries work tools constantly",
    "Long hair",
    "Bearded, if male; ankle-length hair if female",
    "Scars all over hands",
    "Missing digits or an ear",
    "Smells like their work",
    "Repeats himself constantly",
    "Talks about tabloid articles",
    "Booming voice",
    "Vocal dislike of offworlders",
    "Always snuffling",
    "Missing teeth",
    "Fastidiously neat",
    "Wears religious emblems",
    "Speaks as little as possible"
];

function generateNPC() {
    var gender = genders[Math.floor(Math.random() * genders.length)];
    var age = ages[Math.floor(Math.random() * ages.length)];
    var height = heights[Math.floor(Math.random() * heights.length)];
    var problem = problems[Math.floor(Math.random() * problems.length)];
    var jobMotivation = jobMotivations[Math.floor(Math.random() * jobMotivations.length)];
    var quirk = quirks[Math.floor(Math.random() * quirks.length)];
    return [gender, age, height, problem, jobMotivation, quirk];
}
