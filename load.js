// script that I want to run when the page loads
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
// first basic foray into JS: change the website title
var webtitles = [
    "Portfolio, Starboardflio",
    "Good Stuff!",
    "RTFM",
    "This is Nate's website",
    "Ranch it up, brotendo",
    "This is not the droid you're looking for",
    "No wheat = defeat",
    "No ore? 7 point score.",
    "That celebrated, cultivated, under-rated nobleman",
    "Have you noticed that there's a different title every time?",
    "JSON > pickle, change my mind",
    "STONKS",
    "Follow @chupeverything please",
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
    "This isn't my world.N.. DISAPPOINTED!",
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
    "Haha most of my javascript is just arrays of strings",
    "The Ice Clown from Ice Town",
    "Try a dark mode extension",
    "You are the ocean's gray waves",
    "Oh no there's an AFR in the pool",
    "Open 24 hours 7 days a week",
    "Pepperspray? That sounds delicious!",
    "PICK A GOD AND PRAY",
    "Drake... Where's the door hole?",
    "Cock-a-doodle-do the cow goes moo!",
    "A unique assortment of inside jokes and media references",
    "A dollap will do",
    "Time to tip the scales",
    "A seven nation army couldn't hold me back",
    "Jet puffed mar-sham-ma-loos",
    "Take charge of your destiny",
    "I like turtles",
    "Do yourself a favor and Google Los Colorados",
    "Tough & ruthless > rough & toothless",
    "Can't be trusty without being rusty",
    "Battery low, please charge now",
    "I remember when Twitter likes were Favorites and stars",
    "Where's my tractor?",
    "Lawful Awful",
    "I found a carrot!",
    "Everybody's cheating but Waluigi!",
    "The swords that seals the darkness, the blade of evil's bane",
    "If a title is too ... It's gets cut off",
    "Living free or dying since 1998",
    "I fear the edge of dawn",
    "Those are not good odds",
    "Say it: Black Lives Matter.",
    "Advertise on this site for just $100",
    "877 241 luuunaaaa",
    "Do you bake brownies or just one brownie?",
    "B is for the B in riot",
    "Meatball, meatball, spaghetti underneath",
    "Velociraptor = distanceraptor / timeraptor",
    "THREE sanwiches!?",
    "Mothman!",
    "You probably need to drink more water",
    "Leader of the \"Nate needs a job\" task force",
    "Hooray for Horizons",
    "Yeah this is just one page why would there be more?",
    "Timelord will continue to punish linear conceptions of time",
    "Not the criminal Nate Dimick from upstate New York",
    "There are 100 possible titles and you got the 100th!"
];
sleep(1000);
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
    "Settler (of Catan).",
    "Mastermind.",
    "Tactician.",
    "Mug Collector.",
    "Night Owl.",
    "Juggernaut.",
    "Handyman.",
    "Developer.",
    "Negotiator.",
    "Tinkerer.",
    "Happy Camper.",
    "Idealist.",
    "Debugger.",
    "Job Searcher.",
    "Title Maker.",
    "Dream Weaver.",
    "List Writer.",
    "Competitor.",
    "Gambler.",
    "Waxing Poet."
];


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
    document.title =  webtitles[Math.floor(Math.random() * webtitles.length)];
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
    var mypic = document.getElementById('my-picture');
    mypic.addEventListener("mouseover", myPictureSlideshow);
    var timeButton = document.getElementById("time-button");
    timeButton.addEventListener("click", revealPast);
};
window.onload = onWindowLoad;

