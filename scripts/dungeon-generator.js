//Tileset
const dungeonWalls = '+';
const dungeonFloor = '\'';

// Master Function
function createDungeon() {
    const dungeonWidth = 20;
    const dungeonHeight = 20;
    
    
    let dungeon = [];
    
    for (let y = 0; y < dungeonHeight; y++) {
        let row = '';
        for (let x = 0; x < dungeonWidth; x++) {
            if (y === 0 || y === dungeonHeight - 1 || x === 0 || x === dungeonWidth - 1) {
            row += dungeonWalls;
            } else {
            row += dungeonFloor;
            }
        }
        dungeon.push(row);
    }
    
    document.getElementById('dungeon').innerText = dungeon.join('\n');
}

function createRoom(width, height) {

}