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

var founders = [
    "Defrocked clergy: founded by a cleric outcast from the faith",
    "Frustrated layman: founded by a layman frustrated with the faith's decadence",
    "Renegade prophet: founded by a revered holy figure who broke with the faith",
    "High prelate: founded by an important and powerful cleric to convey his or her beliefs",
    "Dissatisfied minor clergy: founded by a minor cleric frustrated with the faith's current condition",
    "Outsider: founded by a member of another faith deeply influenced by the parent religion",
    "Academic: founded by a professor or theologian on intellectual grounds",
    "Accidental: the founder never meant their works to be taken that way"
];
var majorHeresies = [
    "Manichaeanism: the sect believes in harsh austerities and rejection of matter as something profane and evil",
    "Donatism: the sect believes that clergy must be personally pure and holy in order to be legitimate",
    "Supercessionism: the sect believes the founder or some other source supercedes former scripture or tradition",
    "Antinomianism: the sect believes that their holy persons are above any law and may do as they will",
    "Universal priesthood: the sect believes that there is no distinction between clergy and layman and that all functions of the faith may be performed by all members",
    "Conciliarism: the sect believes that the consensus of believers may correct or command even the clerical leadership of the faith",
    "Ethnocentrism: the sect believes that only a particular ethnicity or nationality can truly belong to the faith",
    "Separatism: the sect believes members should shun involvement with the secular world",
    "Stringency: the sect believes that even minor sins should be punished, and major sins should be capital crimes",
    "Syncretism: the sect has added elements of another native faith to their beliefs",
    "Primitivism: the sect tries to recreate what they imagine was the original community of faith",
    "Conversion by the sword: unbelievers must be brought to obedience to the sect or be granted death"
];
var attitudes = [
    "Filial: the sect honors and respects the orthodox faith, but feels it is substantially in error",
    "Anathematic: the orthodox are spiritually worse than infidels, and their ways must be avoided at all costs",
    "Evangelical: the sect feels compelled to teach the orthodox the better truth of their ways",
    "Contemptuous: the orthodox are spiritually lost and ignoble",
    "Aversion: the sect wishes to shun and avoid the orthodox",
    "Hatred: the sect wishes the death or conversion of the orthodox",
    "Indifference: the sect has no particular animus or love for the orthodox",
    "Obedience: the sect feels obligated to obey the orthodox hierarchy in all matters not related to their specific faith",
    "Legitimist: the sect views itself as the \"true\" orthodox faith and the present orthodox hierarchy as pretenders to their office",
    "Purificationist: the sect's austerities, sufferings, and asceticisms are necessary to purify the orthodox"
];
var quirks = [
    "Clergy of only one gender",
    "Dietary prohibitions",
    "Characteristic item of clothing or jewelry",
    "Public prayer at set times or places",
    "Forbidden to do something commonly done",
    "Anti-intellectual, deploring secular learning",
    "Mystical, seeking union with God through meditation",
    "Lives in visibly distinct houses or districts",
    "Has a language specific to the sect",
    "Greatly respects learning and education",
    "Favors specific colors or symbols",
    "Has unique purification rituals",
    "Always armed",
    "Forbids marriage or romance outside the sect",
    "Will not eat with people outside the sect",
    "Must donate labor or tithe money to the sect",
    "Special friendliness toward another faith or ethnicity",
    "Favors certain professions for their membership",
    "Vigorous charity work among unbelievers",
    "Forbidden the use of certain technology"
];

function generateHeresy() {
    var founder = founders[Math.floor(Math.random() * founders.length)];
    var majorHeresy = majorHeresies[Math.floor(Math.random() * majorHeresies.length)];
    var attitude = attitudes[Math.floor(Math.random() * attitudes.length)];
    var quirk = quirks[Math.floor(Math.random() * quirks.length)];
    return [founder, majorHeresy, attitude, quirk];
}
