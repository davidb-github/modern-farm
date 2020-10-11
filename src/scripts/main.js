// debug

import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'

console.log("Welcome to the main module")

const soybeanSeed = createSoybean();
console.log(soybeanSeed);

const cornSeed = createCorn();
console.log(cornSeed);





