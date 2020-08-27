// this js file just contains a bunch of stupi stuff I want to happen on my page
// all visual, not really functional
// but this is a visual page
var nofun = true;
var onPage = true;
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

var personaltitles = [
    "Economist.",
    "Celtics Fan.",
    "Steelers Fan.",
    "Kahuna.",
    "Educator.",
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
    "Waxing Poet.",
    "Navigator.",
    "Puzzle Solver",
    "Riddler.",
    "WSI.",
    "Grillmaster.",
    "Reasoner."
];

function randInt(int) {
    return Math.floor(Math.random() * int);
}


function titleloop() {
    function compareFunction (a, b){
        return  b.length - a.length;
    };
    var maxlen = personaltitles.sort(compareFunction)[0].length;
    if (!nofun) {
        var ts = document.getElementById('my-titles');
        ts.innerHTML = personaltitles[randInt(personaltitles.length)];
        
    };
};

function rain() {
    if (onPage) {
        const svg = d3.select("#rain");
        let startHeight = randInt(window.innerHeight * 1.5) - window.innerHeight / 2;
        let startPosMod = 1 + randInt(2);
        let startX = window.innerWidth / startPosMod;
        let animateTime = 5000 + randInt(10000);
        let size = 100 + randInt(1500);
        

        let l = svg.append("line")
            .attr("x1", startX)
            .attr("y1", startHeight)
            .attr("x2", startX + size)
            .attr("y2", startHeight - size)
            .style("stroke", "forestgreen")
            .style("stroke-width", 2);

        l.transition()
            .duration(animateTime)
            .attr("x1", -size)
            .attr("y1", startHeight + size + startX)
            .attr("x2", 0)
            .attr("y2", startHeight + startX)
            .remove();
    }
    
        
}


var pics = ['./Pictures/me.jpg', './Pictures/sportz.jpg', './Pictures/ctf.jpg', './Pictures/hammock.jpg', './Pictures/swim.png'];
var pic_ind = 1;
async function myPictureSlideshow(event){
    if (!nofun){
        event.target.src = pics[pic_ind];
        pic_ind = (pic_ind + 1) % pics.length;
        document.title =  webtitles[Math.floor(Math.random() * webtitles.length)];
        sleep(1000);
    }
    
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
    document.getElementById("business-button").addEventListener("click", function (event) {
        nofun = true;
        document.title = "Nate Dimick's Personal Website";
        event.target.style.backgroundColor = "forestgreen";
        document.getElementById("fun-button").style.backgroundColor = "gainsboro";
        document.getElementById('my-titles').innerHTML = "Lifeguard.";
        document.getElementById('my-picture').src = './Pictures/me.jpg';
        document.getElementById("time-machine").style.display = "none";
        document.getElementById("hint").style.display = "none";
        document.getElementsByTagName("html")[0].style.fontFamily = "Arial, Helvetica, sans-serif";
    
    })
    document.getElementById("fun-button").addEventListener("click", function (event) {
        nofun = false;
        document.title =  webtitles[Math.floor(Math.random() * webtitles.length)];
        event.target.style.backgroundColor = "forestgreen";
        document.getElementById("business-button").style.backgroundColor = "gainsboro";
        document.getElementById("time-machine").style.display = "inline";
        document.getElementById("hint").style.display = "inline";
        document.getElementsByTagName("html")[0].style.fontFamily = 'memoriesregular';
    
    })
    setInterval(titleloop, 3000);
    setInterval(rain, 1000);
    var mypic = document.getElementById('my-picture');
    mypic.addEventListener("mouseover", myPictureSlideshow);
    var timeButton = document.getElementById("time-button");
    timeButton.addEventListener("click", revealPast);
    window.onblur = () => {
        onPage = false;
    }
    window.onfocus = () => {
        onPage = true;
    }
};
window.onload = onWindowLoad;
