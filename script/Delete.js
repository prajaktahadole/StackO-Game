deleteBut.addEventListener("click", () => {
    deleteFun()
});

function deleteFun() {

    result.innerHTML = null;

    resultArray.map((item, index) => {

        alphaArray[item[1]].count += 1;
        tilesCount++
    })

    resultArray=[];
    currentWord="";

    deleteBut.setAttribute("style", "display:none");

    submitBut.setAttribute("style", "display:none");

    footer.setAttribute("style", "display:none")
    
    Display(alphaArray)
}