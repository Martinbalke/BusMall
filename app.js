'use strict';
//Global Variables
const div_images = document.getElementById('images');
const allImages = [];
let votes = 25;
const recentlySeen =[];
const labels = [];
const productVotes = [];
const views = [];
const chart_myChart = document.getElementById('myChart').getContext('2d');


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
new ImageGenerator('StarWars Bag','bag', 'jpg');
new ImageGenerator('Banana Slicer', 'banana', 'jpg');
new ImageGenerator('Bathroom Ipad Stand','bathroom', 'jpg');
new ImageGenerator('Open Toe Rainboots', 'boots', 'jpg');
new ImageGenerator('Breakfast Cooker','breakfast', 'jpg');
new ImageGenerator('Meatball Bubblegum','bubblegum', 'jpg');
new ImageGenerator('Art Deco Chair', 'chair', 'jpg');
new ImageGenerator('Cthulhu Action Figure','cthulhu', 'jpg');
new ImageGenerator('Dog Duck Bill','dog-duck', 'jpg');
new ImageGenerator('Canned Dragon Meat','dragon', 'jpg');
new ImageGenerator('Pen Utensils','pen', 'jpg');
new ImageGenerator('Pet Sweeper','pet-sweep', 'jpg');
new ImageGenerator('Pizza Scissors','scissors', 'jpg');
new ImageGenerator('Shark Blanket','shark', 'jpg');
new ImageGenerator('Baby Sweeper','sweep', 'png');
new ImageGenerator('Star Wars Blanket','tauntaun', 'jpg');
new ImageGenerator('Unicorn Meat','unicorn', 'jpg');
new ImageGenerator('Monster USB','usb', 'gif');

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
    renderChart();
    localStorage.setItem('allImages', JSON.stringify(allImages));
    div_images.removeEventListener('click', votingMachine);
  }
}


const updateViews = JSON.parse(localStorage.getItem('allImages'));
function renderChart(){
  if (localStorage.getItem('allImages') === null){
    for(let i = 0; i < allImages.length; i++){
      labels.push(allImages[i].product);
      productVotes.push(allImages[i].votes);
      views.push(allImages[i].views);
    } 
  }else{
    for(let i = 0; i < allImages.length; i++){
      
      labels.push(allImages[i].product);
      productVotes.push(allImages[i].votes += updateViews[i].votes);
      views.push(allImages[i].views += updateViews[i].views);
    }
  }
  console.log(updateViews);
  //chart
  const chart = new Chart(chart_myChart, {
    // The type of chart we want to create
    type: 'bar',
  
    data: {
      labels: labels,
      datasets: [{
        label: 'Votes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: productVotes
      },
      {
        label: 'Views',
        backgroundColor: 'rgb(0, 99, 132)',
        borderColor: 'rgb(0, 99, 132)',
        data: views
      }]
    },
  
    // Configuration options go here
    options: {}
  });
}




//functions
// function renderList(){
//   const ul_Results = document.createElement('ul');
//   div_images.appendChild(ul_Results);

//   for(let i = 0; i < allImages.length; i++){  
//     const li_Image = document.createElement('li');
//     li_Image.textContent = `${allImages[i].product} got ${allImages[i].votes} votes.`;
//     ul_Results.appendChild(li_Image);
//   }
// }

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
