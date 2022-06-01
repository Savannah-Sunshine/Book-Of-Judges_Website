

//JavaScript file for your interactivity

//Makes sure it throws errors
'use strict';


//Button for starting game
const startButton = document.querySelector('.start_btn');

startButton.addEventListener('click', function() {
    // toggle modifies the <body> element's class attribute
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    //themeType is a className?
    const themeType = document.body.className;
    if(themeType == "light-theme") {
        this.textContent = "Dark"; //this changes the name of the button
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});




//Button 1
const button1 = document.querySelector('.btn1');

button1.addEventListener('click', function() {
    console.log('Leftmost button');
});



//Button 2
const button2 = document.querySelector('.btn2');

button2.addEventListener('click', function() {
    console.log('Middle button');
});



//Button 3
const button3 = document.querySelector('.btn3');

button3.addEventListener('click', function() {
    console.log('Rightmost button');
});