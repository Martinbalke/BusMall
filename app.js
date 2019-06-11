//Global Variables
const div_images = document.getElementById('images');
const input_voteButton = document.getElementById('voteButton');
const allImages = [];
let votes = 25;
const recentlySeen =[];

//Object Constructor
function ImageGenerator(product, name, type){
  this.product = product;
  this.src = `./img/${name}.${type}`;
  this.title = name;
  this.alt = name;
  this.votes = 0;
  this.views = 0;
  // this.percentage = parseInt(Math.floor(this.views /this.votes) * 100);

  allImages.push(this);
}


//Object Instances
const bag = new ImageGenerator('StarWars Bag','bag', 'jpg');
const banana = new ImageGenerator('Banana Slicer', 'banana', 'jpg');
const bathroom = new ImageGenerator('Bathroom Ipad Stand','bathroom', 'jpg');
const boots = new ImageGenerator('Open Toe Rainboots', 'boots', 'jpg');
const breakfast = new ImageGenerator('Breakfast Cooker','breakfast', 'jpg');
const bubblegum = new ImageGenerator('Meatball Bubblegum','bubblegum', 'jpg');
const chair = new ImageGenerator('Art Deco Chair', 'chair', 'jpg');
const cthulhu = new ImageGenerator('Cthulhu Action Figure','cthulhu', 'jpg');
const dogDuck = new ImageGenerator('Dog Duck Bill','dog-duck', 'jpg');
const dragon = new ImageGenerator('Canned Dragon Meat','dragon', 'jpg');
const pen = new ImageGenerator('Pen Utensils','pen', 'jpg');
const petSweep = new ImageGenerator('Pet Sweeper','pet-sweep', 'jpg');
const scissors = new ImageGenerator('Pizza Scissors','scissors', 'jpg');
const shark = new ImageGenerator('Shark Blanket','shark', 'jpg');
const sweep = new ImageGenerator('Baby Sweeper','sweep', 'png');
const tauntaun = new ImageGenerator('Star Wars Blanket','tauntaun', 'jpg');
const unicorn = new ImageGenerator('Unicorn Meat','unicorn', 'jpg');
const usb = new ImageGenerator('Monster USB','usb', 'gif');

//Event handlers
function votingMachine(event){
  renderImages();
  let target = event.target.alt;
  for(let i = 0; i < allImages.length; i++){
    if (target === allImages[i].alt){
      allImages[i].votes++;
    }
  }
  votes--;
  if(votes === 0){
    renderList();
    div_images.removeEventListener('click', votingMachine);
  }
}

//functions
function renderList(){
  const ul_Results = document.createElement('ul');
  div_images.appendChild(ul_Results);

  for(let i = 0; i < allImages.length; i++){  
    const li_Image = document.createElement('li');
    li_Image.textContent = `${allImages[i].product} got ${allImages[i].votes} votes.`;
    ul_Results.appendChild(li_Image);
  }
}

function renderImages(){
  div_images.innerHTML = '';
  const images = [];
  for(let i = 0; i < 3; i++){ 
    let currentImage = randomImage();
    images[i] = document.createElement('img');
    images[i].src = currentImage.src;
    images[i].alt = currentImage.alt;
    images[i].title = currentImage.title;
    div_images.appendChild(images[i]);
  }


}
//Helper functions
function randomImage(){
  let random = randNum(0, allImages.length -1);
  let image = allImages[random];
  while(recentlySeen.includes(image)){
    random = randNum(0, allImages.length -1);
    image = allImages[random];
  }
  recentlySeen.push(image);
  image.views++;
  if(recentlySeen.length > 6){
    recentlySeen.splice(0,3);
  }
  return image;
}

function randNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Event listeners
div_images.addEventListener('click', votingMachine);

//Function Calls
renderImages();
