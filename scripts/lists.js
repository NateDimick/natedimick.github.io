// scripts for all the name-based shenanigans on my page
const webtitles = [
    "Portfolio, Starboardflio",  // this is the best title. it was the first one I came up with too. it's all downhill from here
    "Good Stuff!",  // @Hank
    "RTFM",
    "This is Nate's website",
    "Ranch it up, brotendo",
    "This is not the droid you're looking for",
    "No wheat = defeat",
    "No ore? 7 point score.",
    "That celebrated, cultivated, under-rated nobleman",  // the duke of plaza toro!
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
    "There is no good or evil, only flavor",  // thanks, @Yetee
    "Go dinosaur or go home!",
    "Nate Pate Tuven",  // @Jackson Packson Tuven
    "The Legend of Nate: A Link to the Source",
    "Tyler, no! You're susceptible to damage!",
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
    "You killed my cactus!",  // which was practically indestrucable!
    "Hello? my eyes are down there",
    "Haha most of my javascript is just arrays of strings",  // whatever it takes for github to recognize this as a JS repo and not a HTML repo
    "The Ice Clown from Ice Town",
    "Try a dark mode extension",  // not perfect, but looks pretty cool
    "You are the ocean's gray waves",  // destined to reach life beyond the shore
    "Oh no there's an AFR in the pool",  // don't google afr
    "Open 24 hours 7 days a week",  // come here anytime
    "Pepper spray? That sounds delicious!",
    "PICK A GOD AND PRAY",
    "Drake... Where's the door hole?",
    "Cock-a-doodle-do the cow goes moo!",
    "A unique assortment of inside jokes and media references",
    "A dollop will do",
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
    //"Leader of the \"Nate needs a job\" task force",
    "Hooray for Horizons",
    "Yeah this is just one page why would there be more?",  // best choice I made. one quality page is all I need
    "Timelord will continue to punish linear conceptions of time",
    "Not the criminal Nate Dimick from upstate New York",  // he soils my good name
    "This title was originally the 100th!",
    "Where's my train? Take me away, choo choo!",
    //"Hire me?",
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
    "For Shovelry!",
    "Nate Dimick: The Person: The Website",  // High School Musical: The Musical: The Series
    "We're all roughly the same width",
    "Still hunting for the perfect fried chicken sandwich",
    "What you just said: that was my nickname in high school",
    "A man, but not a myth nor a legend",
    "How do you like that silver?",
    "Code Monkey very simple man",
    "This isn't Nate Dimick, this is a website! I THREW IT ON THE GROUND",
    "All nightmares start as dreams",
    "When are we finally getting rid of daylight savings?"
];

const personaltitles = [
    "Software Engineer",
    "Roboticist",
    "Camp Counselor",
    "Economist",  // this is an inside joke  with my senior year roommates
    "Celtics Fan",
    "Steelers Fan",
    "Kahuna",  // silly title, but I love it and it's important to me
    "Educator",
    "Lifeguard",  // since 2015
    "Redditor",
    "Tweeter",
    "Omnivore",
    "Brandeisian",
    "Power Forward", // in middle school
    "Bug Slayer",  // they have no place in my house. arachnids too. 
    "Raffle Winner",
    "Mistake Maker",  // everyone is. admitting is strong.
    "Heavy Sleeper",  // one time my parents chased a bat into my room, swatted it with a broom, broke said broom, and did not wake me.
    "Joker",
    "Hooligan",
    "Critic",
    // "Inexorable Being",
    // "Indomitable Being",
    "Stump Jumper",  // Urban Dictionary has an unflattering result for this, I swear it's a reference to a joke made by VT-based comedian The Logger 
    "Cheeseburger Enthusiast",
    "Kayaker",
    "Canoer",  // I've got a mean J stroke
    "Perdedor",
    "Risk Taker",
    "Zoomer",
    "Observer",
    "Independent Mind",  // actually, I've been a registered democrat since 2/2020
    "Human",
    "Voter",
    "Decider",  // "I am the decider"
    "Rule Follower",
    "Commuter",
    "Truther",  // I ain't calling you a truther
    "Settler (of Catan)",
    "Mastermind",
    "Tactician",  // Fire Emblem changed my life
    "Mug Collector",
    "Night Owl",  // 6am? what's that?
    "Juggernaut",
    "Handyman",  // clever and great at discovering kludge solutions
    "Developer",
    "Negotiator",
    "Tinkerer",
    "Happy Camper",  // most of the time
    "Idealist",  // sadly
    "Debugger",
    //"Job Searcher.",  // hire me?
    "Title Maker",  // evidence submitted
    "Dream Weaver",  // I believe you can carry me through the niiiight
    "List Writer",
    "Competitor",
    "Gambler", // it's not a problem, though
    "Waxing Poet",
    "Navigator",  // I call shotgun
    "Puzzle Solver",
    "Riddler",
    "Former WSI",  // water safety instructor
    "Grillmaster",  // I'm not actually a grillmaster, but I think it's an awesome title. Someday though
    "Bettor",  // and i'm surprisingly good at it too
    "Mask Wearer",
    "Social Distancer",
    "Dungeon Crawler",
    "Champion",  // it's true I've been champion of a couple of things
    "Dodgeballer",
    "Explorer",
    "Brainstormer",
    "Overthinker",
    "Map Enthusiast",
    "Procrastinator",
    "Pollster",
    "Hoodie Fanatic",
    "Fantasy Football Manager",
    "Introvert"
];

