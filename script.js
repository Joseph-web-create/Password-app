
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let getP = document.getElementById("first-p");
let getP0 = document.getElementById("second-p");
let getRange = document.getElementById("range");

let passwordLength = 11

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()       
    }
    getP.innerText = randomPassword
    generateRandomPassword1()
}

function generateRandomPassword1() {
    let randomPassword1 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter()       
    }
    return getP0.innerText = randomPassword1
}