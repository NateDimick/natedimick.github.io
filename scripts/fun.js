// Script for logic pertaining to the fun mode slider

const levels = {
    1: "Unfun",
    2: "Standard",
    3: "Fun"
}

let fun = false;
let unfun = false;
let pic_ind = 1;
const goodColor = "forestgreen";
const goodBackground = "rgba(255, 255, 255, 0.5)";
const goodCanvas = "whitesmoke";
const badColor = "firebrick";
const badBackground = "rgba(0, 0, 0, 0.5)";
const badCanvas = "gray";
const pics = ['./Pictures/me.jpg', './Pictures/sportz.jpg', './Pictures/ctf.jpg', './Pictures/hammock.jpg', './Pictures/swim.png']; // pictures that can appear in the profile-pic element



// pre-define all important elements on my page
const rotatingTitle = document.querySelector('#rotating-title');
const myPicture = document.querySelector('#my-picture');
const canvas = document.querySelector('#canvas');
const modeSlider = document.querySelector('#fun-select');
const wholePage = document.getElementsByTagName('html')[0];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function randInt(int) {
    return Math.floor(Math.random() * int);
}

function isInHeader(e) {
    if (e.tagName === "HTML") {
        return false;
    } else if (e.tagName === "HEADER") {
        return true;
    } else {
        return isInHeader(e.parentElement);
    }
}


async function myPictureSlideshow(){
    if (fun){
        myPicture.src = pics[pic_ind++ % pics.length];
        document.title =  webtitles[randInt(webtitles.length)];
        sleep(1000);
    }
    
};

function titleLoop() {
    if (fun) {
        rotatingTitle.innerHTML = personaltitles[randInt(personaltitles.length)]; 
    };
};


setInterval(titleLoop, 3000);
myPicture.addEventListener("mouseover", myPictureSlideshow);

document.querySelector('#fun-select').addEventListener('input', (event) => {
    const percent = (event.target.value - 1) / 2 * 100;
    modeSlider.style.background = `linear-gradient(to right, forestgreen 0%, forestgreen ${percent}%, gainsboro ${percent}%, gainsboro 100%)`;
    document.querySelector('#fun-level').innerHTML = `Current Level: ${levels[event.target.value]}`;

    if (percent === 0) {
        unfunMode();
    } else if (percent === 50) {
        resetMode();
    } else if (percent === 100) {
        funMode();
    } else {
        console.log("bad percent");
    }
})

function funMode() {
    fun = true;
    document.title = webtitles[randInt(webtitles.length)];
    wholePage.style.setProperty('--NormalFont', 'memoriesregular');
    wholePage.style.setProperty('--HeaderFont', 'memoriesregular');


}

function unfunMode() {
    unfun = true;
    document.title = "Nate Dimick's Infernal Cave of Secrets";
    wholePage.style.setProperty('--NormalFont', 'hellveticaregular');
    wholePage.style.setProperty('--HeaderFont', 'hellveticaregular');
    changeColors(badColor, badBackground, badCanvas);
    myPicture.src = './Pictures/meF.jpg';

}

function resetMode() {
    fun = false;
    unfun = false;
    document.title = "Nate Dimick";
    rotatingTitle.innerHTML = 'Software Engineer';
    wholePage.style.setProperty('--NormalFont', 'Arial, helvetica, sans-serif');
    wholePage.style.setProperty('--HeaderFont', "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif");
    changeColors(goodColor, goodBackground, goodCanvas);
    myPicture.src = './Pictures/me.jpg';

}

function changeColors(mainColor, backgroundColor, canvasColor) {
    Array.from(document.getElementsByTagName("a")).forEach(e => isInHeader(e) ? null : e.style.color = mainColor);
    Array.from(document.getElementsByTagName("h1")).forEach(e => isInHeader(e) ? null : e.style.color = mainColor);
    Array.from(document.getElementsByTagName("li")).forEach(e => isInHeader(e) ? null : e.style.backgroundColor = backgroundColor);
    Array.from(document.getElementsByTagName("section")).forEach(e =>  e.style.backgroundColor = backgroundColor);
    Array.from(document.getElementsByTagName("header")).forEach(e => e.style.backgroundColor = backgroundColor);
    Array.from(document.getElementsByTagName("footer")).forEach(e => e.style.backgroundColor = backgroundColor);
    Array.from(document.getElementsByTagName("circle")).forEach(e => e.style.stroke = mainColor);
    canvas.style.backgroundColor = canvasColor;
    modeSlider.style.setProperty('--SliderColor', mainColor);
}