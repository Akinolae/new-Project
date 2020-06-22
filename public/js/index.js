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
const validate = document.querySelector(".validate");

// Date Display element. 
const dateDisplay = document.getElementById("date");
const year = document.getElementById("year");

// weather search google search && weather search!
const search_link = document.getElementById("search_link");
const search_input = document.getElementById("search_input");
const search_city = document.getElementById("search_city");
const search_btn = document.getElementById("search_btn");

// uptimized search history!

//controls the navigations *Search and weatherSearch respectively* 
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
  if (search_input.value.trim() === "") {
    errorMsg.style.display = 'none';
    loadingText.style.display = "none";
    validate.style.opacity = "1";
    setTimeout(() => {
      validate.style.opacity = '0';
    }, 1100)
  } else {
    const search_value = search_input.value;
    const url = "https://www.google.com/search?q=" + search_value;
    window.location.replace(url);
  }
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

function changeBorder(e) {
  if (search_input.value.trim() === "") {
    errorMsg.style.display = "block";

  }
}