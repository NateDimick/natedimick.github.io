const projects = [
    {
        section: "Brandeis Autonomous Robotics Lab (ARL)",
        content: [
            {
                title: "Robot Services",
                text: [
                    "RSB is a robust ROS package designed to provide an interface, through Redis, for non-ROS programmers to have an easy to understand interface with a robot without actually knowing the inner workings of the robot's system.", 
                    "One of my bigger undetakings in this project was designing a method to turn a ROS map of an area into a set of line segments that represented the \"walls\" of the map. This was done using OpenCV Hough Transform and some proprietary algorithms to make consolidate noisy Hough output.",
                    "This package was instrumental in research done at Brandeis which produced the paper \"Situated Multimodal Control of a Mobile Robot: Navigation through a Virtual Environment\" which was presented at RoboDIAL 2.0, part of SIGDIAL 2020. The video presentation is linked below in the <a href=\"#vids\">video section</a> of this page."
        
                ],
                image: "./Pictures/rsb.png",
                id: "RSB"
            },
            {
                title: "Campus Rover Autonomous Stack",
                image: "./Pictures/cr3.png",
                id: "CRS",
                text: [
                    "The Campus Rover Project is an ongoing project based around a robot capable of making on-campus autonomous deliveries, prompted by speech and a Flask-based web app. I became involved with the project in \"Generation 3\", when the hardware evolved from a Kobuki Turtlebot2 to a custom \"mutant\" robot based on Robotis Turtlebot3.",
                    "I was responsible for porting the Campus Rover Software Stack from Turtlebot2 hardware to Turtlebot3 hardware, along with acting as the intergration guru, assisting the voice recognition, facial detection and gesture recognition teams in integrating their features for our end-of-semester demo. Afterwards, I continued to work on improving the package, including adding a new state manager API, refactoring launch files into modules, navigation error handling, and text-to-speech interface improvements."
                ]
            },
            {
                title: "Campus Rover 4 Hardware",
                image: "./Pictures/cr4.jpg",
                id: "CR4",
                text: [
                    "This project set out to develop a Turtlebot3 replacement using custom, cheaper hardware selected and assembled by our lab's resident roboticist, Charlie Squires. The project required creating low-level software, through a combination of ROS nodes and embedded c code on an arduino using Rosserial, that would bring up a baseline configuration capable of accurate odometry and differential drive movement, robust sensor output, and full compatibility with standard ROS pacakges like SLAM and AMCL.",
                    "This project was not completed due to COVID-19. Picture to right is of a prototype model."
                ]
            }
        ]
    },
    {
        section: "Open Source Team Projects",
        content: [
            {
                title: "Code for UV RuralNet",
                image: "",
                id: "RLN",
                text: [
                    "Code for America is a great organization with a mission of ethical hacking and creating software the can assist and empower local communities. The Upper Valley Brigade was fairly new when I joined, and had a few projects in the early stages of development. I lept in to help with RuralNet.",
                    "The core idea of RuralNet is to measure internet speeds in rural Vermont communities to determine if the speeds customers are paying for are the speeds that they are getting, and to input measured speeds to an ArcGIS database and compare against advertised ISP speeds. The goal is to advocate for our rural communities who need reliable, fast broadband connections.",
                    "This project introduced me to Node.js as back-end framework, which has made contributing to this project both rewarding and a fantastic learning experience."
                ]
            }
        ]
    },
    {
        section: "Solo Projects",
        content: [
            {
                title: "Fun Holiday API",
                image: "./Pictures/holiday.png",
                id: "FHA",
                text: [
                    "This one started out selfishly. As part of \"Fun Mode\" on this page (have you <a href=\"#mode-toggle\">tried it</a> yet?) I wanted to display a message that said \"Happy {something} Day!\" becuase every day there are multiple fake, under the radar \"holidays\" and a message like that is my idea of fun. I thought there would have already been an API for this sort of thing, but I couldn't find one, only API's that reported real holidays and API's that cost more per year then I thought was worth it. So I built it myself using Flask and hosted on Heroku. It only took ~24 hours in total to initially build - this included webscraping for data collection with beautifulsoup, compiling all data into a tsv file, putting said data into a PostgreSQL database, building and deploying the app. After about 4 days I had amassed over 7,000 unique holidays, which I believe is the most complete list on the internet. I'm very happy with how it turned out.",
                    "You can use the Fun Holidays API for free at <a href=\"https://fun-holiday-api.herokuapp.com\">fun-holiday-api.herokuapp.com</a>. Please be nice to it."
                ]
            },
            {
                title: "Gazebo Fiducial Spawner",
                image: "./Pictures/gazfid.png",
                id: "GFS",
                text: [
                    "In the ARL we work with ArUco tags, or Fiducials often. Due to the circumstances of COVID-19, we couldn't use our normal lab environment, which has fiducials taped all over the walls. There was one good example of spawning a fiducial model in Gazebo, <a href=\"https://github.com/nicolov/aruco2_ros/tree/master/aruco2_gazebo_model_example\">here</a>, but it was only an example to spawn a single fiducial.",
                    "So, I created the Gazebo Fiducial Spawner, a catkinized ROS package with the ability to spawn multiple fiducials into the Gazebo simulator. It does this by generating all the model assets required of any given fiducial model when a request to spawn is made. Two utilities are included, one that spawns a single fiducial once, and the other is an active ROS node that accepts custom messages to spawn new fiducials on demand."
                ]
            },
            {
                title: "@ChupEverything",
                image: "./Pictures/colorfulchup.jpg",
                id: "CET",
                text: [
                    "The idea of this bot is to mock the terrible names of products like \"mayochup\" and \"mayomust\" by creating new types of 'chup and 'must that have random colors as well.",
                    "Sound like fun? Why not follow <a href=\"https://twitter.com/ChupEverything\">@ChupEverything</a>"
        
                ]
            },
            {
                title: "Other Projects",
                image: "./Pictures/metasite.jpg",
                id: "OTHER",
                text: [
                    "<b>Horizons Office Homepage</b> is a productivity web app designed to automate a summer day camp's paperwork.",
                    "<b>Home Base</b> is a local web interface to my rasberry pi, for monitoring hosted bots, system hardware, and other useful tools.",
                    "<b>natedimick.com</b> is this website! I try to keep it up-to-date and add new features regularly."
                ]
            }
        ]
    }
];

