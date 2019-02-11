class NewsService {
     /**
      * 
      * @param {Function} callback
      * @param {String} category 
      * @param {String} country 
      */
    getTopHeadlinesNews(category = ENV.category, country = ENV.country, callback) {
        http.get(`${ENV.apiUrl}/top-headlines?country=${country}&category=${category}`, callback);
    }

    /**
     * 
     * @param {Function} callback 
     * @param {String} searchParameter 
     */
    getTopSearchHeadLineNews(searchParameter, callback) {
        http.get(`${ENV.apiUrl}/everything?q=${searchParameter}`, callback);
    }
}
