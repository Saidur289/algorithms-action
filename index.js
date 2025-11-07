const dataCache = new Map()
const expensiveFunc = (id) => {
    console.log("run the expensive task", id);
    return {
        id: id, 
        data: `some data of ${id}`,
        timestamp: new Date().getTime()
    }
}
const getDate = (id) => {
    if(dataCache.has(id)) {
        console.log("Cache hit", id);
    return dataCache.get(id)
    }
    console.log("cache miss", id);
    const data = expensiveFunc(id)
    dataCache.set(id, data)
    return data
}
console.log(dataCache);
console.log(getDate(123));
console.log(getDate(123));
console.log(dataCache);