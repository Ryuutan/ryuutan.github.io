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
    resources[idValue].amount = Number(resources[idValue].amount.toFixed(3))
    //Number(num2.toFixed(3))
     
    displayResource(idValue + "Disp");
}
