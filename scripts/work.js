// Script to generate data to fill in a portfolio section on the main page
const work = [
    {
        name: "DEKA",
        link: "https://dekaresearch.com",
        image: "https://findvectorlogo.com/wp-content/uploads/2019/03/deka-research-and-development-corp-vector-logo.png",
        id: "deka",
        text: "Deka is my current employer and I really enjoy working for them &#"
    },
    {
        name: "Code for UV",
        link: "https://github.com/codeforUV",
        image: "https://codeforuv.org/wp-content/uploads/2019/10/CfAStates.png",
        id: "c4uv",
        text: "I've volunteered with Code for UV off and on working on their RuralNet project"
    },
    {
        name: "Brandeis ARL",
        link: "https://github.com/campusrover",
        image: "",
        id: "deis",
        text: "Worked on autonomous robot projects with ROS"
    },
    {
        name: "National Api Day",
        link: "https://national-api-day.herokuapp.com",
        image: "./Pictures/holiday.png",
        id: "day",
        text: "A fun api for obscure holidays every day of the year, with data scraped from all over the internet."
    },
    {
        name: "ChupEverything",
        link: "https://twitter.com/ChupEverything",
        image: "./Pictures/colorfulchup.jpg",
        id: "chup",
        text: "My best twitter bot, conjuring up bad competitors to mayochup. It's been shut down for a while though."
    },
    {
        name: "Blazing Bookmarks",
        link: "",
        image: "https://lh3.googleusercontent.com/xmR0dkUDFanO3LBW1CDPbQxnUBk461Ly0uUF4EvjZ5308oBNpXhkTkR52GuKCPvwc4WaFLRg=w640-h400-e365-rj-sc0x00ffffff",
        id: "bb",
        text: "Currently called 'Hot Bookmarks Bar' but someday I'll update the title when I work on the extension again."
    }
]

const projectBody = document.getElementById('work');
//const projectLinks = document.getElementById('p-links');
let pCount = 0;
work.forEach(project => {
    // every other project belongs to the flip class
    let pSection = document.createElement('section');
    if (pCount % 2) {
        pSection.className = "flip";
    }
    // the picture div comes first
    let picDiv = document.createElement('div');
    picDiv.className = "project-img"
    let pImg = document.createElement('img');
    pImg.src = project.image;
    pImg.style.width = "30%";
    pImg.style.height = "30%";
    picDiv.appendChild(pImg);
    pSection.appendChild(picDiv);
    // the text div comes second
    let textDiv = document.createElement('div');
    textDiv.className = "project-text"
    let pName = document.createElement('h2');
    pName.innerHTML = `<a href="${project.link}">${project.name}</a>`;
    textDiv.appendChild(pName);
    let para = document.createElement('p');
    para.innerHTML = project.text;
    textDiv.appendChild(para);
    pSection.appendChild(textDiv);
    pSection.id = project.id;
    projectBody.appendChild(pSection);
    pCount += 1;
    // // put a link to this section at the top of the project list
    // let pLink = document.createElement('li');
    // let quickLink = document.createElement('a');
    // quickLink.textContent = project.title;
    // quickLink.href = `#${project.id}`;
    // pLink.appendChild(quickLink);
    // projectLinks.appendChild(pLink);
});