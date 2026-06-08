const morse = {
A:".-",
B:"-...",
C:"-.-.",
D:"-..",
E:".",
F:"..-.",
G:"--.",
H:"....",
I:"..",
J:".---",
K:"-.-",
L:".-..",
M:"--",
N:"-.",
O:"---",
P:".--.",
Q:"--.-",
R:".-.",
S:"...",
T:"-",
U:"..-",
V:"...-",
W:".--",
X:"-..-",
Y:"-.--",
Z:"--..,
};

function beep(duration){
const audio = new AudioContext();

const osc = audio.createOscillator();

osc.connect(audio.destination);

osc.start();

setTimeout(()=>{
osc.stop();
},duration);
}

async function playMorse(code){

for(let char of code){

if(char === "."){
beep(150);
await wait(250);
}

if(char === "-"){
beep(450);
await wait(550);
}
}
}

function wait(ms){
return new Promise(resolve=>setTimeout(resolve,ms));
}

function convertMorse(){

let text =
document.getElementById("textInput")
.value
.toUpperCase();

let result = "";

for(let letter of text){

if(morse[letter]){
result += morse[letter]+" ";
}
}

document.getElementById("result")
.innerHTML = result;

playMorse(result);
}
