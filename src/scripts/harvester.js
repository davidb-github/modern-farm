const seedObjectArray = [];

export const harvestPlants = (plantedField) => {
  debugger
  if (Array.isArray(plantedField)) {
    // loop plantedField array and populate seedObjectArray based on value of output property
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