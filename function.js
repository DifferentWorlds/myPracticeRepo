const getCelsius = (f) => { 
 const fah = (f - 32)* 5/9
    return fah
}

// const arr = [1, 2, 3 ,4, 5]
const minMax = (arr) => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    console.log(min, max);
    
}

minMax([1,2,3])