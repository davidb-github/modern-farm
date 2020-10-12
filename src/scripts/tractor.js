import { createSoybean } from "./seeds/soybean.js";
import { createCorn } from "./seeds/corn.js";
import { createAsparagus } from './seeds/asparagus.js'
import { createWheat } from './seeds/wheat.js'
import { createPotato } from "./seeds/potato.js";
import { createSunflower } from './seeds/sunflower.js'
import { addPlant } from './field.js'



export const plantSeeds = (yearlyPlan) => {
    const plan = []

    for (let index = 0; index < yearlyPlan.length; index++) {
        let seed = {};
        for (let j = 0; j < 6; j++) {
            debugger
            const expr = yearlyPlan[index]; //
            switch (expr[j]) {
                case "Soybean":
                    seed = createSoybean();
                    addPlant(seed);
                    break;
                case "Corn":
                    seed = createCorn();
                    addPlant(seed);
                    break;
                case "Asparagus":
                    seed = createAsparagus();
                    addPlant(seed)
                    break;
                case "Wheat":
                    seed = createWheat();
                    addPlant(seed);
                    break;
                case "Potato":
                    seed = createPotato();
                    addPlant(seed);
                    break;
                case "Sunflower":
                    seed = createSunflower();
                    addPlant(seed);
                    break;
            }
        }
    }
}



// As you iterate the row of food types to be planted, 
// invoke the corresponding factory function
//  (e.g. if the food type is "Asparagus", 
//  invoke the createAsparagus function to get an asparagus seed).
// "Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"
// Take that seed and add it to the array of plants in the field module