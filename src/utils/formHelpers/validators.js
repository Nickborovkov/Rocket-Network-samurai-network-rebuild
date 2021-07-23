export let required = (value) => {
    if(!value) return `Field is required`
    return undefined
}

export let maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}