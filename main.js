
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

document.getElementById("text").addEventListener('input',(event)=>{
    let text = event.target.value
    let filteredText=text.toLowerCase()
    let result="";
    for(let i=0;i<filteredText.length;i++){
        
        if(filteredText[i]==" "){
            result += "/";
        }
        else{
            if (morseJson[filteredText[i]] === undefined){
                console.log(filteredText[i],morseJson[i])
                result += filteredText[i]
            }
            else{
                result += morseJson[filteredText[i]];
            }
        }
        result+=' ';
    }
    document.getElementById('morse').value = result
})
