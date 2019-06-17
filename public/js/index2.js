const params = () =>{
    const news1 = document.getElementById('1');
    const news2 = document.getElementById('2');
    const news3 = document.getElementById('3');
    const news4 = document.getElementById('4');
    const news5 = document.getElementById('5');
    const news6 = document.getElementById('6');
    const news7 = document.getElementById('7');
    const news8 = document.getElementById('8');

    news8.textContent = data;
}
const news = document.getElementById('news');
console.log(news);
setInterval(()=>{
    news.style.display = 'block';
}, 4000)



params();

const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' +'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
const myUrl = new Request(url);
fetch(myUrl)
    .then(response => response.json())
    .then(data => console.log(data))