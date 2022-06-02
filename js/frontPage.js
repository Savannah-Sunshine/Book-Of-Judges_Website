//JavaScript file for your interactivity
//Makes sure it throws errors
'use strict';
let score;
function main() {
    score = 0;

    const runBtn = document.querySelector('.runBtn');
    runBtn.addEventListener('click', function () {
        window.location.href = "../html/question1.html";
    });
}


function getScore() {
    return score;
}

function addScore() {
    score += 100;
}

// export default getScore;
// export default addScore;





window.onload = main();