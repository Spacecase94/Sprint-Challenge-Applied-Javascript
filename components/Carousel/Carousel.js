

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/




const Carousel = () => {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');;
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightButton = document.createElement('div');

  const carouselContainer = document.querySelector('div.carousel-container');
  carouselContainer.style.display = 'flex';
  carouselContainer.style.flexDirection = 'row';

  carouselContainer.style.justifyContent = 'space-around';
  carouselContainer.style.marginLeft = '25vh';

  mountains.style.width = '60vh';
  computer.style.width = '60vh';
  trees.style.width = '60vh';
  turntable.style.width = '60vh';

  carouselContainer.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(mountains)
  // carousel.appendChild(computer)
  // carousel.appendChild(trees)
  // carousel.appendChild(turntable)
  carousel.appendChild(rightButton)

  leftButton.classList = 'left-button';
  mountains.src = "../assets/carousel/mountains.jpeg";
  computer.src = "../assets/carousel/computer.jpeg";
  trees.src = "../assets/carousel/trees.jpeg";
  turntable.src = "../assets/carousel/turntable.jpeg";

  leftButton.textContent = '<';
  rightButton.textContent = '>';


  

  leftButton.addEventListener('click', (event) => {
    const carouselArray = [trees, turntable];
    for(let i = 0; i < carouselArray.length; i++) {
      carousel.appendChild(carouselArray[i]);
    };
  });

  rightButton.addEventListener('click', (event) => {
    const carouselArray = [ trees ];
    for(let i = 0; i < carouselArray.length; i++) {
      carousel.appendChild(carouselArray[i]);
    };
  });
};

Carousel();