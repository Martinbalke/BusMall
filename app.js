//Global Variables
const div_images = document.getElementById('images');
const img_img1 = document.getElementById('img1');
const img_img2 = document.getElementById('img2');
const img_img3 = document.getElementById('img3');
const input_voteButton = document.getElementById('voteButton');
const allStores = [];
let votes = 25;

//Object Constructor
    //New object for each img with image name, and .type
    //Needs a views and votes property for later data analysis
function ImageGenerator(name, type){
    this.src = `${name}.${type}`;
    this.title = name;
    this.alt = name;
    this.votes = 0;
    this.views = 0;
    allStores.push(this);
};
//Object Instances


//Event handlers
    //25 votes
    //Needs to generate a new image every time the user votes
    //Render those images to the dom (using a function?)

//Functions
    //Render images to the DOM
    //Render the results once the 25 votes are used up

//Helper functions
    //Math random for choosing between the three images

//Event listeners
    //on click but later on will be on submit of the button

//Function Calls