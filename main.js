const prompt=require("prompt-sync")({sigint:true});
const morseJson = require('./morse-code.json');
let text=prompt('Enter your text : ');
let filteredText=text.toLowerCase();
let result="";
for(let i=0;i<filteredText.length;i++){
    if(filteredText[i]==" "){
        result+="/";
    }
    else{
        result+=morseJson[filteredText[i]].toString();
    }
    result+=' ';
}
console.log(result)
console.log(filteredText)
// console.log(morseJson);
// console.log(typeof(morseJson));