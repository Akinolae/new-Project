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
const dateDisplay = document.getElementById('date');



// fetching data from the database to be displayed on the ui;
fetch('http://localhost:3000/user')
.then(res => res.json())
.then(data =>   console.log(data))
// instantiation of the date that effectively 
    // returns a strings that greets the user whenever he/she logs in;

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours < 12){
        timeUpdate.style.color = '#CAE132';
        timeOfDay = `Hello , Good morning`;
    } else if(hours >= 12 && hours < 17){
        timeUpdate.style.color = '#1A6832';
        timeOfDay = "Hello, Good afternoon";
        document.body.style.background = '#F52A47';
    } else {
        timeUpdate.style.color = '#fff';
        timeOfDay = `Hello  , Good evening`;
        document.body.style.background = "#0C0C0B";
    }

    timeUpdate.textContent = timeOfDay;







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