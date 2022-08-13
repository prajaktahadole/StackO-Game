let str = {
    A: 1,
    E : 1,
    I : 1,
    O: 1,
    U : 1,
    B: 3,
    C: 3,
    F: 4,
    G: 2,
    H: 4,
    L : 1,
    M: 3,  
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    V: 4,
    W: 4,
    Y: 4,
    }

var tiles = 20;
var score = 0;
var buttons = document.querySelector(".div2");
let displaydata = document.querySelector(".displaydata");

var st = ""
 for (let j=0; j < str.length; j++) 
 {

let div = document.createElement('div');
 div.setAttribute('class', 'button');

let divA= document.createElement('div'); 
divA.innerText = string[j];
divA.setAttribute('class', 'alpha'); 


let divN = document.createElement('div');
divN.innerText = obj[string[j]];
divN.setAttribute('class', 'num');


div.addEventListener('click', () => {

         tiles = tiles -1;
         score = score + num;
         var output = output + alph;
         console.log(score, output);
        document.getElementById("score").textContent = score;
        document.getElementById("tiles").textContent = `${tiles}Tiles left`;
});  
    
        div.append(divA, divN);
        
        buttons.append(div);

}
