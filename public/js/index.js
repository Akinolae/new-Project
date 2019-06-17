const text = document.getElementById('text');
const submit = document.getElementById('submit');
const loadingText =  document.getElementById('load');
const updateCity = document.getElementById('city');
const loadingBox = document.getElementById('loading');
const cityText =  document.getElementById('description')
const tempText = document.getElementById('temp');
const timeUpdate = document.getElementById('time');
const errorMsg = document.getElementById('error');
const btn2 = document.getElementById('closeBtn');
const popOver = document.getElementById('popOver');

    setTimeout(() => {
        popOver.style.display = 'block';
        popOver.classList.add('popOver');

    }, 4000)

btn2.addEventListener('click', closePopOver);
function closePopOver (e){
    popOver.style.display = 'none';
}
text.addEventListener('keyup', changeBorder)

function changeBorder(e){
    text.classList.add('changeBorder');
    if(text.value === ''){
        text.classList.remove('changeBorder');
        errorMsg.style.display = 'none';
        loadingBox.style.display ='none';
    }
}

const date = new Date();
const hours = date.getHours();
let timeOfDay;

if(hours < 12){
    timeUpdate.style.color = '#CAE132';
    timeOfDay = "Hello, Good morning";
} else if(hours >= 12 && hours < 17){
    timeUpdate.style.color = '#1A6832';
    timeOfDay = "Hello, Good afternoon";
} else {
    timeUpdate.style.color = '#fff';
    timeOfDay = "Hello, Good evening ";
}

timeUpdate.textContent = timeOfDay;