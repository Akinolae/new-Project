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
const search_btn = document.getElementById("search_btn");


//controls the navigation *Search and weatherSearch respectively* 
search_link.addEventListener('click', () => {
  search_btn.style.display = 'block';
  text.style.display = 'none';
  submit.style.display = 'none';
  search_input.style.display = 'block';
})

search_city.addEventListener('click', () => {
  text.style.display = 'block';
  search_input.style.display = 'none';
  submit.style.display = 'block';
  search_btn.style.display = 'none';
})


// google search is implemented here!

search_btn.addEventListener('click', (e) => {
  e.preventDefault();
  const search_value = search_input.value;
  const url = "https://www.google.com/search?q=" + search_value;
  window.location.replace(url);
})
//The control ends here! 
// =====================


// instantiation of the date that effectively

// Getting the Date class so as to display the date accurately ... *

const date = new Date();
const hours = date.getHours();
year.innerText = date.getFullYear();
let timeOfDay;


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

function closePopOver(e) {
  popOver.style.display = "none";
}
text.addEventListener("keyup", changeBorder);

function changeBorder(e) {
  text.classList.add("changeBorder");
  if (text.value === "" && search_input.value === "") {
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
// const newUser = {
//   "age": 24,
//   "country": "Nigeria",
//   "school": "Unilorin",
//   "name": "Alfred Disick"
// }
// for (const string in newUser) {
//   console.log(string);
// }