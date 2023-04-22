const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = 12

let pElOne = document.getElementById("p-elone")
let pElTwo = document.getElementById("p-eltwo")

function getCharacters() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return (characters[randomCharacter])
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < password; i++) {
        randomPassword += getCharacters()         
    }
    return randomPassword
}

generateRandomPassword()

function create() {
    pElOne.textContent = generateRandomPassword()
    pElTwo.textContent = generateRandomPassword()
}
create()
