// this is the new section of the website
// its going to follow the eventlisteners to dynamically display the news of various countries


        function params (){
            return  nigeria = document.getElementById('Nigeria'),
                    uk = document.getElementById('UK'),
                    us = document.getElementById('US');
        }
  params();

//   getting HTML parameters that will be used to display various informations/ news;

            function htmlElements(){
                return myAuthor = document.getElementById('author'),
                        myTitle = document.getElementById('title'),
                        myDescription = document.getElementById('description'),
                        mainContainer = document.querySelector('.mainContainer');

                    // getting the elements in the mainContainer;

            }
            
            htmlElements();
            // Add Event listeners to the buttons

            // added a timer that displays the maincontainer  when the timers elapse.


        let author, title, description = [];
        uk.addEventListener('click', ukNews);
        function ukNews (e){
            const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' +'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
            const myUrl = new Request(url);
                fetch(myUrl)
                    .then(response => response.json())
                    .then(data => 
                        {   author = data.articles[1].author;
                            title = data.articles[1].title;
                            description = data.articles[1].description;
                            myAuthor.textContent = author;
                            myTitle.textContent = title;
                            myDescription.textContent = description;}
                    )}
        nigeria.addEventListener('click', naijaNews);
        function naijaNews(e){
            const url = 'https://newsapi.org/v2/top-headlines?' + 'country=ng&' +'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
            const myUrl = new Request(url);
            fetch(myUrl)
                    .then(response => response.json())
                    .then(data =>  {
                        author = data.articles[1].author;
                        tilte = data.articles[1].title;
                        description = data.articles[1].description;
                        myAuthor.textContent = author;
                        myTitle.textContent = title;
                        myDescription.textContent = description;
                    })
        }
        us.addEventListener('click', usNews);
        function usNews(e){
            const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' +'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
            const myUrl = new Request(url);
            fetch(myUrl)
                    .then(response => response.json())
                    .then(data =>  console.log(data))
        }


// const date =  document.getElementById('date');
// date.textContent = 'hellow world';
// const btn = document.getElementById('btn');
// btn.addEventListener('click', displayNews);
    // function displayUser (){
    //     fetch('http://localhost:3000/user')
    //     .then(res => res.json())
    //     .then(data =>  username = data.username,
    //                     email = data.email)
    // }
    // displayUser();

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

// const url = 'https://newsapi.org/v2/top-headlines?' + 'country=ng&' +'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
// const myUrl = new Request(url);
// function displayNews (){
//     const news3 = document.getElementById('3'),
//     news2 = document.getElementById('2');

// }
// console.log(data);