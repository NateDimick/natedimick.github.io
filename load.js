// script that I want to run when the page loads
// first basic foray into JS: change the website title
var webtitles = [
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
    "Hover over the my picture",
    "Ideally you never see the same title twice",
    "Huge improvement over my old website",
    "Got Milk?",
    "'Memba Chewbacca?",
    "The Drum Solo from Phil Collin's 'In The Air Tonight'",
    "Oh jeez my back hurts",
    "What time is it, Mr. Fox?",
    "Cookie Monster, are you hungry?",
    "Fishy, fishy, cross my ocean",
    "Swinging along, swinging along",
    "The best thing that Aloha means...",
    "What's new pussycat?",
    "It's over. I have the high ground!",
    "You killed my cactus!",
    "Hello? my eyes are down there",
    "Haha most of my javascript is just arrays of strings"
];
document.title =  webtitles[Math.floor(Math.random() * webtitles.length)];

var personaltitles = [
    "Economist.",
    "Celtics Fan.",
    "Steelers Fan.",
    "Kahuna.",
    "Lifeguard.",
    "Redditor.",
    "Tweeter.",
    "Omnivore.",
    "Brandeisian.",
    "Power Forward.",
    "Bug Slayer.",
    "Raffle Winner.",
    "Mistake Maker.",
    "Heavy Sleeper.",
    "Joker.",
    "Hooligan.",
    "Critic.",
    "Inexorable.",
    "Indominable.",
    "Stump Jumper.",  // Urban Dictionary has an unflattering result for this, I swear it's a reference to a joke made by VT-based comedian The Logger 
    "Cheeseburger Fan.",
    "Kayaker.",
    "Canoer.",
    "Perdedor.",
    "Risk Taker.",
    "Zoomer.",
    "Observer.",
    "Independant.",
    "Human.",
    "Voter.",
    "Decider.",
    "Rule Follower.",
    "Commuter.",
    "Truth Seeker.",
    "Settler (of Catan)."
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
async function titleloop() {
    function compareFunction (a, b){
        return  b.length - a.length;
    };
    var maxlen = personaltitles.sort(compareFunction)[0].length;
    while (true) {
        var ts = document.getElementById('my-titles');
        ts.innerHTML = personaltitles[Math.floor(Math.random() * personaltitles.length)];
        await sleep(3000);
    };
};

var pics = ['./Pictures/me.jpg', './Pictures/sportz.jpg', './Pictures/ctf.jpg', './Pictures/hammock.jpg'];
var pic_ind = 1;
async function myPictureSlideshow(event){
    event.target.src = pics[pic_ind];
    pic_ind = (pic_ind + 1) % pics.length;
    sleep(1000);
};
function revealPast(event){
    var tm = document.getElementById("time-machine");
    var past = document.createElement("IMG");
    past.src = "./Pictures/past.jpg";
    past.width = 500; // window.innerWidth * 0.75;
    past.setAttribute("style","width:100%");
    past.id = "ugly-past";
    tm.appendChild(past);
    event.target.removeEventListener("click", revealPast);
    event.target.addEventListener("click", deletePast);
    event.target.innerHTML = "Oh please no click again and make it stop!";
};
function deletePast(event){
    var tm = document.getElementById("time-machine");
    var past = document.getElementById("ugly-past");
    tm.removeChild(past);
    event.target.removeEventListener("click", deletePast);
    event.target.addEventListener("click", revealPast);
    event.target.innerHTML = "Wanna make the same mistake again?";
}
function onWindowLoad(){
    titleloop();
    /*
    var sec = document.createElement("SECTION");
    var p = document.createElement("P");
    p.innerHTML = "look at this new section";
    sec.appendChild(p);
    document.body.appendChild(sec);
    */
    //handleLines();
    var mypic = document.getElementById('my-picture');
    mypic.addEventListener("mouseover", myPictureSlideshow);
    var timeButton = document.getElementById("time-button");
    timeButton.addEventListener("click", revealPast);
};
window.onload = onWindowLoad;

