/* 
Storage - Capacity in bits
RAM - More Traps
CPU - More Entities
GPU - Better vision? (Vitamin A not needed)
Tier 7 data
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


var resources = 
[
    {
        name: 'storage',
        amount: 0
    },
    {
        name: 'ram',
        amount: 0
    },
    {
        name: 'cpu',
        amount: 0
    },
    {
        name: 'gpu',
        amount: 0
    },
]

// Here be idlers! 
async function load() 
{
    const {default: data} = await import('../json/savedata.json', {
        assert:{
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

}

function addResource(resourceId) 
{
    
}
