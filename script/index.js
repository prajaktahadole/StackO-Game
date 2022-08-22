//Declaring variables from DOM
const deleteBut = document.getElementById("delete")
const submitBut = document.getElementById("submit")
const alphaDiv = document.getElementById("alpha")
const result = document.getElementById("result")
const footer= document.getElementById("footer")

// Array containing Different Values as per the specification

const vowel = ["A","E","I","O","U"];

const consonant = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

//Score Of Each Alphabet
const score1 = ["L", "N", "S", "T", "R"];
const score2 = ["D", "G"];
const score3 = ["B", "C", "M", "P"];
const score4 = ["F", "H", "V", "W", "Y"];
const score5 = ["K"];
const score6 = ["J", "X"];
const score7 = ["Z", "Q"];

//Power Of Alphabet
const powerArr = ["DL", "TL", "DW", "TW"]
var powerPointer = 0

//Dynamic Values During Game Play
var totalScore = 0
var tilesCount = 0
var currentWord = ""
var answerArray = []
var yourWords=[]

//Constructor Function
//To create All Alphabet Objects

class alphaObject{
    constructor(name, count, score, power) {
        this.name = name,
        this.count = count,
        this.score = score,
        this.specialPower = power
        this.powerIndex = Math.floor(Math.random() * count + 1)
        this.isPower=false
    }
}

//Forming Letter Array

const alphaArray = []

for (var i = 0; i < 5; i++){

    var count= Math.floor(Math.random()*4 +1)

    alphaArray.push(new alphaObject(vowel[i],count , 1, false));
}

while(alphaArray.length < 20) {

    var count = Math.floor(Math.random() * 4 + 1);

    var i = Math.floor((Math.random() * consonant.length - 1) + 1);

    if (consonant[i] == false) {
        continue;
    }
    else {
        let score
        if (score1.includes(consonant[i])) score = 1
        else if (score2.includes(consonant[i])) score = 2
        else if (score3.includes(consonant[i])) score = 3
        else if (score4.includes(consonant[i])) score = 4
        else if (score5.includes(consonant[i])) score = 5
        else if (score6.includes(consonant[i])) score = 6
        else if (score7.includes(consonant[i])) score = 7

        let power = false;

        const isTrue = Math.floor((Math.random() * 2));

        if (isTrue && powerPointer <powerArr.length)
        {
            power = powerArr[powerPointer++]
        }

        alphaArray.push(new alphaObject(consonant[i], count, score, power))

        consonant[i] = false
    }
}

alphaArray.map(item => {
    tilesCount +=  item.count;
})



//Function For Appending Elements

Display(alphaArray)

function Display(alphaArray) {

    if (tilesCount == 0 && answerArray.length==0)
    {
        localStorage.setItem("GameScore", JSON.stringify({ totalScore: totalScore, yourWords: yourWords }));

        window.location.href = "/score.html"
    }

    document.getElementById("score").innerText = totalScore;
    document.getElementById("counter").innerText = tilesCount;

    alphaDiv.innerHTML = null;

    alphaArray.map((letter, index) => {
        const containerDiv = document.createElement("div");

        const nameDiv = document.createElement("div");
        nameDiv.setAttribute("class", "nameDiv");

        const name = document.createElement("div")
        name.innerText = letter.name;
        name.setAttribute("class","digit");

        const score = document.createElement("p");
        score.innerText = letter.score;
        score.setAttribute("class", "scoreDigit");

        if (letter.specialPower && letter.powerIndex == letter.count) {

            const power = document.createElement("p");
            power.innerText = letter.specialPower;
            power.setAttribute("class", "powerDigit");
            score.setAttribute("style", "color:white");

            let color
            if (letter.specialPower == "DL") color = "#f6a534";
            if (letter.specialPower == "TL") color = "crimson";
            if (letter.specialPower == "DW") color = "#28a745";
            if (letter.specialPower == "TW") color = "royalblue";

            name.setAttribute("style", `background: ${color}; color: white;`);
            nameDiv.append(name, score, power);

            letter.isPower = true;
        } 
        else
        {
            nameDiv.append(name, score);
        }
        if (letter.count > 0) containerDiv.append(nameDiv)

        for (var i = letter.count - 2; i >=0 ; i--)
        {
            const spectile = document.createElement("div");
            spectile.setAttribute("class", "spectile");

            if (letter.specialPower && letter.powerIndex == i+1) 
            {
                let color
                if (letter.specialPower == "DL") color = "#f6a534"
                if (letter.specialPower == "TL") color = "crimson"
                if (letter.specialPower == "DW") color = "#28a745"
                if (letter.specialPower == "TW") color = "royalblue"

                spectile.setAttribute("style", `background: ${color}`)
            }
            containerDiv.append(spectile)
        }
        nameDiv.addEventListener("click", () => {
            addToWord(letter, index, letter.isPower)
        })
        alphaDiv.append(containerDiv)
    })
}