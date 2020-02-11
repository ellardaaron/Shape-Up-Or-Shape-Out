const MAX = 600; //sets the max pixels for the position the the div will be placed inside the square div

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
class Circle extends Shape {
    constructor (x, y, radius){
        super(x,y);
        this.div.classList.add('circle');          // adds a css class 
        this.div.style.width = `${radius}px`;         //setting the width to the size which is a random number
        this.div.style.height = `${radius}px`;        
        container.appendChild(this.div);

    }
}
class Rectangle extends Shape {
    constructor (x,y, recHeight, recWidth){
        super(x,y);
        this.div.classList.add('rectangle');
        this.div.style.height = `${recHeight}px`;
        this.div.style.width = `${recWidth}px`;
        container.appendChild(this.div)
    }
}
// class Triangle extends Shape {
//     constructor (x, y, size){
//         super(x,y);
//         this.div.classList.add('triangle');         
//         this.div.style.width= `${size}px`;        
//         this.div.style.height = `${size}px`;        
//         container.appendChild(this.div);

//     }
// }


//Buttons---------------

let sqButton = document.getElementById('sq-button'); //assigns sqButton to the html button "sq-button"
sqButton.addEventListener('click', insertSquare);       //adds an event listener that when clicked executes the insert square function

let cirButton = document.getElementById('cir-button');
cirButton.addEventListener('click', insertCircle); 

let recButton = document.getElementById('rec-button');
recButton.addEventListener('click', insertRectangle);

// let triButton = document.getElementById('tri-button'); 
// triButton.addEventListener('click', insertTriangle);       

//Functions-------------

function insertSquare () {
    var submitValue = document.getElementById("square-input").value;
    let xVal = randomVal(0,MAX);  //calls on randomVal function. picks a number from 0-800 because MAX is set to 800 px
    let yVal = randomVal(0,MAX);
    let size = submitValue;
    let sq = new Square(xVal, yVal, size);
}

function insertCircle () {
    var submitValue = document.getElementById("circle-input").value;
    let xVal = randomVal(0,MAX);  
    let yVal = randomVal(0,MAX);
    let radius = submitValue*2;                  // multiply the submit value by 2 because radius is only half of the circumference
    let cir = new Circle(xVal, yVal, radius);
}

function insertRectangle () {
    var heightValue = document.getElementById("rectangle-height-input").value;
    var widthValue = document.getElementById("rectangle-width-input").value;
    let xVal = randomVal(0,MAX); 
    let yVal = randomVal(0,MAX);
    let recHeight = heightValue;
    let recWidth = widthValue;
    let rec = new Rectangle(xVal, yVal, recHeight, recWidth);

}

// function insertTriangle () {
//     var submitValue = document.getElementById("triangle-input").value;
//     let xVal = randomVal(0,MAX);  //calls on randomVal function. picks a number from 0-800 because MAX is set to 800 px
//     let yVal = randomVal(0,MAX);
//     let size = submitValue;
//     let tri = new Triangle(xVal, yVal, size);
// }


function randomVal (min,max) {    //a random value function that pics a number between the inserted min and max values
    return Math.floor(Math.random() * (max - min));
}


