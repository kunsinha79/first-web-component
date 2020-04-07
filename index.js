
import './news-article.js'
const apiKey = '2cae884b395e46d1a8a473404e184c31';
const topHeadlinesUrl =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;


window.addEventListener('load', () => {
    getNews();
});

async function getNews() {
    const res = await fetch(topHeadlinesUrl);
    const json = await res.json();

    const main = document.querySelector('main');
    json.articles.forEach(article => {
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });
}