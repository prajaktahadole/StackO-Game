
const data = JSON.parse(localStorage.getItem('GameScore'));

document.getElementById("score").innerText = data.totalScore; 

const wordsDiv= document.getElementById('words');

data.yourWords.map(item=>{

    const p= document.createElement("p");
    p.innerText= `-> ${item}`;

    const hr= document.createElement("hr");
    wordsDiv.append(p,hr);

})

var highestScore= JSON.parse(localStorage.getItem("highestScoreOfGame")) || -1

if(highestScore<data.totalScore)
{
    highestScore= data.totalScore;

    localStorage.setItem("highestScoreOfGame",highestScore);

    document.getElementById("Hscore").innerText= highestScore;

}
else
{
    document.getElementById("Hscore").innerText= highestScore;
}

document.getElementById('redirect').addEventListener("click",()=>{
 
    window.location.href="/index.html";

})