

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const getData = () => {
    const getContainer = document.querySelector('div.topics');
    

    axios
        .get('https://lambda-times-backend.herokuapp.com/topics')
        .then( res => {
            res.data.topics.forEach(element => {
                getContainer.appendChild(tabComponent(element));
            });        
        })
        .catch(err => `${err} occured while trying to retrieve the data`)
}

const tabComponent = (content) => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = content;
    return tab;
};
getData();