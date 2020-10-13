const seedObjectArray = [];

export const harvestPlants = (plantedField) => {

    if (Array.isArray(plantedField) ) {
        plantedField.forEach(element => {
            seedObjectArray.push(element.output)
        });  
      } else {
        seedObjectArray.push(plantedField);
      }
      return seedObjectArray.slice();
    }
    

/*
Create a scripts/harvester.js module.
// complete
- In this module, define and export a harvestPlants function.
The harvestPlants function must accept the plants array as input.
The function will return an array of seed objects.

Iterate the array of growing plants. On each plant, get the value of the output property.
Add that many of the plant objects to the array that the function returns.
For example, if the current plant is a peanut object with an output of 2...

Again, the exception is corn. Half of your corn will be sold to cattle ranchers,
so only half of the output of each corn plant will be added to the array that this function returns.




*/