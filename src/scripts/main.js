import { createPlan } from './plan.js'

const yearlyPlan = createPlan();

console.log(yearlyPlan);

// debug

import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'
import { createSunflower } from './seeds/sunflower.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createWheat } from './seeds/wheat.js'
import { createPotato } from './seeds/potato.js'


console.log("Welcome to the main module")

const soybeanSeed = createSoybean();
const cornSeed = createCorn();
const sunflowerSeed = createSunflower();
const asparagusSeed = createAsparagus();
const wheatSeed = createWheat();
const potatoSeed = createPotato();

console.log(soybeanSeed, cornSeed, sunflowerSeed, asparagusSeed, wheatSeed, potatoSeed )





