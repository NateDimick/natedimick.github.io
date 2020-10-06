// this js file just contains a bunch of stupi stuff I want to happen on my page
// all visual, not really functional
// but this is a visual page
var nofun = true;
var onPage = true;
var hell = false;
var todayDays = [];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
// first basic foray into JS: change the website title
var webtitles = [
    "Portfolio, Starboardflio",  // this is the best title. it was the first one I came up with too. it's all downhill from here
    "Good Stuff!",  // @Hank
    "RTFM",
    "This is Nate's website",
    "Ranch it up, brotendo",
    "This is not the droid you're looking for",
    "No wheat = defeat",
    "No ore? 7 point score.",
    "That celebrated, cultivated, under-rated nobleman",  // the duke of plaze toro!
    "Have you noticed that there's a different title every time?",
    "JSON > pickle, change my mind",
    "STONKS",
    "Follow @chupeverything please",
    "Clever titles that fit in a tab are hard to come by these days",
    "Happy Thursday!",
    "Get those gavels going!",
    "It was cool when Minecraft did it",
    "It's hot in Topeka",
    "My name's Rod and I like to party",  // hot rod is underrated
    "Can you believe that this was the first JS I implemented?",  // Gotta start somewhere
    "Hippies say 'know your bag, do your own thing",  
    "Joy is the monarch, so long live the king!", // all of the world will rejoice if you saayyyy...
    "Odi odi ooooooo",  // @Stuart
    "If I had a boat...",  // I'd go out on the ocean
    "You're the best",  // @Axelle
    "You think I won't come up with over 100 titles? Watch me.",  // oh boy I was foolish but I followed through
    "wakka wakka, who wants to hear a joke?",
    "You fell for one of the classic blunders!",  // @ Wilson
    "This isn't my world.. DISAPPOINTED!",
    "Yee",
    "There is no good or evil, only flavor",  // thatnks, @Yetee
    "Go dinosaur or go home!",
    "Nate Pate Tuven",  // @Jackson Packson Tuven
    "The Legend of Nate: A Link to the Source",
    "Tyler, no! You're susceptable to damage!",
    "Tastes like Home Depot",
    "Look into the sun with zero fear",  // it's the best time of the year, christmas is here!
    "Hover over the my picture",
    "Ideally you never see the same title twice",
    "Huge improvement over my old website",  // it is
    "Got Milk?",
    "'Memba Chewbacca?",
    "The Drum Solo from Phil Collin's 'In The Air Tonight'",  // throwback to Tron
    "Oh jeez my back hurts",  // this is often true.
    "What time is it, Mr. Fox?",
    "Cookie Monster, are you hungry?",
    "Fishy, fishy, cross my ocean",
    "Swinging along, swinging along",  // the open road, all in the fall of the year
    "The best thing that Aloha means...",
    "What's new pussycat?",  // woah 
    "It's over. I have the high ground!",
    "You killed my cactus!",  // which was practically industrucable!
    "Hello? my eyes are down there",
    "Haha most of my javascript is just arrays of strings",  // whatever it takes for github to recognize this as a JS repo and not a HTML repo
    "The Ice Clown from Ice Town",
    "Try a dark mode extension",  // not perfect, but looks pretty cool
    "You are the ocean's gray waves",  // destined to reach life beyond the shore
    "Oh no there's an AFR in the pool",  // don't google afr
    "Open 24 hours 7 days a week",  // come here anytime
    "Pepperspray? That sounds delicious!",
    "PICK A GOD AND PRAY",
    "Drake... Where's the door hole?",
    "Cock-a-doodle-do the cow goes moo!",
    "A unique assortment of inside jokes and media references",
    "A dollap will do",
    "Time to tip the scales",
    "A seven nation army couldn't hold me back",
    "Jet puffed mar-sham-ma-loos",  // @Preston
    "Take charge of your destiny",
    "I like turtles",
    "Do yourself a favor and Google Los Colorados",
    "Tough & ruthless > rough & toothless",
    "Can't be trusty without being rusty",  // this is one of the best Nate-isms I've every coined
    "Battery low, please charge now",
    "I remember when Twitter likes were Favorites and stars",
    "Where's my tractor?",
    "Lawful Awful",  // my character alignment
    "I found a carrot!",
    "Everybody's cheating but Waluigi!",
    "The swords that seals the darkness, the blade of evil's bane",
    "If a title is too ... It's gets cut off",
    "Living free or dying since 1998",  // top 5 titles
    "I fear the edge of dawn",
    "Those are not good odds",
    "Say it: Black Lives Matter.",
    "Advertise on this site for just $100",  // I'm serious. I'll sellout. 
    "877 241 luuunaaaa",
    "Do you bake brownies or just one brownie?",  // when you take the pan out of the oven, there's only one brownie in the pan
    "B is for the B in riot",
    "Meatball, meatball, spaghetti underneath",  // ravioli ravioli great barrier reef!!
    "Velociraptor = distanceraptor / timeraptor",  // math checks out
    "THREE sandwiches!?",
    "Mothman!",
    "You probably need to drink more water",
    "Leader of the \"Nate needs a job\" task force",
    "Hooray for Horizons",
    "Yeah this is just one page why would there be more?",  // best choice I made. one quality page is all I need
    "Timelord will continue to punish linear conceptions of time",
    "Not the criminal Nate Dimick from upstate New York",  // he soils my good name
    "There are 120 possible titles and you got the 100th!",
    "Where's my train? Take me away, choo choo!",
    "Hire me?",
    "REEEEEEE",
    "Take my by the hand lead me to the land",
    "This website is only available until March 31st",  // Choose between this site and super mario 3d all stars, I guess
    "$5 Canadian Round Robin",
    "SHHHH this is a LIBRARY",
    "This website gets 59 miles per gallon",
    "These faen Dredge keep coming from the north",
    "EMPORIO!!!!",
    "I'll take the over",
    "Glub glub glub",
    "Feeling good on a Wednesday",
    "Let's spin the prize wheel!",
    "Ralph Lawrence alumni room chair: do not remove",
    "Back in my day...",
    "No title for you",
    "All hail the king of slow",
    "The king of the castle and the dirty rascal",
    "For Shovelry!"
];

