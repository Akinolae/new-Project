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


setInterval(()=>{
    countTime--
    countDown.style.color = 'white';
    countDown.textContent = countTime;
    if(countTime == 0){
        countDown.textContent ='your time is up';
        setTimeout(() =>{
            countDown.style.display = 'none'
        }, 900)        
    }
    if(countTime <= 5 ){
        countDown.style.color = 'red';
    
    }
}, 1000)

    setTimeout(() => {
        popOver.style.display = 'block';
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