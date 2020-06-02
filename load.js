// script that I want to run when the page loads
// first basic foray into JS: change the website title
var titlelist = [
    "Portfolio, Starboardflio",
    "Good Stuff!",
    "RTFM",
    "This is a page on Nate's website",
    "Ranch it up, brotendo",
    "This is not the droid you're looking for",
    "No wheat = defeat",
    "No ore? 7 point score.",
    "That celebrated, cultivated, under-rated nobleman",
    "Have you noticed that there's a different title every time?",
    "JSON > pickle, change my mind",
    "STONKS",
    "follow @chupeverything please",
    "Clever titles that fit in a tab are hard to come by these days",
    "Happy Thursday!",
    "Get those gavels going!",
    "It was cool when Minecraft did it",
    "It's hot in Topeka",
    "My name's Rod and I like to party",
    "Can you believe that this was the first JS I implemented?",
    "Hippies say 'know your bag, do your own thing",
    "Joy is the monarch, so long live the king!",
    "Odi odi ooooooo",
    "If I had a boat...",
    "You're the best",
    "You think I won't come up with over 100 titles? Watch me.",
    "wakka wakka, who wants to hear a joke?",
    "You fell for one of the classic blunders!",
    "This isn't my world. . . DISAPPOINTED!",
    "Yee",
    "There is no good or evil, only flavor", 
    "Go dinosaur or go home!",
    "Nate Pate Tuven",
    "The Legend of Nate: A Link to the Source",
    "Tyler, no! You're susceptable to damage!",
    "Tastes like Home Depot",
    "Look into the sun with zero fear",
    

];
var ind = Math.floor(Math.random() * titlelist.length);
var t = document.getElementById('title');
t.innerHTML = titlelist[ind];

// part 2: create a "danger zone"
var x, y, size;
let resizeHandler = () => {
    var height = window.innerHeight;
    var width = window.innerWidth;
    size = Math.ceil(Math.min(width, height) * .1);
    x = Math.random() * (width * .7 - size) + width * .15;
    y = Math.random() * height;
    console.log(x, y, size);
};




var changeColor = false;
let handleMousemove = (event) => {
    //console.log(`mouse position: ${event.x}:${event.y}`);
    if (Math.min(x, event.x) === x && Math.max(event.x, x + size) === x + size && Math.min(y, event.y) === y && Math.max(event.y, y + size) === y + size) {
        console.log('mouse is in the range')
        changeColor = true;
        document.removeEventListener('mousemove', handleMousemove);
        
        colorLoop();
    }
};
var page = window.location.pathname.split("/").pop();
if ( page === "index.html" || page === "") {
    window.onresize = resizeHandler;
    resizeHandler();
    document.addEventListener('mousemove', handleMousemove);
};


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const colors = ['lightcoral', 'salmon', 'indianred', 'firebrick', 'crimson', 'red', 'orangered', 'coral', 'darkorange', 'orange', 'gold', 'yellow', 'khaki', 'lemonchiffon', 'lightyellow', 'palegreen', 'lightgreen', 'mediumspringgreen', 'springgreen', 'lawngreen', 'limegreen', 'green', 'darkgreen', 'darkolivegreen', 'seagreen', 'mediumseagreen', 'mediumaquamarine', 'lightseagreen', 'darkcyan', 'teal', 'steelblue', 'royalblue', 'blue', 'meduimblue', 'darkblue', 'navy', 'midnightblue', 'darkslateblue', 'slateblue', 'mediumslateblue', 'mediumpurple', 'blueviolet', 'darkviolet', 'darkmagenta', 'purple', 'mediumvioletred', 'fuchsia', 'magenta', 'deeppink', 'hotpink', 'palevioletred'];
async function colorLoop() {
    var celebrate = document.createElement("h1");
    celebrate.innerHTML = "YOU FOUND THE SECRET SPOT!!!";
    celebrate.addEventListener('mousedown', (e) => {changeColor = false;});
    celebrate.style.cursor = "pointer";
    document.getElementsByClassName('banner')[0].appendChild(celebrate);
    while (changeColor) {
        var nextColor = colors.shift();
        Array.from(document.getElementsByTagName("h1")).map((x) => {x.style.color = nextColor;});
        colors.push(nextColor);
        console.log(nextColor);
        await sleep(100);
    }
    
}
