

function minmax(arr){
    let outMap = new Map();
    arr.sort();
    outMap.set("mins", arr.splice(0,3));
    outMap.set("maxs", arr.splice(-3));
    return outMap;
}

function destuct(str){
    outObj = {};
    for(let item in str.split(',')){
        outObj[item.split(' ')[0]] = parseInt(item.split[' '][1]);
    }
    return outObj;
}

function convert(obj){
    let arr = [];
    for(let key in obj){
        arr.push(`["${key}","${obj[key]}"]`)
    }
    return arr;
}

let tomb = [0,1,2,3,4,5,6,7,8,9];
for(let i = 0; i < 50; i++){
    console.log(tomb[i%10])
}