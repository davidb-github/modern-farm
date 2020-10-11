const plantedField = [];

export const addPlant = (seedObj) => {
    
    if (Array.isArray(seedObj) === true) {
        for (let i = 0; i < seedObj.length; i++) {
            plantedField.push(i)
        }
    }
    plantedField.push(seedObj);

    return addPlant;
}

export const usePlants = () => {
    return plantedField;
}