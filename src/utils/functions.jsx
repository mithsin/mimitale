
export const isObjFalsy = (obj) => Object.values(obj).some(t => !t);

export const arrayReplaceObj = (arr, replaceObj, key) => {
    return arr.map(obj => {
        if(obj[key] === replaceObj[key]){
            return replaceObj
        } else {
            return obj
        }
    })
};