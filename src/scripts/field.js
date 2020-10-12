const plantedField = [];

export const addPlant = (seedObj) => {
    // debugger
    if (Array.isArray(seedObj) === true) {
        seedObj.forEach(element => {
            plantedField.push(element)
        });  
      }
        plantedField.push(seedObj);
    }


export const usePlants = () => {
    return plantedField.slice();
}