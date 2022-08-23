// Clicking on Submit Button

submitBut.addEventListener("click", async () => {
    
    Toastify({
        text: "Wait Let Us Check",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #bb8f43, #96c93d)",
        },

    }).showToast();

    let isTrue = false;

        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`)

            .then(response => response.json())

            .then(data => {
                console.log(data)

                if (data.length > 0) isTrue = true;
            })

    if (isTrue) {

        yourWords.push(currentWord)
        let flagTW = false
        let flagDW = false

        resultArray.map(item => {

            if (item[2]) {
                let type = item[0].specialPower;

                if (type == "DL") totalScore += (item[0].score * 2)

                else if (type == "TL") totalScore += (item[0].score * 3)

                else {
                    if (type == "TW") flagTW = true
                    if (type == "DW") flagDW = true
                    totalScore += item[0].score;
                }
            }
            else totalScore += item[0].score
        })

        if (flagTW) totalScore = totalScore * 3

        if (flagDW) totalScore = totalScore * 2


        deleteBut.setAttribute("style", "display:none");

        submitBut.setAttribute("style", "display:none");

        footer.setAttribute("style", "display:none");

        result.innerHTML = null;

        resultArray = [];

        Toastify({
            text: "Congrats, Your Score: " + totalScore,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #bb8f43, #96c93d)",
            },

        }).showToast();

        Display(alphaArray)
    } 
    else {
        
        Toastify({
            text: "Incorrect Word",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #bb8f43, #96c93d)",
            },
        }).showToast();


        deleteFun()
    }
})