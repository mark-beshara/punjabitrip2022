// define a variable for the delay in ms
var delay = 1500;

// Define a var that stores the number of images in the directory
var numImages = 49;

// Create an array of the names of the files 
var fileNames = new Array()

// Iterate over the number of files and create the path to them 
for(let counter = 0; counter < numImages; counter++){
    var filePath = "./images/image" + counter + ".jpg";
    fileNames.push(filePath);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

setInterval(
  function(){
    // Get the possible background images to choose from 
    var backgroundImages = document.getElementsByClassName("bgimg");
    console.log(backgroundImages)

    // Choose a random photo
    var randomNum = getRndInteger(0, numImages);
    var new_style = "background-image: url('" + fileNames[randomNum] + "')"

    // Set the background image to whatever image path is at the selected index
    for (var index = 0; index < backgroundImages.length; index++) {
      backgroundImages[index].setAttribute('style', new_style) 
    }    

  }, 3000)