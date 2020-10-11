const plantedField = [];

export const addPlant = (seedObj) => {
    
    if (Array.isArray(seedObj) === true) {
        for (const seed of seedObj) {
            plantedField.push(seed)
        }
    }
    plantedField.push(seedObj);

    return addPlant;
}

export const usePlants = () => {
    return plantedField;
}