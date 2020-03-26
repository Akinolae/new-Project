// this is the new section of the website
// its going to dynamically display the news of various countries
//   getting HTML parameters that will be used to display various informations/ news;

const myTitle = document.getElementById('title');
const htmlElements = {
    myAuthor: document.getElementById('author'),
    myDescription: document.getElementById('description'),
    mainContainer: document.querySelector('.mainContainer'),
    newsElement: document.getElementById('news'),
    text: document.getElementById('text')
    // getting the elements in the mainContainer;
}

// This particular section handles all the logic, from fetching of the data from newsapi.org;
// To displaying them for the client to see.
// It is the most important part of the entire NEWS section!


class NewsData {
    constructor(news_data) {
        this.myTitle = news_data;
    }
    static createNewElement(newElement) {
        var p_tag = document.createElement("p");
        p_tag.textContent = newElement;
        return p_tag;
    }
    ukNews(e) {
        const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        const myUrl = new Request(url);
        // fetch(myUrl)
        //     .then(response => response.json())
        //     .then(data => {
        const newUser = {
            "age": 24,
            "country": "Nigeria",
            "school": "Unilorin",
            "name": "Alfred Disick",
            "wife": "Andreska  Radwanska",
            "course": "Statistic"
        }
    
        for (const string in newUser) {
            this.myTitle.append(NewsData.createNewElement(newUser[string]));
        }

        // console.log(data.articles);
        // for (const result of data.articles) {
        //     // console.log(result);
        //     myTitle.innerText = result;
        //     this.myTitle.append(NewsData.createNewElement(r));
        // }
        // })
    }
    naijaNews(e) {
        const url = 'https://newsapi.org/v2/top-headlines?' + 'country=ng&' + 'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        const myUrl = new Request(url);
        fetch(myUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                for (const naija of data.articles) {
                    console.log(naija);
                }
            })
    }
    usNews(e) {
        const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        const myUrl = new Request(url);
        fetch(myUrl)
            .then(response => response.json())
            .then(data => console.log(data))
    }
}

const new_news_data = new NewsData(myTitle);
new_news_data.ukNews();
// submit.addEventListener('', new_news_data.ukNews());

const navigation = {
    version: document.getElementById('version')
}

const countries = {
    nigeria: document.getElementById('Nigeria'),
    uk: document.getElementById('UK'),
    us: document.getElementById('US')
}