var personaltitles = [
    "Economist.",  // this is an inside joke  with my senior year roommates
    "Celtics Fan.",
    "Steelers Fan.",
    "Kahuna.",  // silly title, but I love it and it's important to me
    "Educator.",
    "Lifeguard.",  // since 2015
    "Redditor.",
    "Tweeter.",
    "Omnivore.",
    "Brandeisian.",
    "Power Forward.", // in middel school
    "Bug Slayer.",  // they have no place in my house. arachnids too. 
    "Raffle Winner.",
    "Mistake Maker.",  // everyone is. admitting is strong.
    "Heavy Sleeper.",  // one time my parents chased a bat into my room, swatted it with a broom, broke said broom, and did not wake me.
    "Joker.",
    "Hooligan.",
    "Critic.",
    "Inexorable.",
    "Indominable.",
    "Stump Jumper.",  // Urban Dictionary has an unflattering result for this, I swear it's a reference to a joke made by VT-based comedian The Logger 
    "Cheeseburger Fan.",
    "Kayaker.",
    "Canoer.",  // I've got a mean J stroke
    "Perdedor.",
    "Risk Taker.",
    "Zoomer.",
    "Observer.",
    "Independant.",  // actually, I've been a registered democrat since 2/2020
    "Human.",
    "Voter.",
    "Decider.",  // "I am the decider"
    "Rule Follower.",
    "Commuter.",
    "Truth Seeker.",  // truth, even unto it's innermost parts
    "Settler (of Catan).",
    "Mastermind.",
    "Tactician.",  // Fire Emblem changed my life
    "Mug Collector.",
    "Night Owl.",  // 6am? what's that?
    "Juggernaut.",
    "Handyman.",  // clever and great at discovering kludge solutions
    "Developer.",
    "Negotiator.",
    "Tinkerer.",
    "Happy Camper.",  // most of the time
    "Idealist.",  // sadly
    "Debugger.",
    "Job Searcher.",  // hire me?
    "Title Maker.",  // evidence submitted
    "Dream Weaver.",  // I believe you can carry me through the niiiight
    "List Writer.",
    "Competitor.",
    "Gambler.", // it's not a problem, though
    "Waxing Poet.",
    "Navigator.",  // I call shotgun
    "Puzzle Solver.",
    "Riddler.",
    "WSI.",  // water safety instructor
    "Grillmaster.",  // I'm not actually a grillmaster, but I think it's an awesome title. Someday though
    "Reasoner.",
    "Bettor.",  // and i'm surprisingly good at it too
    "Mask Wearer.",
    "Social Distancer.",
    "Dungeon Crawler.",
    "Champion.",
    "Dodgeballer."
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
        var ts = document.querySelectorAll('.my-titles');
        ts[randInt(4)].innerHTML = personaltitles[randInt(personaltitles.length)];
        
    };
};

