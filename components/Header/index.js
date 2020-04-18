// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// create new elements
const newElement = (elementName) => {
    return document.createElement(`${elementName}`);
};

// Add a class to an element
const addClass = (element, className) => {
    return element.classList = `${className}`;
};

// grab an element using querySelector
const queryElement = (element) => {
    return document.querySelector(`${element}`);
};

// append a child element to a parent element
const appendChildElement = (parentElement, childElement) => {
    return parentElement.appendChild(childElement);
};

// add text content to a element
const addContent = (element, content) => {
    return element.textContent = content;
}

function Header() {

    // Create elements
    const divContainer = newElement('div');
    const date = newElement('span');
    const heading = newElement('h1');
    const tempurature = newElement('span');

    // grab elements
    const headerContainer = queryElement('div.header-container');

    // Add classes to elements
    const setContainerClass = addClass(divContainer, 'header');
    const setDateClass = addClass(date, 'date');
    const setTempuratureClass = addClass(tempurature, 'temp');

    // Add structure to the component
    const addContainer = appendChildElement(headerContainer, divContainer);
    const addDate = appendChildElement(divContainer, date);
    const addHeading = appendChildElement(divContainer, heading);
    const addTempurature = appendChildElement(divContainer, tempurature);
    
    // add content to elements
    addContent(date, 'MARCH 28, 2019');
    addContent(heading, 'LAMBDA TIMES');
    addContent(tempurature, '98°');
    
}

Header();
