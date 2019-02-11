const newsService = new NewsService();
const uiService = new NewsUI();
const http = new HttpClient();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchInput = form['search'];

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => drawNews(response));
}


countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
searchInput.addEventListener('keypress', searchKeyPressed);

function searchKeyPressed(event) {
    let searchValue = event.target.value;

    if(searchValue.length < 3) return;

    newsService.getTopSearchHeadLineNews(searchValue, (response) => drawNews(response));
}

function drawNews(response) {
    const { totalResults, articles } = response;

    if(articles.length === 0)// TODO articles not found
    // console.time();
    uiService.clearContainer();
    // console.timeEnd();

    // console.time();
    articles.forEach((article) => uiService.addArticle(article));
    // console.timeEnd();
}
