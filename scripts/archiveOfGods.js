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