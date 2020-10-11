// debug

import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'
import { createSunflower } from './seeds/sunflower.js'
import { createAsparagus } from './seeds/asparagus.js'


console.log("Welcome to the main module")

const soybeanSeed = createSoybean();
const cornSeed = createCorn();
const sunflowerSeed = createSunflower();
const asparagusSeed = createAsparagus();

console.log(soybeanSeed, cornSeed, sunflowerSeed, asparagusSeed)





