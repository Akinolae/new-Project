const text = document.getElementById("text");
const submit = document.getElementById("submit");
const loadingText = document.getElementById("load");
const updateCity = document.getElementById("city");
const loadingBox = document.getElementById("loading");
const cityText = document.getElementById("description");
const tempText = document.getElementById("temp");
const timeUpdate = document.getElementById("time");
const theDate = document.getElementById("date");
const errorMsg = document.getElementById("error");
const btn2 = document.getElementById("closeBtn");
const validate = document.querySelector(".validate");
const dateDisplay = document.getElementById("date");
const year = document.getElementById("year");
const search_link = document.getElementById("search_link");
const search_input = document.getElementById("search_input");
const search_city = document.getElementById("search_city");

search_link.addEventListener('click', () => {
  text.style.display = 'none';
  search_input.style.display = 'block';
  search_city.innerText = 'search weather'

})



// instantiation of the date that effectively

const date = new Date();
const hours = date.getHours();
let timeOfDay;

year.innerText = date.getFullYear();
// Displays the current date for the users to see!
const dateValue = date.toUTCString();
theDate.style.color = "#ffff";
theDate.style.textAlign = "center";
theDate.innerText = dateValue;

if (hours < 12) {
  timeUpdate.style.color = "#FFFF";
  timeOfDay = `Good morning`;
} else if (hours >= 12 && hours < 17) {
  timeUpdate.style.color = "#FFFF";
  timeOfDay = `Good afternoon`;
  document.body.style.background = "#F52A47";
} else {
  timeUpdate.style.color = "#FFFF";
  timeOfDay = `Good evening`;
  document.body.style.background = "#807B7B";
}

timeUpdate.textContent = timeOfDay;

// setTimeout(() => {
//     popOver.style.display = 'block';
// }, 4000)

// btn2.addEventListener('click', closePopOver);
function closePopOver(e) {
  popOver.style.display = "none";
}
text.addEventListener("keyup", changeBorder);

function changeBorder(e) {
  text.classList.add("changeBorder");
  if (text.value === "") {
    text.classList.remove("changeBorder");
    errorMsg.style.opacity = "0";
    loadingBox.style.display = "none";
  }
}

// document.getElementById('btn').addEventListener('click', getData);

// function getData (){
//             fetch('http://localhost:3000/user')
//             .then(res => res.json())
//             .then(data =>{
//                 res.send(data)
//                 console.log(data)
//               document.getElementById('display').textContent = data;
//             })
// }