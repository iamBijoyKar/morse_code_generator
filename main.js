
function toLowerCase(text){
    let result=''
    for(let i=0;i<text.length;i++){
        if(text[i]>='A' && text<='Z'){
            result+=String(Number(text)+32);
        }
    }
    return result
}
let morseJson = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }
  
console.log(typeof(morseJson))
console.log(morseJson)
// const morseJson=JSON.parse(rawJson)
  
function generate(){
    let text=document.getElementById("text").value
    let filteredText=text.toLowerCase()
    let result="";
    for(let i=0;i<filteredText.length;i++){
        if(filteredText[i]==" "){
            result+="/";
        }
        else{
            result+=morseJson[filteredText[i]];
        }
        result+=' ';
    }
    const output=document.getElementById('morse').value=result
    console.log(result)
    console.log(filteredText)
}

setInterval(generate,1000)
// console.log(morseJson);
// console.log(typeof(morseJson));