const facts = [
    "My current car is a 2012 Prius and I hate it.",
    "I have no siblings and all my first cousins are 25+ years older than me.",
    "I don't drink coffee or soda.",
    "My favorite video game genres are RPGs, Adventure, Strategy, and Platformers.",
    "When Ben & Jerry's re-released Candy Bar Pie as slices I got way too excited and was super let down by how they tasted nothing like the original limited batch from 2014.",
    "This website's background is inspired by the title screen for Metroid Prime Trilogy.",
    "The only episode of Breaking Bad I ever watched was the last one.",
    "I drove an hour through a snowstorm on St. Patrick's day to get my first driver's license. But the test proctor was at his mother's funeral so I had to come back a few days later.",
    "On my first day at my first real job, there was an insurrection at the United States Capitol Building.",
    "I was born dehydrated.",
    "I've been a certified lifeguard since 2015.",
    "Arby's, Game informer and Ben & Jerry's all follow me on Twitter. I'm only a customer for one of them though.",
    "My favorite movie is Hot Rod.",
    "Multiple people have told me I look like John Mulaney and I've told multiple people that they are wrong.",
    "I have all 4 wisdom teeth.",
    "I think laser thermometers are really really cool.",
    "The only thing I can bring myself to order and Molly's in Hanover NH is their Chicken Carbonara",
    "I was banned on Twitter for 6 months in 2018 for lying about my age in 2011.",
    "If my high school didn't use the \"Olympic System\", then I would have been the Salutatorian.",
    "I won the civil war Jeopardy tournament in fifth grade and the prize was bragging rights. So there.",
    "My greatest video game achievement is beating Pikmin 3 100% in one day.",
    "I was both the first former camper and the youngest person to ever join the director's leadership team at my summer camp.",
    "I am 6' 2\" tall.",
    "I got an invitation to apply to St. Paul's School summer program but they addressed it to \"Hate Dimick\". I did not apply.",
    "I did a polar plunge once.",
    "I don't use TikTok or Instagram and I never used Vine.",
    "Someday I want a lake house.",
    "My favorite cut of steak is filet mignon, but I also love the deckle on a ribeye.",
    "I really want to learn Go (the programming language) but never have the time or project for it.",
    "I really don't like to rewatch movies or replay video games.",
    "My favorite song is Everlong.",
    "I've never been arrested or ticketed.",
    "Lemonade is good but Arnie Palmies and strawberry lemonade are better.",
    "I'm pretty bad at lying.",
    "If I notice a 4 or 5 digit license plate, I feel the urge to point it out.",
    "I've lost more money investing in Draftkings than betting in Draftkings."
]

function setFacts() {
    const parent = document.querySelector('#bio-body');
    const fact_ids = new Set();
    while (fact_ids.size < 5) {
        fact_ids.add(randInt(facts.length));
    }
    let n = 1;
    fact_ids.forEach(i => {
        const p = document.createElement('p')
        p.innerHTML = `${n++}. ${facts[i]}`;
        parent.appendChild(p);
    })
}

setFacts();