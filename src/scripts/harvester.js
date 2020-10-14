const seedObjectArray = [];

export const harvestPlants = (plantedField) => {
  debugger
  if (Array.isArray(plantedField)) {
    console.log('array.isarray returned TRUE');
    plantedField.forEach(element => {
      //pull out value for output key
      //insert that many of the object into the seedObjectArray

      if (element.plant !== 'corn') {
        let outputVal = 0;
        outputVal = element.output;
        for (let i = 0; i < outputVal; i++) {
          seedObjectArray.push(element);
        }
      }
      // except for corn, only insert half output value.
      else {
        let cornIndex = element.output / 2;
        // do math on property output and then use for loop
        for (let i = 0; i < cornIndex; i++) {
          seedObjectArray.push(element);;
        }
      }
    });
  } else {
    console.log('array.isarray returned FALSE, check the code');

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