const plantedField = [];

export const addPlant = (seedObj) => {
    // debugger
    if (Array.isArray(seedObj) ) {
        seedObj.forEach(element => {
            plantedField.push(element)
        });  
      } else {
        plantedField.push(seedObj);
      }
    }


export const usePlants = () => {
    return plantedField.slice();
}