//Global Variables
const div_images = document.getElementById('images');
const input_voteButton = document.getElementById('voteButton');
const allImages = [];
let votes = 25;
const recentlySeen =[];

//Object Constructor
//New object for each img with image name, and .type
//Needs a views and votes property for later data analysis
function ImageGenerator(name, type){
  this.src = `./img/${name}.${type}`;
  this.title = name;
  this.alt = name;
  this.votes = 0;
  this.views = 0;
  this.votePercent = parseInt(this.votes / this.views);
  allImages.push(this);
}

//Object Instances
const bag = new ImageGenerator('bag', 'jpg');
const banana = new ImageGenerator('banana', 'jpg');
const bathroom = new ImageGenerator('bathroom', 'jpg');
const boots = new ImageGenerator('boots', 'jpg');
const breakfast = new ImageGenerator('breakfast', 'jpg');
const bubblegum = new ImageGenerator('bubblegum', 'jpg');
const chair = new ImageGenerator('chair', 'jpg');
const cthulhu = new ImageGenerator('cthulhu', 'jpg');
const dogDuck = new ImageGenerator('dog-duck', 'jpg');
const dragon = new ImageGenerator('dragon', 'jpg');
const pen = new ImageGenerator('pen', 'jpg');
const petSweep = new ImageGenerator('pet-sweep', 'jpg');
const scissors = new ImageGenerator('scissors', 'jpg');
const shark = new ImageGenerator('shark', 'jpg');
const sweep = new ImageGenerator('sweep', 'png');
const tauntaun = new ImageGenerator('tauntaun', 'jpg');
const unicorn = new ImageGenerator('unicorn', 'jpg');
const usb = new ImageGenerator('usb', 'gif');

//Event handlers
//25 votes
//Needs to generate a new image every time the user votes
//Render those images to the dom (using a function?)
function votingMachine(event){
  renderImages();
  let target = event.target.alt;
  console.log(target);
  for(let i = 0; i < allImages.length; i++){
    if (target === allImages[i].alt){
      allImages[i].votes++;
      console.log(allImages[i].votes);
    }
  }
  votes--;
  if(votes === 0){
    div_images.removeEventListener('click', votingMachine);
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
    let random = randNum(0, allImages.length -1);
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
