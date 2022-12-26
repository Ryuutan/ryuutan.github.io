/*  
    This is a prime example of how over-engineering can occur
    On the 17th of December 2022, Ole watched Sam over-engineer an inefficient and difficult overlay to avoid a bug,
    just to offer up a simpler solution once he has it all figured out.
    
    This is also a prime example of why it is good to have more than one person working on a project,
    as co-operation and teamwork can lead to a more efficient code base and save work and processing power for all parties involved
    If only Ole called out the issue earlier.
    
    Sam & Ole - The Creation of MessOS - 17/12/2022
*/

if(!document.getElementsByClassName("invisibleOverlay")[0]) {
    var invisibleOverlay = document.createElement("div");
    invisibleOverlay.className = "invisibleOverlay";
    invisibleOverlay.style.left = 0+'px';
    invisibleOverlay.style.top = elmnt.offsetTop+'px';
    invisibleOverlay.style.width = elmnt.offsetWidth+'px';
    invisibleOverlay.style.height = elmnt.offsetHeight+'px';
    elmnt.appendChild(invisibleOverlay);
}

/*
    On this fine christmas day of 2022 (12/25/2022), Sam Kadmon proudly announces his newest abomination of overengineered 
    code. He was in the midst of making a function that takes in a window and focuses on it when clicked, but 
    unfortunately there was a lot of finnickiness involved in the process when combined with the deselect code.
    He attempted many things, such as nested ternary operators, putting the function in every part of the draggin code
    etc, all for naught. All night he toiled and tumbled, when finally he witnessed the light at the end of the tunnel 
    at 3:30AM of 12/26/2022 where he solved it with the aid of regular expressions. Finally with the code below he had 
    successfully made something that worked. And it is in this moment he realized he coult have simplified the code and 
    stuck it into the popup function.
    
    Queue the tears.
*/
function setActiveWindow(elmnt) {
    if(getType(elmnt) != "MouseEvent") elmnt.className += " activeWindow";
    else if (getType(elmnt) == "MouseEvent") {
        let temp = elmnt?.toElement?.parentNode;
        while(temp?.id != /drag[1-9]+/ && temp.parentNode != document.getElementById("main")) {
            temp = temp.parentNode;
        }
        console.log(/activeWindow/.test(temp.className));//temp.className.search("activeWindow"));
         if(!/activeWindow/.test(temp.className)) temp.className += " activeWindow"
    }