import { createPlan } from './plan.js'

const yearlyPlan = createPlan();

console.log(yearlyPlan);


// import { createSoybean } from './seeds/soybean.js'
// import { createCorn } from './seeds/corn.js'
// import { createSunflower } from './seeds/sunflower.js'
// import { createAsparagus } from './seeds/asparagus.js'
// import { createWheat } from './seeds/wheat.js'
// import { createPotato } from './seeds/potato.js'
// import { addPlant, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
const plan = plantSeeds(yearlyPlan)
console.log(plan)

console.log("Welcome to the main module")

// const soybeanSeed = createSoybean();
// const cornSeed = createCorn();
// const sunflowerSeed = createSunflower();
// const asparagusSeed = createAsparagus();
// const wheatSeed = createWheat();
// const potatoSeed = createPotato();


// const plantedSeed = addPlant(cornSeed);
// const sewnField = usePlants();

// const plantedSeed = addPlant(soybeanSeed);
// const sewnField = usePlants();



// console.log(soybeanSeed, cornSeed, sunflowerSeed, asparagusSeed, wheatSeed, potatoSeed )
// console.log(plantedSeed);
// console.log(sewnField);





