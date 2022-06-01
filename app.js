

//JavaScript file for your interactivity

//Makes sure it throws errors
'use strict';


//Button
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
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