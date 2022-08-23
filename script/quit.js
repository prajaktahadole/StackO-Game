
const redirect = document.getElementById("redirect");

redirect.addEventListener("click", () => {

    localStorage.setItem("GameScore", JSON.stringify({ totalScore: totalScore, yourWords: yourWords }))
    
    window.location.href = "/score.html"
})