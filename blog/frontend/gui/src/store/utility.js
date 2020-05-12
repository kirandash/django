export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject, // Spread operator to get a clone of older fields of oldObject
        ...updatedProperties // Replace all the existing keys of oldObject with new ones from updatedProperties
    }
}