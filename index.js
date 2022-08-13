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


let counter = 100;
const counterfun = setInterval(()=>{

    if(counter<=0){
        return 0;
    }
    counter--;
    document.getElementById("counter").textContent = counter;
},1000);


var tiles = 20;
var score = 0;
function press(num, alph){
    tiles = tiles -1;
    score = score + num;
    var output = output + alph;
    console.log(score, output);
    document.getElementById("score").textContent = score;
    document.getElementById("tiles").textContent = `${tiles}Tiles left`;
    document.querySelector(".displaydata").textContent = output;
}



function Start(){
    return counterfun ();
}

function Remove(){
    output.pop();
    document.querySelector(".displaydata").textContent = output;
    
}

function deleteAll(){
    output = "";
    document.querySelector(".displaydata").textContent = "";

}