//Global Variables
const div_images = document.getElementById('images');
const img_img1 = document.getElementById('img1');
const img_img2 = document.getElementById('img2');
const img_img3 = document.getElementById('img3');
const input_voteButton = document.getElementById('voteButton');
const allStores = [];
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
  allStores.push(this);
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
  img_img1.innerHTML=randomImage();
}

//Functions
//Render images to the DOM
//Render the results once the 25 votes are used up
function renderImages(){
  let image = randomImage();
  let image1 = document.createElement('img');
  image1.setAttribute = ('src', image.src);
  div_images.appendChild(image1);


}
renderImages();
//Helper functions
function randomImage(){
  let random = randNum(0, allStores.length -1);
  let image = allStores[random];
  for(let i = 0; i < recentlySeen.length; i++){
    if(image === recentlySeen[i]){
      image = allStores[random];
    }
  }
  recentlySeen.push(image);
  image.views++;
  if(recentlySeen.length > 6){
    recentlySeen.splice(0,3);
  }

}

function randNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Event listeners
// div_images.addEventListener('click', votingMachine);

//Function Calls