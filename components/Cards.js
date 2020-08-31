// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( (working) => {
        const articlesContainer = document.querySelector('.cards-container')
        for (const key in working.data.articles) {
                const topicArticles = working.data.articles[key];
                topicArticles.forEach( (article) => {
                    console.log(article);
                    const articleElement = createArticle(article);
                    articlesContainer.appendChild(articleElement)
                });
            }
        })
    .catch(error => {
        console.log(error); 
}); 


const createArticle = function (object) {

    //create new elements

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    //adding classes 

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
  
    //adding text content
    
    headline.textContent = object.headline;
    authorName.textContent = `By ${object.authorName}`;

    //setting attribute

    image.setAttribute('src', object.authorPhoto);

    //creating structure
  
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(authorName);

    //event listener

    card.addEventListener('click', () => {
        console.log(object.headline);
    });

    return card;
};