function rain() {
    /*
    creates a moving line pattern to the background of the page. it resembles rain. Brings the page to life.
    */
    // checks on page first - if on page wasn't here, lines would spawn but wouldn't animate when the page is out of focus. it was actually a really cool bug to see a ton of lines go at once, but I didn't like the possible side effects
    if (onPage) {
        const svg = d3.select("#rain");
        let startHeight = randInt(window.innerHeight * 1.5) - window.innerHeight / 2;  
        let startPosMod = 1 + randInt(2);
        let startX = window.innerWidth / startPosMod;  // lines can start either off the right hand side of the page, or in the middle (spawning is hidden by the content)
        // speed and size variable to make it seem more organic
        let animateTime = 5000 + randInt(10000); 
        let size = 100 + randInt(1500);  // size should probably scale by window size - long lines are massive on mobile
        let color = hell ? "firebrick" : "forestgreen";
        
        // create a line 
        let l = svg.append("line")  // using d3's handy svg tools
            .attr("x1", startX)
            .attr("y1", startHeight)
            .attr("x2", startX + size)
            .attr("y2", startHeight - size)
            .style("stroke", color)
            .style("stroke-width", 2);

        // set the animation to cross the screen
        l.transition()
            .duration(animateTime)
            .attr("x1", -size)
            .attr("y1", startHeight + size + startX)
            .attr("x2", 0)
            .attr("y2", startHeight + startX)
            .remove();  // despawn the line when done - to prevent buildup of line elements
    }
    
        
}

