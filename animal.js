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

var templates = ["Insectile", "Reptilian", "Mammalian", "Avian", "Exotic", "Hybrid"];
var traits = {
    Insectile: [
        "Sucking mouthparts",
        "Chewing mouthparts",
        "Jewel-colored chitin",
        "2d4 pairs of limbs",
        "Membraneous wings",
        "Deposits eggs in live prey",
        "Has \"silk\" spinnerets",
        "Has a chrysalis life stage",
        "No mouth; adult form lives only to reproduce",
        "1d4 pairs of eyes or eyespots",
        "Sluglike body",
        "Color-changing exoskeleton",
        "Always encountered in groups",
        "Hums or buzzes in intricate patterns",
        "Lives in hives led by a queen",
        "Killing one causes others nearby to go berserk",
        "Emits powerful pheromones",
        "Hides itself to ambush prey",
        "Prefers subterranean environments",
        "Emits noxious or poisonous stench when killed"
    ],
    Reptilian: [
        "Sharp-edged scales",
        "1d4 pairs of eyes",
        "Extremely long tail",
        "Bellowing vocalization",
        "Burrowing foreclaws",
        "Hide is damp and slimy",
        "Eyeless",
        "Strong swimmer",
        "Spits venom",
        "Lies in ambush in bodies of water",
        "Brilliantly-hued scales or hide",
        "Horns or body spikes",
        "Large membranous frills",
        "Hibernates in caves and undisturbed nooks",
        "Glowing body parts",
        "Body is patterned with both scales and hide",
        "Springs on prey from elevated places",
        "Warm-blooded",
        "Furred",
        "Limbless body"
    ],
    Mammalian: [
        "Multiple mouths",
        "Quill-like fur",
        "Prehensile tail",
        "Eyes or eyespots on body",
        "Membranous wings",
        "Stench glands",
        "Peculiar vocalization",
        "Marsupial pouch",
        "Patterned fur or hide",
        "Expands or inflates when threatened",
        "Strictly nocturnal",
        "1d6+1 limbs, including any tail",
        "Mottled or mangy fur",
        "Fires darts or quills",
        "Animal is cold-blooded",
        "Horns or body spikes",
        "Superb scent tracker",
        "Burrowing creature",
        "Creature lacks a sense - hearing, sight or smell",
        "Creature is abnormally clever for an animal"
    ],
    Avian: [
        "Sharp feathers",
        "1d3 pairs of wings",
        "Long, sinuous neck",
        "Brilliant coloration",
        "Membranous wings",
        "Can hover",
        "Beautiful song",
        "Flightless",
        "Fights prey on the ground",
        "Launches secretions at prey",
        "Lifts and drops prey",
        "Exhales flame or other toxic substance",
        "Always appears in groups",
        "Long prehensile tail",
        "Animal is cold-blooded",
        "Fur instead of feathers",
        "Scales instead of feathers",
        "Toothed beak",
        "Has valuable or delicious eggs",
        "Flies by means of lighter-than-air gas"
    ],
    Exotic: [
        "Rocklike body",
        "1d4 pairs of eyestalks",
        "Rolls on wheels",
        "Chainsaw-like mouthparts or claws",
        "Metallic hide",
        "Natural laser emitters",
        "Launches chemically-powered darts",
        "Amoeba-like body",
        "Crystalline tissues",
        "Gas-sack body",
        "2d10 tentacles",
        "Gelatinous liquid body",
        "Radioactive flesh",
        "Use sonic attacks to stun prey",
        "Colony entity made up of numerous small animals",
        "Controlled by neural symbiont",
        "Absorbs electromagnetic energy",
        "Precious mineral carapace or exoskeleton",
        "Double damage from a particular type of injury",
        "Mobile plant life"
    ]
};

function generateAnimal() {
    var template = templates[Math.floor(Math.random() * templates.length)];
    var groupSize = Math.floor(Math.random() * 6) + 1;
    if (template == "Hybrid") {
        let numberTemplates = [2, 2, 3][Math.floor(Math.random() * 3)]; // generate 2 templates twice as often as 3
        let tempTemplates = new Set();
        while (tempTemplates.size < numberTemplates) {
            let newTemplate = templates[Math.floor(Math.random() * templates.length)];
            if (newTemplate != "Hybrid") { // don't allow another 'Hybrid' template to be added
                tempTemplates.add(newTemplate);
            }
        }
        tempTemplates = [...tempTemplates]; // convert to array
        // now generate a trait for each template
        let tempTraits = [];
        tempTemplates.forEach(element => {
            tempTraits.push(traits[element][Math.floor(Math.random() * traits[element].length)])
        });
        // output as strings
        var trait = tempTraits.join(", ");
        template = tempTemplates.join("/");
    } else {
        var trait = traits[template][Math.floor(Math.random() * traits[template].length)];
    }
    return [template, trait, groupSize];
}
