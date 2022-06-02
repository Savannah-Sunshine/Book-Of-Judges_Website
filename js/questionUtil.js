//JavaScript file for your interactivity
//Makes sure it throws errors
'use strict';


//todo get score from frontpage
let score = 0;


/**
 * runs the button & navigates to the next pg
 * @param divID
 */
function questionRespond(question_num) {
    let currPgNum = parseInt(question_num[3])

    //3 is the number of questions
    if(currPgNum === 3){
        //last question
        console.log('END');
        window.location.href = "../html/result.html";
    } else {
        let newPg = "../html/question" + (currPgNum + 1) + ".html";
        //todo score.addScore()

        console.log('PG: ' + newPg);
        window.location.href = newPg;
    }
}