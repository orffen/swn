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

var elements = [
    "Sharply pointed towers",
    "Squat towers",
    "Square, hexagonal, or oval towers",
    "Multi-branching towers",
    "Inverted towers, stretching underground",
    "Bulbous towers",
    "Flat-topped towers",
    "Multiple towers that merge into one",
    "Skeletal towers",
    "Twisted towers",
    "Square foundations",
    "Hexagonal foundations",
    "Circular foundations",
    "Raised foundations",
    "Pillared foundations",
    "Sloped foundations",
    "Entrenched foundations",
    "Elongated rectangular foundations",
    "Triangular foundations",
    "Oval foundations",
    "Bas-relief on walls",
    "Painting on walls",
    "Mosaics on walls or floors",
    "Statues inset in wall niches",
    "Tiling on surfaces",
    "Carvings on walls",
    "Moldings on walls",
    "Paneling on walls",
    "Geometric designs on surfaces",
    "Featureless surfaces",
    "Flying buttresses",
    "Smooth pillars",
    "Adorned pillars",
    "Raised embankments",
    "Pier buttresses",
    "Scroll buttresses",
    "False, decorative buttresses",
    "Pyramidal support piers",
    "Squared support piers",
    "Seeming lack of supports or buttresses",
    "Round arches",
    "Lancet arches",
    "Oriental arches",
    "Horseshoe arches",
    "Multifoil arches",
    "Monumental arches",
    "Keyhole arches",
    "Inflexed arches",
    "Flat arches",
    "Corbelled arches",
    "Canals and pools",
    "Balconies and overlooks",
    "Subterranean structures",
    "Ansence or profusion of windows",
    "Walled or enclosed courtyards",
    "Open plazas",
    "Elevated walkways",
    "Monoliths or standing stones",
    "Meandering pathways",
    "Climbing vegetation"
];

function generateArchitecture() {
    return elements[Math.floor(Math.random() * elements.length)];
}
