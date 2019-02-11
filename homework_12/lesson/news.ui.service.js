class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticle(article) {
        // console.time();
        const template = NewsUI.generateTemplate(article);
        // console.timeEnd();
        //this.newsContainer.insertAdjacentHTML("afterbegin", template);

        this.newsContainer.appendChild(template);
    }


    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * 
     * @param {Object} article 
     */
    // static generateArticleTemplate(article) {
    //     return `
    //     <div class="col s12 m6">
    //         <div class="card">
    //             <div class="card-image">
    //                 <img src="${article.urlToImage}">
    //             </div>
    //             <div class="card-content">
    //                 <span class="card-title">${article.title || ''}</span>

    //                 <p>${article.description || ''}</p>
    //             </div>
    //             <div class="card-action">
    //                 <a href="${article.url}" target="_blank">Read more</a>
    //             </div>
    //         </div>
    //     </div>
    //     `;
    // }
    
     /**
     * 
     * @param {Object} article 
     */
    static generateTemplate(article) {

        let newDiv = document.createElement('DIV');
        newDiv.classList.add('col');
        newDiv.classList.add('s12');
        newDiv.classList.add('m6');

        let cardDiv = document.createElement('DIV');
        cardDiv.classList.add('card');
        newDiv.appendChild(cardDiv);


        let imgDiv = document.createElement('DIV');
        let contentDiv = document.createElement('DIV');
        let actionDiv = document.createElement('DIV');

        imgDiv.classList.add('card-image');
        let imgSrc = document.createElement('IMG');
        imgSrc.setAttribute('src', `${article.urlToImage}`);
        imgDiv.appendChild(imgSrc);

        contentDiv.classList.add('card-content');
        let spanContent = document.createElement('SPAN');
        spanContent.classList.add('card-content');
        spanContent.textContent = `${article.title || ''}`;
        contentDiv.appendChild(spanContent);

        let pContent = document.createElement('P');
        pContent.textContent = `${article.description || ''}`;
        contentDiv.appendChild(pContent);

        actionDiv.classList.add('card-action');
        let link = document.createElement('A');
        link.setAttribute('href', `${article.url}`);
        link.setAttribute('target', '_blank');
        link.textContent = 'Read more';
        actionDiv.appendChild(link);

        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(contentDiv);
        cardDiv.appendChild(actionDiv);

        return newDiv;
    }


}
