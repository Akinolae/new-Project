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
    static createNewParagraphElement(newElement) {
        var p_tag = document.createElement("p");
        p_tag.textContent = newElement;
        return p_tag;
    }
    static createNewLinkElement(linkElement) {
        var a_tag = document.createElement("a");
        var link = document.createTextNode(linkElement);
        a_tag.appendChild(link);
        return a_tag;
    }
    ukNews(e) {
        const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        const myUrl = new Request(url);
        fetch(myUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data.articles[0])
                for (const string in data.articles) {
                    this.myTitle.append(NewsData.createNewLinkElement(data.articles[string].url));
                    this.myTitle.append(NewsData.createNewParagraphElement(data.articles[string].description));
                    console.log(data.articles[string].description);
                    console.log(data.articles[string].url);
                }
            })
    }
    naijaNews(e) {
        const url = 'https://newsapi.org/v2/top-headlines?' + 'country=ng&' + 'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        const myUrl = new Request(url);
        fetch(myUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data.articles[0])
                for (const string in data.articles) {
                    this.myTitle.append(NewsData.createNewLinkElement(data.articles[string].url));
                    this.myTitle.append(NewsData.createNewParagraphElement(data.articles[string].description));
                    console.log(data.articles[string].description);
                    console.log(data.articles[string].url);
                }
            })
    }
    usNews(e) {
        const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=797bc6132d9d4515a4653fd5350e6ce7';
        const myUrl = new Request(url);
        fetch(myUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data.articles[0])
                for (const string in data.articles) {
                    this.myTitle.append(NewsData.createNewLinkElement(data.articles[string].url));
                    this.myTitle.append(NewsData.createNewParagraphElement(data.articles[string].description));
                    console.log(data.articles[string].description);
                    console.log(data.articles[string].url);
                }
            })
    }
}

const new_news_data = new NewsData(myTitle);
new_news_data.naijaNews();
// submit.addEventListener('', new_news_data.ukNews());

const navigation = {
    version: document.getElementById('version')
}

const countries = {
    nigeria: document.getElementById('Nigeria'),
    uk: document.getElementById('UK'),
    us: document.getElementById('US')
}