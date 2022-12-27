/* 
Storage - Capacity in bits
RAM - More Traps
CPU - More Entities
GPU - Better vision? (Vitamin A not needed)
Tier 7 data

    - Append new resources to the resources variable
    - Make resources locked and unlock them as soon as it is possible to gain them


*/


/*
fs = require('fs');
var name = 'fileName.json';
var m = JSON.parse(fs.readFileSync(name).toString());
m.forEach(function(p){
    p.name= m.name;
});
fs.writeFileSync(name, JSON.stringify(m));

*/

var clickValue = 1;

var resources = 
[
    {
        name: 'Storage',
        amount: 0,
        autoValue: 0,
        clickValue: 1
    },
    {
        name: 'RAM',
        amount: 0,
        autoValue: 0,
        clickValue: 1
    },
    {
        name: 'CPU',
        amount: 0,
        autoValue: 0,
        clickValue: 1
    },
    {
        name: 'GPU',
        amount: 0,
        autoValue: 0,
        clickValue: 1
    },
]

// Here be idlers! 
async function load() 
{
    const {default: data} = await import('../json/savedata.json', 
    {
        assert:
        {
            type:"json"
        }
    });
    console.log(data);
}

function save() 
{
    JSON.stringify(resources);
}

function displayResource(displayId)
{
    var display = document.getElementById(displayId);
    var idValue = displayId.substring(0, displayId.length - 4);
    var res = resources[idValue];
    
    display.innerText = res.name + ": " + res.amount + ' bytes';

}

function addResource(idValue) 
{
    resources[idValue].amount += resources[idValue].clickValue;
    resources[idValue].amount = Number(resources[idValue].amount.toFixed(3));
    displayResource(idValue + "Disp");
    playSound();
}

function playSound()
{
    var audio = new Audio('../sfx/plink.mp3');
    audio.volume = audio.volume *= 0.1;
    audio.play();

}

/*
MAKE IDLE GAME:

step ?: lore
step 1: Resources
step 2: buttahns
step 3: money go up
step 4: make money go up faster
step 5: more types of money
step 6: reset everything for money+
step 7: repeat until lore complete
step 1.5,2.5,3.5,3.75,3.875,4.5,5.5,6.28316,7.1,7.9: delete player progress
step 8: reveal sequel (Other idle game on OS)
*/