/*Hamburguer Button*/

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };

/*pancakes*/
let date = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let currentMonth = months[date.getMonth()]
let currentDay = days[date.getDay()]
let currentYear = date.getFullYear()


document.getElementById("currentDate").innerHTML = date = `${currentDay}, ${currentMonth} ${currentYear}`;

const pancakes = document.getElementById("pancakes")

if (currentDay === "Friday") {
    pancakes.className = "pancakes-show"

} else {
    pancakes.className = "pancakes-hidden"
}

/*Windchill*/

var temp = document.getElementById("temp");
var t = temp.textContent;
var windSpeed = document.getElementById("windspeed");
var s = windSpeed.textContent;
document.getElementById
if (t <= 50 && s > 3.0) {
    var f = (0.0817 * (3.71 * (Math.pow(s, 0.5)) +
        5.81 - 0.25 * s) * (t - 91.4) + 91.4);;
    var n = f.toFixed(2);
    document.getElementById("windChill").innerHTML = n;
    console.log(n);
} else {
    document.getElementById("windChill").innerHTML = "N/A";
}
console.log(t);

/*Cards*/

let data = {
    "towns": [{
            name: "Soda Springs",
            photo: "sodasprings.jpg",
            motto: "Historic Oregon Trail Oasis. The Soda is on Us.",
            yearFounded: 1858,
            currentPopulation: 2985,
            averageRainfall: 15.75,
            events: [
                "February 29: Geyser Song Day",
                "May 1-6: Days of May Celebration",
                "October 15-16: Octoberfest"
            ]
        },

        {
            name: "Fish Haven",
            photo: "fishhaven.jpg",
            motto: "This is Fish Heaven.",
            yearFounded: 1864,
            currentPopulation: 501,
            averageRainfall: 14.20,
            events: [
                "April 1: How Big Was That Fish Day",
                "May 15-30: Rush the Creek Days",
                "July 24: Bear Lake Blunder Run",
                "December 12: Light the Tree"
            ]
        },


        {

            name: "Preston",
            photo: "preston.jpg",
            motto: "Home of Napoleon Dynamite.",
            yearFounded: 1866,
            currentPopulation: 5204,
            averageRainfall: 16.65,
            events: [
                "March 29: Work Creek Revival",
                "July 8-12: Napoleon Dynamite Festival",
                "November 2-4: Freedom Days"
            ]
        }
    ]
}
console.log(data.towns);
displayData(data)

function displayData(data) {
    const datacities = document.getElementById('cities');
    data.towns.forEach((element) => {
        datacities.innerHTML += `
       <div class = "cityinfo">
       <h1>${element.name}</h1>
       <h2>${element.motto}</h2>
       <p>Founded in ${element.yearFounded}</p>
       <p>Population:${element.currentPopulation}</p>
       <p>Average rainfall in inches:${element.averageRainfall}</p>
       <img class="presimg" src="../lesson-9/images/${element.photo}" alt="Photo of ${element.name}">
   </div>`
    });
}