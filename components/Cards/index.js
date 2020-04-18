// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardComponent = (obj) => {

    // create elements
    const card = document.createElement('div');
    card.classList.add('card');

    // headline
    const headline = document.createElement('div');
    const setHeadline = card.appendChild(headline);
    const headlineClass = headline.classList.add('headline');
    headline.textContent = `${obj.headline}`;

    // author
    const author = document.createElement('div');
    const setAuthor = card.appendChild(author);
    const authorClass = author.classList.add('author');

    // image container
    const imageContainer = document.createElement('div');
    const setImageContainer = author.appendChild(imageContainer);

    // author image
    const authorImage = document.createElement('img');
    const setAuthorImage = imageContainer.appendChild(authorImage);
    const authorImageClass = imageContainer.classList.add('img-container');
    authorImage.src = `${obj.authorPhoto}`;

    // author name
    const authorName = document.createElement('span');
    const setAuthorName = author.appendChild(authorName);
    authorName.textContent = `${obj.authorName}`;

    // return 
    return card;
};


const Cards = () => {
    const cardsContainer = document.querySelector('div.cards-container');
    axios
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then( res => {
            // console.log(res.data.articles)
            res.data.articles.javascript.forEach(element => {
                cardsContainer.appendChild(cardComponent(element));
                // console.log(res.data.articles.bootstrap.element)
            });
            res.data.articles.bootstrap.forEach(element => {
                cardsContainer.appendChild(cardComponent(element));
                // console.log(res.data.articles.bootstrap.element)
            });
            res.data.articles.technology.forEach(element => {
                cardsContainer.appendChild(cardComponent(element));
                // console.log(res.data.articles.bootstrap.element)
            });
            res.data.articles.jquery.forEach(element => {
                cardsContainer.appendChild(cardComponent(element));
                // console.log(res.data.articles.bootstrap.element)
            });
            res.data.articles.node.forEach(element => {
                cardsContainer.appendChild(cardComponent(element));
                // console.log(res.data.articles.bootstrap.element)
            });
        })
        .catch(err => console.error(err));
};

Cards();