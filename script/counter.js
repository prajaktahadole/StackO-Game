
const counter = document.getElementById("counter");

var time = 99;

const interval = setInterval(() => {

    counter.innerText = null;
    counter.innerText = time;
    
    if (time == 0) {

        clearInterval(interval)

        localStorage.setItem("GameScore", JSON.stringify({ totalScore: totalScore, yourWords: yourWords }))

        window.location.href="/score.html"
    }

    time -= 1;

}, 1000)
