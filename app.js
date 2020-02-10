const MAX = 400; //sets the max pixels for the position the the square div will be placed inside the square div

let container = document.getElementById('shapeCanvas'); //sets the variable container to the square container div in the html

class Shape {
    constructor(x,y){
        this.div = document.createElement('div'); //creates a new div 
        this.div.style.left = `${x}px`;           //sets x coordinate
        this.div.style.top = `${y}px`;            //sets y coordinate
    }
}
class Square extends Shape {
    constructor (x, y, size){
        super(x,y);
        this.div.classList.add('square');          // adds a css class 
        this.div.style.width = `${size}px`;         //setting the width to the size which is a random number
        this.div.style.height = `${size}px`;        
        container.appendChild(this.div);

    }
}

//Buttons---------------

let sqButton = document.getElementById('sq-button'); //assigns sqButton to the html button "sq-button"
sqButton.addEventListener('click', insertSquare);       //adds an event listener that when clicked executes the insert square function

//Functions-------------

function insertSquare () {
    var submitValue = document.getElementById("square-input").value;
    let xVal = randomVal(0,MAX);  //calls on randomVal function. picks a number from 0-800 because MAX is set to 800 px
    let yVal = randomVal(0,MAX);
    let size = submitValue;
    let sq = new Square(xVal, yVal, size);
}

function randomVal (min,max) {    //a random value function that pics a number between the inserted min and max values
    return Math.floor(Math.random() * (max - min)) + min;
}


