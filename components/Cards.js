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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articleData = response.data.articles; 
        Object.values(articleData).forEach((articles) => {
            articles.forEach((article) => {
                cardContainer.appendChild(articleMaker(article));
            })
        })

    })
    .catch(error => {
        console.log('there' + error); 
}); 

const cardContainer = document.querySelector('.cards-container'); 


function articleMaker(object){
    
    //Creating elements

    const card = document.createElement('div'); 
    const headline = document.createElement('div');
    const author = document.createElement('div'); 
    const authorDiv = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    //Adding Classes

    card.classList.add('card'); 
    headline.classList.add('headline'); 
    author.classList.add('author');
    authorDiv.classList.add('img-container');

    image.setAttribute("src", object.authorPhoto);
    
    //Text Content

    headline.textContent = object.headline;
    authorName.textContent = object.authorName;

    // Setting up page

    card.appendChild(headline); 
    card.appendChild(author); 
    // image.src = articleObj.authorPhoto;
    authorDiv.appendChild(image);
    author.appendChild(authorDiv);  
    authorDiv.appendChild(authorName); 

    // event listener 
    card.addEventListener('click', () => {
        console.log(headline.textContent); 
    });

    // return
    return card; 
} 