const projectBody = document.getElementById('projects');
const projectLinks = document.getElementById('p-links');
let pCount = 0;
projects.forEach(section => {
    // create section
    let sectionHeader = document.createElement("section");
    // section has a title
    let sectionTitle = document.createElement("h1");
    sectionTitle.textContent = section.section;
    // put title in section and section in project div
    sectionHeader.appendChild(sectionTitle);
    projectBody.appendChild(sectionHeader);
    section.content.forEach(project => {
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
        pImg.style.width = "80%";
        picDiv.appendChild(pImg);
        pSection.appendChild(picDiv);
        // the text div comes second
        let textDiv = document.createElement('div');
        textDiv.className = "project-text"
        let pName = document.createElement('h2');
        pName.textContent = project.title;
        textDiv.appendChild(pName);
        project.text.forEach(paragraph => {
            let para = document.createElement('p');
            para.innerHTML = paragraph;
            textDiv.appendChild(para);
        });
        pSection.appendChild(textDiv);
        pSection.id = project.id;
        projectBody.appendChild(pSection);
        pCount += 1;
        // put a link to this section at the top of the project list
        let pLink = document.createElement('li');
        let quickLink = document.createElement('a');
        quickLink.textContent = project.title;
        quickLink.href = `#${project.id}`;
        pLink.appendChild(quickLink);
        projectLinks.appendChild(pLink);
    });
});