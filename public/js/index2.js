// this is the new section of the website
// its going to dynamically display the news of various countries
//   getting HTML parameters that will be used to display various informations/ news;
const key = require('./api');
console.log(key.newsApi());
const newsApiKey = "apiKey=797bc6132d9d4515a4653fd5350e6ce7";
const myTitle = document.getElementById("title");
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
        a_tag.href = linkElement;
        var link = document.createTextNode(linkElement);
        a_tag.appendChild(link);
        return a_tag;
    }
    static createAuthorElement(text) {
        var p = document.createElement("p");
        p.textContent = text;
        return p;
    }
    // This method fetches specific news data from the UK !
    static dateElment(newsDate) {
        var h6 = document.createElement("h6");
        h6.textContent = newsDate;
        h6.style.color = "red";
        return h6;
    }

    static imageElement(imgLink) {
        const image = document.createElement("img");
        image.setAttribute("src", imgLink);
        image.setAttribute("height", "350px");
        image.setAttribute("width", "400px");
        image.style.margin = "20px auto";
        return image;
    }
    ukNews(e) {
        const url =
            "https://newsapi.org/v2/top-headlines?" + "country=us&" + newsApiKey;
        const myUrl = new Request(url);
        fetch(myUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.articles);

                for (const string in data.articles) {
                    this.myTitle.append(
                        NewsData.createNewLinkElement(data.articles[string].url)
                    );
                    this.myTitle.append(
                        NewsData.imageElement(data.articles[string].urlToImage)
                    );
                    this.myTitle.append(
                        NewsData.createNewParagraphElement(
                            data.articles[string].description
                        )
                    );
                    this.myTitle.append(
                        NewsData.createAuthorElement(data.articles[string].author)
                    );
                    this.myTitle.append(
                        NewsData.dateElment(data.articles[string].publishedAt)
                    );
                }
            });
    }

    // This method fetches specific news data for Nigeria!

    naijaNews(e) {
        const url =
            "https://newsapi.org/v2/top-headlines?" + "country=ng&" + newsApiKey;
        const myUrl = new Request(url);
        fetch(myUrl)
            .then((response) => response.json())
            .then((data) => {
                for (const string in data.articles) {
                    this.myTitle.append(
                        NewsData.createNewLinkElement(data.articles[string].url)
                    );
                    this.myTitle.append(
                        NewsData.createNewParagraphElement(
                            data.articles[string].description
                        )
                    );
                    this.myTitle.append(
                        NewsData.createAuthorElement(data.articles[string].author)
                    );
                }
            });
    }

    // This method fetches specific news data for the United States of America !

    usNews(e) {
        const url =
            "https://newsapi.org/v2/top-headlines?" + "country=us&" + newsApiKey;
        const myUrl = new Request(url);
        fetch(myUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.articles[0]);

                for (const string in data.articles) {
                    this.myTitle.append(
                        NewsData.createNewLinkElement(data.articles[string].url)
                    );
                    this.myTitle.append(
                        NewsData.createNewParagraphElement(
                            data.articles[string].description
                        )
                    );
                    this.myTitle.append(
                        NewsData.createAuthorElement(data.articles[string].author)
                    );
                    console.log(data.articles[string].description);
                    console.log(data.articles[string].url);
                }
            });
    }
}

const new_news_data = new NewsData(myTitle);

//Html elements of each country is used to display country specific information!
// Not too much is happening here actually!. But, you get the logic? *winks*

const countries = {
    nigeria: document.getElementById("Nigeria"),
    uk: document.getElementById("UK"),
    us: document.getElementById("US"),
};
countries.nigeria.addEventListener("click", () => {
    new_news_data.naijaNews();
    console.log("I just clicked Nigeria! ");
});
countries.uk.addEventListener("click", () => {
    new_news_data.ukNews();
    console.log("I just clicked uk! ");
});
countries.us.addEventListener("click", () => {
    new_news_data.usNews();
    console.log("I just clicked us!");
});