function happyDay() {
    let holidayDiv = document.getElementById("holiday");
    let date = new Date();
    //let url = `https://192.168.1.23/api/date?month=${date.getMonth() + 1}&day=${date.getDate()}`;
    let url = `https://fun-holiday-api.herokuapp.com/api/date?month=${date.getMonth() + 1}&day=${date.getDate()}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const day_index = randInt(data.holidays.length);
        holidayDiv.innerHTML = `Happy ${data.holidays[day_index]}!`;
        todayDays = data.holidays;
        document.querySelector('#new-day').style.display = 'inline';
    });
    holidayDiv.innerHTML = "fetching today's holiday...";
}

function rerollHoliday(){
    let holidayDiv = document.getElementById("holiday");
    if (todayDays.length > 0){
        const day_index = randInt(todayDays.length);
        holidayDiv.innerHTML = `Happy ${todayDays[day_index]}!`;
    }
}

var pics = ['./Pictures/me.jpg', './Pictures/sportz.jpg', './Pictures/ctf.jpg', './Pictures/hammock.jpg', './Pictures/swim.png']; // pictures that can appear in the profile-pic element
var pic_ind = 1;
async function myPictureSlideshow(event){
    if (!nofun){
        event.target.src = pics[pic_ind];
        pic_ind = (pic_ind + 1) % pics.length;
        document.title =  webtitles[Math.floor(Math.random() * webtitles.length)];
        sleep(1000);
    }
    
};

function isInHeader(e) {
    if (e.tagName === "HTML") {
        return false;
    } else if (e.tagName === "HEADER") {
        return true;
    } else {
        return isInHeader(e.parentElement);
    }
}
// time machine functions to make the picture appear and change the text of the time machine button
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

function enableFun () {
    if (nofun){
        nofun = false;
        document.getElementById("time-machine").style.display = "inline";
        document.getElementById("hint").style.display = "inline";
        document.getElementById("holiday-box").style.display = "block";
        document.getElementsByTagName("html")[0].style.fontFamily = 'memoriesregular';
    }
    
}

function disableFun () {
    if (!nofun) {
        nofun = true;
        document.title = "Nate Dimick's Webpage";
        document.getElementById('my-picture').src = './Pictures/me.jpg';
        document.getElementById("time-machine").style.display = "none";
        document.getElementById("hint").style.display = "none";
        document.getElementById("holiday-box").style.display = "none";
        document.getElementsByTagName("html")[0].style.fontFamily = "Arial, Helvetica, sans-serif";
        let defaultTitles = ["Software Engineer.", "Roboticist.", "Camp Counselor.", "Lifeguard."];
        Array.from(document.querySelectorAll(".my-titles")).forEach((t, i) => {
            t.textContent = defaultTitles[i];
        })
    }
    
}

function enableHell () {
    if (!hell) {
        let hc = "firebrick";
        let bc = "gray";
        hell = true;
        document.title = "Nate Dimick's Infernal Cave of Secrets";
        document.getElementById("hell").style.display = "inline";
        document.getElementById('my-titles').innerHTML = "Hellspawn.";
        document.getElementsByTagName("html")[0].style.fontFamily = "hellveticaregular";
        Array.from(document.getElementsByTagName("a")).forEach(e => isInHeader(e) ? null : e.style.color = hc);
        Array.from(document.getElementsByTagName("h1")).forEach(e => isInHeader(e) ? null : e.style.color = hc);
        Array.from(document.getElementsByTagName("li")).forEach(e => isInHeader(e) ? null : e.style.backgroundColor = bc);
        Array.from(document.getElementsByTagName("section")).forEach(e =>  e.style.backgroundColor = bc);
        Array.from(document.getElementsByTagName("header")).forEach(e => e.style.backgroundColor = bc);
        document.querySelector("#rain").style.backgroundColor = "black";
        document.getElementById('my-picture').src = './Pictures/meF.jpg'; 
        document.getElementById("base").style.backgroundImage = "url(./Pictures/roadinv.png)";
    }
    
}

function disableHell () {
    if (hell) {
        let nc = "forestgreen";
        let bc = "white";
        hell = false;
        document.title = "Nate Dimick's Webpage";
        document.getElementById("hell").style.display = "none";
        Array.from(document.getElementsByTagName("a")).forEach(e => isInHeader(e) ? null : e.style.color = nc);
        Array.from(document.getElementsByTagName("h1")).forEach(e => isInHeader(e) ? null : e.style.color = nc);
        Array.from(document.getElementsByTagName("li")).forEach(e => isInHeader(e) ? null : e.style.backgroundColor = bc);
        document.getElementsByTagName("html")[0].style.fontFamily = "Arial, Helvetica, sans-serif";
        Array.from(document.getElementsByTagName("section")).forEach(e => e.style.backgroundColor = bc);
        Array.from(document.getElementsByTagName("header")).forEach(e => e.style.backgroundColor = bc);
        document.querySelector("#rain").style.backgroundColor = "whitesmoke";
        document.getElementById('my-picture').src = './Pictures/me.jpg';
        document.getElementById("base").style.backgroundImage = "url(./Pictures/road.jpg)";
    }
    
}
function onWindowLoad(){
    // set up the business/fun mode buttons
    document.getElementById("business-button").addEventListener("click", function (event) {
        document.querySelectorAll(".button").forEach(button => button.style.backgroundColor = "gainsboro");
        event.target.style.backgroundColor = "forestgreen";
        disableFun();
        disableHell();
    
    })
    document.getElementById("fun-button").addEventListener("click", function (event) {
        document.title =  webtitles[Math.floor(Math.random() * webtitles.length)];
        document.querySelectorAll(".button").forEach(button => button.style.backgroundColor = "gainsboro");
        event.target.style.backgroundColor = "forestgreen";
        disableHell();
        enableFun();
        
    
    })
    document.getElementById("hell-button").addEventListener("click", function (event) {
        document.querySelectorAll(".button").forEach(button => button.style.backgroundColor = "gainsboro");
        event.target.style.backgroundColor = "firebrick";
        disableFun();
        enableHell();
        
    
    })
    // set up looping functions to run in the background
    setInterval(titleloop, 3000);
    setInterval(rain, 1000);
    // event listeners
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
    happyDay();
    document.querySelector('#new-day').onclick = rerollHoliday;
};
// set the onload function to run and set the page up
window.onload = onWindowLoad;

