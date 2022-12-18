var popupPageCounter = 0;
var recency = 0; //<-- gonna be used eventually right?
 

// Invisible overlay code for whenever we resize or move a window
function addInvisibleOverlay() {
    if(!document.getElementsByClassName("invisibleOverlay")[0]) {
        var invisibleOverlay = document.createElement("div");
        invisibleOverlay.className = "invisibleOverlay";
        document.body.appendChild(invisibleOverlay);
    }
}

function removeInvisibleOverlay() {
    for(var i = 0; i < document.getElementsByClassName("invisibleOverlay").length; i++) {
        document.getElementsByClassName("invisibleOverlay")[i].parentNode.removeChild(document.getElementsByClassName("invisibleOverlay")[i]);
    }
}

function addInvisOverlayTemporarily(ms) {
    addInvisibleOverlay();
    setTimeout(function(){ 
    removeInvisibleOverlay();
    }, ms);  

}
// Time Display
function refreshTime() {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay(); 
    var minutes = date.getMinutes();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear() - 25;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm + '\n' + day + '/' + month + '/' + year;
    document.getElementById("time").innerText = strTime;
}
    setInterval(refreshTime, 999);

function popUp(link, title) {
    // Create the container for the popup under the main element
    var main = document.getElementById("main");
	var display = document.createElement("div");
	display.id = "drag" + popupPageCounter;
	display.className = "draggable";
    display.setAttribute('isMaximized',0);
    // Create the title bar for the window that popped up
	var titleLine = document.createElement("div");
	titleLine.id = display.id + "header";
	titleLine.className = display.className + "header";
	titleLine.innerText = title;
    
    // Create the navbar icon representing the window
    var bottomIcon = document.createElement("li");
    bottomIcon.className = "nav-item";
    bottomIcon.innerText = title;
    bottomIcon.id = "bottomIcon"+popupPageCounter;
    bottomIcon.setAttribute('onclick', 'toggleElementDisplay(document.getElementById("'+ display.id + '"),"block");');
    
    // Create the minimize button for the window popup
    var minButton = document.createElement("div");
    minButton.className = "minButton";
    minButton.innerText = "—";
    minButton.setAttribute('onclick', 'toggleElementDisplay(document.getElementById("'+ display.id + '"),"block");');
    
    // Create the minimize button for the window popup
    var maxButton = document.createElement("div");
    maxButton.className = "maxButton";
    maxButton.innerText = "□";
    maxButton.setAttribute('onclick', 'maximizeWindow(document.getElementById("'+ display.id + '"));');

    // Create the delete button for the window popup
    var deleteButton = document.createElement("div");
    deleteButton.className = "deleteButton";
    deleteButton.innerText = "X";
    deleteButton.setAttribute('onclick', 'document.getElementById("'+ display.id + '").remove(); document.getElementById("'+ bottomIcon.id + '").remove();');

    // Create the iframe containing the window's content
	var viewport = document.createElement("iframe");
	viewport.src = link;

    // Create an observer that checks to see if the window is being resized so that an overlay can be applied
    // over the whole screen to prevent issues down the line
    observer = new ResizeObserver(function(mutations)
    {
        addInvisOverlayTemporarily(50);
    });
    observer.observe(viewport);
    
    // Attach all the created pieces of the window to eachother and main
	main.appendChild(display);
	display.appendChild(titleLine);
    titleLine.appendChild(deleteButton);
    titleLine.appendChild(maxButton);
    titleLine.appendChild(minButton);
	display.appendChild(viewport);
    
    document.getElementById("changelog").before(bottomIcon);
    
    popupPageCounter++;
    
	dragElement(display);
}
/*This function is to help with the resizing of the windows by making the contents 
of the window div match the width and height of the div, allowing us to resize all sites freely*/
function refreshWindows() {
    if(document.getElementsByClassName("draggable")[0]) {
        for(var i = 0; i < document.getElementsByClassName("draggable").length; i++) {
            //Im doing it like this so that if we make changes to the way the window is structured
            //we can still have this function work, though that O(n^2) notation 
            //is gonna be looking quite nice on our portfolios
            for(var j = 0; j < document.getElementsByClassName("draggable")[i].childNodes.length; j++) {
                if(document.getElementsByClassName("draggable")[i].childNodes[j].nodeName == "IFRAME") {
                    document.getElementsByClassName("draggable")[i].childNodes[j].style.width = document.getElementsByClassName("draggable")[i].style.width;
                    document.getElementsByClassName("draggable")[i].childNodes[j].style.height = document.getElementsByClassName("draggable")[i].style.height;
                }
            }
        }
    }
}
//ignore the extremely fast speeds at which we refresh, its fine for performance right now (probably)
setInterval(refreshWindows, 10);
//Deals with the draggable popup windows for the iframes
// Make the DIV element draggable:
function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // check whether the header is on the screen
    checkBounds(e);
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    
    addInvisibleOverlay();
    }

    function checkBounds(e) {
        e = e || window.event;

        // Make it impossible to go off to the left
        if(elmnt.offsetLeft - pos1 < 0) pos1 = elmnt.offsetLeft;

        // Make it impossible to go off to the top
        if(elmnt.offsetTop - pos2 < 0) pos2 = elmnt.offsetTop;

        // Make it impossible to go off the right
        if(elmnt.offsetLeft + elmnt.offsetWidth - pos1 > window.innerWidth) pos1 = 0;

        // Make it impossible to go off the bottom
        if(elmnt.offsetTop + elmnt.offsetHeight - pos2 > window.innerHeight * 0.96) pos2 = 0;
    }

  function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        removeInvisibleOverlay();
    }
}

function maximizeWindow(w) {

    if(w.getAttribute("isMaximized") != 1)
    {
        w.setAttribute('oldWidth',w.offsetWidth+'px');
        w.setAttribute('oldHeight',w.offsetHeight+'px');
        w.setAttribute('oldXPos',w.offsetLeft+'px');
        w.setAttribute('oldYPos',w.offsetTop+'px');
        w.style.left = '0px';
        w.style.top = '0px';
        w.style.width = window.innerWidth+'px';
        w.style.height = (window.innerHeight*0.95)+'px';
        w.setAttribute('isMaximized',1);
    }
   else {
        w.style.left = w.getAttribute("oldXPos");
        w.style.top = w.getAttribute("oldYPos");
        w.style.width = w.getAttribute("oldWidth");
        w.style.height = w.getAttribute("oldHeight");
        w.setAttribute('isMaximized',0);
    }
}

function toggleElementDisplay(elmnt, disp) {
if(elmnt.style.display != "none") elmnt.style.display = "none";
else elmnt.style.display = disp;
}

function toggleStartDisplay(elmnt, disp) {
    if(elmnt.id == "startListActive") elmnt.id = "startListInactive";
    else elmnt.id = "startListActive";

}