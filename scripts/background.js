// Script for background svg 
function randInt(int) {
    return Math.floor(Math.random() * int);
}
const svg = document.getElementById("canvas");
const color = "forestgreen";
const numCircles = 10;
let maxR= Math.max(window.innerHeight / 2, window.innerWidth / 2);
for (let i = 0; i < numCircles; i++) {
    let radius = randInt(maxR);
    let circumference = Math.ceil(2 * radius * Math.PI);
    let arcLength = randInt(circumference / 2) + circumference / 6
    let direction = randInt(2) === 1 ? "normal" : "reverse";
    let c = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    c.setAttribute("cx", "50%");
    c.setAttribute("cy", "50%");
    c.setAttribute("r", radius);
    c.style["stroke-dasharray"] = `${arcLength} ${circumference}`;
    c.style["stroke-dashoffset"] = randInt(circumference - arcLength);
    c.style["animation-direction"] = direction;
    c.style["animation-duration"] =  `${randInt(10) + 5}s`;
    svg.appendChild(c);
}