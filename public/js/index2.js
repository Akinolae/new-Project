// const date =  document.getElementById('date');
// date.textContent = 'hellow world';
const btn = document.getElementById('btn');
btn.addEventListener('click', displayNews);
    

// const params = () =>{
//     const news1 = document.getElementById('1');


//     const news4 = document.getElementById('4');
//     const news5 = document.getElementById('5');
//     const news6 = document.getElementById('6');
//     const news7 = document.getElementById('7');
//     const news8 = document.getElementById('8');
//     news8.textContent = data;
// }

// news3.textContent = data.articles[0].description,
//                   news2.textContent = data.articles[1].description


// params();

const url = 'https://newsapi.org/v2/top-headlines?' + 'country=ng&' +'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
const myUrl = new Request(url);
function displayNews (){
    const news3 = document.getElementById('3'),
    news2 = document.getElementById('2');
    fetch(myUrl)
    .then(response => response.json())
    .then(data =>  data)
}
console.log(data);