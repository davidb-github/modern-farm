const plantedField = [];

export const addPlant = (seedObj) => {
    
    if (Array.isArray(seedObj) === true) {
        seedObj.forEach(element => {
            plantedField.push(element)
        });
          
        }
        return addPlant;
    }

    



export const usePlants = () => {
    return plantedField;
}