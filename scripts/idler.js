/* 
Storage - Capacity in bits
RAM - More Traps
CPU - More Entities
GPU - Better vision? (Vitamin A not needed)
Tier 7 data

- Append new resources to the resources variable
- Make resources locked and unlock them as soon as it is possible to gain them

Upgrade Template
{
    upgradeName: ,
    upgradeId: ,
    upgradeLimit: , 
    targetIdArray: , 
    priceIdArray: ,
    priceArray: ,
    upgradeDescription: ,
},
*/

var tickrate = 1000;

var resources = 
[
    {
        name: 'Storage',
        amount: 1,
        autoValue: 0,
        clickValue: 1
    },
    {
        name: 'RAM',
        amount: 1,
        autoValue: 0,
        clickValue: 1
    },
    {
        name: 'CPU',
        amount: 1, 
        autoValue: 0,
        clickValue: 1
    },
    {
        name: 'GPU',
        amount: 1,
        autoValue: 0,
        clickValue: 1
    },
]

var upgrades =
[
    {
        name: 'Storage Upgrade 1',
        upgradeId: 's1',
        targetIdArray: [0], 
        priceIdArray: [0],
        priceArray: [16],
        upgradeDescription: 'Adds +2 to the Storage byte gain per click' + parseUpgradePrice(upgrades[0][2], upgrades[0][3]) ,
    },
    { 
        name: 'CPU Upgrade 1',
        upgradeId: 'c1',
        upgradeLimit: 5, 
        targetIdArray: [2], 
        priceIdArray: [0],
        priceArray: [32], 
        upgradeDescription: 'Adds +2 to the CPU byte gain per click' + parseUpgradePrice(upgrades[1][2], upgrades[1][3]) ,
    }
]

function parseUpgradePrice(priceIdArray, priceArray)
{
    var temp = "\n\nPrice: ";
    for(i = 0; i < priceIdArray.length; i++)
    {
        switch(priceIdArray[i])
        {
            case 0: //Storage
                temp += priceArray[i] + " " + tier + " of Storage" ; //Ah yes, 1.64246346346 Kilobytes of storage
            case 1: //RAM
                temp += priceArray[i] + " " + tier + " of RAM" ;
            case 2: //CPU
                temp += priceArray[i] + " " + tier + " of CPU" ;
            case 3: //GPU
                temp += priceArray[i] + " " + tier + " of GPU" ;
        }
    }
    return temp;
}

// Here be idlers! 
// function load() 
// {
    // }

    // function save() 
    // {
// }

function updateTier(idValue)
{
    return Math.floor(Math.log2(resources[idValue].amount)/10);
}

function displayResource(displayId)
{
    var display = document.getElementById(displayId);
    var idValue = displayId.substring(0, displayId.length - 4);
    var res = resources[idValue];
    
    // .cheap .boo .dot .fyi  .irish .kosher .meme .moe .mom .monster .name
    
    var tier = updateTier(idValue);
    var val = (res.amount / Math.pow(1024, tier)).toFixed(3);;
    /*
    

    */
    sizes = ["bytes", "kilobytes", "megabytes", "gigabytes", "terabytes", "petabytes", "exabytes", "feck ye i aint counting no more"];
    
    display.innerText = res.name + ": " + val + ' ' + sizes[tier];

}

function addResource(idValue) 
{
    resources[idValue].amount += resources[idValue].clickValue;
    displayResource(idValue + "Disp");
    playSound("triangle", 880, 0.1, 1, true, 100);
}

function unlock(idValue) 
{
    resources[idValue].autoValue++;
}


function update() 
{
    for(i = 0; i < resources.length; i++)
    {
        resources[i].amount += resources[i].autoValue * 1000/tickrate;
        displayResource(i + "Disp");
    }
}
setInterval(update, tickrate); 


//-----------------------------------------------------



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