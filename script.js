// DEFAULT BOARD
let boardType = "cbse";

const cbseBtn = document.getElementById("cbseBtn");
const stateBtn = document.getElementById("stateBtn");

const resultBox = document.getElementById("resultBox");

const loader = document.getElementById("loader");
const btnText = document.getElementById("btnText");



// =========================
// BOARD SWITCHING
// =========================

cbseBtn.onclick = function(){

    boardType = "cbse";

    cbseBtn.classList.add("active");
    stateBtn.classList.remove("active");

};

stateBtn.onclick = function(){

    boardType = "state";

    stateBtn.classList.add("active");
    cbseBtn.classList.remove("active");

};



// =========================
// COUNT ANIMATION
// =========================

function animateValue(id, start, end, duration){

    let range = end - start;

    let current = start;

    let increment = end > start ? 1 : -1;

    let stepTime = Math.abs(Math.floor(duration / range));

    const obj = document.getElementById(id);

    const timer = setInterval(function(){

        current += increment;

        obj.innerHTML = current;

        if(current == end){

            clearInterval(timer);

        }

    }, stepTime);

}



// =========================
// MAIN FUNCTION
// =========================

function predictRank(){

    let maths =
    Number(document.getElementById("maths").value);

    let physics =
    Number(document.getElementById("physics").value);

    let chemistry =
    Number(document.getElementById("chemistry").value);

    let keam =
    Number(document.getElementById("keam").value);



    // ERROR BOX

    const errorBox =
    document.getElementById("error-message");



    // VALIDATION

    if(

        maths <= 0 ||
        physics <= 0 ||
        chemistry <= 0 ||
        keam <= 0

    ){

        errorBox.innerHTML =
        "Please enter all inputs properly";

        return;
    }



    // CLEAR ERROR

    errorBox.innerHTML = "";



    // SHOW LOADER

    btnText.style.display = "none";

    loader.style.display = "block";



    // FAKE LOADING EFFECT

    setTimeout(() => {



        // STATE BOARD CONVERSION

        if(boardType === "state"){

            maths = (maths / 120) * 100;

            physics = (physics / 120) * 100;

            chemistry = (chemistry / 120) * 100;

        }



        // WEIGHTAGE

        let weightedPercentage =

        (
            (maths * 5) +
            (physics * 3) +
            (chemistry * 2)

        ) / 10;



        // BOARD SCORE OUT OF 300

        let boardScore =

        (weightedPercentage / 100) * 300;



        // FINAL SCORE

        let finalScore = boardScore + keam;



        // =========================
        // RANK PREDICTION
        // =========================

        let rank = "";



        if(finalScore >= 585){

            rank = "1 - 5";

        }

        else if(finalScore >= 580){

            rank = "6 - 10";

        }

        else if(finalScore >= 575){

            rank = "11 - 25";

        }

        else if(finalScore >= 565){

            rank = "26 - 50";

        }

        else if(finalScore >= 550){

            rank = "51 - 100";

        }

        else if(finalScore >= 540){

            rank = "101 - 200";

        }

        else if(finalScore >= 520){

            rank = "201 - 500";

        }

        else if(finalScore >= 500){

            rank = "501 - 1000";

        }

        else if(finalScore >= 475){

            rank = "1001 - 2000";

        }

        else if(finalScore >= 450){

            rank = "2001 - 3000";

        }

        else if(finalScore >= 430){

            rank = "3001 - 4000";

        }

        else if(finalScore >= 410){

            rank = "4001 - 5000";

        }

        else if(finalScore >= 400){

            rank = "5001 - 6000";

        }

        else if(finalScore >= 390){

            rank = "6001 - 7000";

        }

        else if(finalScore >= 380){

            rank = "7001 - 8000";

        }

        else if(finalScore >= 370){

            rank = "8001 - 10000";

        }

        else if(finalScore >= 360){

            rank = "10000 - 12000";

        }

        else if(finalScore >= 350){

            rank = "12000 - 14000";

        }

        else if(finalScore >= 340){

            rank = "14000 - 16000";

        }

        else if(finalScore >= 330){

            rank = "16000 - 18000";

        }

        else if(finalScore >= 320){

            rank = "18000 - 20000";

        }

        else if(finalScore >= 300){

            rank = "20000 - 25000";

        }

        else if(finalScore >= 290){

            rank = "25000 - 30000";

        }

        else if(finalScore >= 280){

            rank = "30000 - 35000";

        }

        else if(finalScore >= 270){

            rank = "35000 - 40000";

        }

        else if(finalScore >= 250){

            rank = "40000 - 45000";

        }

        else if(finalScore >= 240){

            rank = "45000 - 50000";

        }

        else if(finalScore >= 230){

            rank = "50000 - 60000";

        }

        else{

            rank = "Above 60000";

        }



        // =========================
        // SHOW RESULT
        // =========================

        resultBox.style.display = "block";



        setTimeout(() => {

            resultBox.classList.add("show");

        }, 100);



        // ANIMATED VALUES

        animateValue(

            "weighted-score",

            0,

            Math.floor(boardScore),

            1000

        );



        animateValue(

            "final-score",

            0,

            Math.floor(finalScore),

            1200

        );



        document.getElementById("rank-range")
        .innerHTML = rank;



        // HIDE LOADER

        loader.style.display = "none";

        btnText.style.display = "block";



    }, 1800);

}