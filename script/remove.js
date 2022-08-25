
result.addEventListener("click", () => {

    let index = resultArray[resultArray.length - 1][1];

    resultArray.pop();

    alphaArray[index].count += 1;

    currentWord = "";
    
    resultArray.map(item => {
        currentWord += item[0].name;
    })
    tilesCount++;

    result.innerHTML = currentWord;

    if (resultArray.length == 0) 
    {
        deleteBut.setAttribute("style", "display:none");

        submitBut.setAttribute("style", "display:none");

        footer.setAttribute("style", "display:none");
    }
    
    Display(alphaArray)
})
