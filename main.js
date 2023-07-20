const obj = {
    "label" : "h"
}

const obj2 ={...obj};

obj.value = "e";
obj.value =2;

console.log(obj2);
console.log(obj);

