export const followReducerHelper = (items, itemId, itemProperty) => {
    return items.map(i => {
        if(i.id === itemId){
            return {...i, ...itemProperty}
        }
        return i
    })
}