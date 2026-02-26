
const items  = ['flowers', 'flow','flown', 'flea']

// pick the first element as test element
// loop from 1 - end -> select the element


let testEle = items[0]
let l = 0
let result = ""

for(let s = 1; s < items.length; s++){
    
    l  = s === items.length - 1 ? 
               l++: l 
    while(l < items[s].length){
        if(testEle[l] === items[s][l]) break;
        l++;
    }
}