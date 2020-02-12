//Variables----------------------

let shapeCanvas = document.getElementById('shape-canvas'); //sets the variable shapeCanvas to the shapeCanvas div that is in the html


let shapeName = document.getElementById('shape-name');              // \
let shapeWidth = document.getElementById('width-info');             //  \
let shapeHeight = document.getElementById('height-info');           //   \  sets variables to the text input fields from the html
let shapeRadius = document.getElementById('radius-info');           //   /  so the values can be changed within the click listeners
let shapeArea = document.getElementById('area-info');               //  /   that are inside of the separate shape constructors
let shapePerimeter = document.getElementById('perimeter-info');     // /


//Shape Constructors-------------

class Shape {                                      // the main class
    constructor(x,y){                              // the main constructor
        this.div = document.createElement('div');  // creates a new div for the shape
        this.div.style.left = `${x}px`;            // sets x coordinate for the shape to be placed
        this.div.style.top = `${y}px`;             // sets y coordinate for the shape to be placed
        shapeCanvas.appendChild(this.div);         // appends the shape as a child to the shapeCanvas 
    }
}
class Square extends Shape {                       // class for the square that will extend the shape class
    constructor (x,y,size){                        // x and y for the coordinates and size is what the user enters. In the function insertSquare the number that the user enters in square-input is set to 
        super(x,y);                                // super calls the information for placement that has been determined in the main shape constructor
        this.div.classList.add('square');          // adds a css class so it can be referenced in the css
        this.div.style.width = `${size}px`;        // setting the width to size value. Size is the amount the user enters in the square-input submit field in the index. In the function the value from square-input will be set to size.
        this.div.style.height = `${size}px`;       // setting the height to size value as well being that on a square they are the same

        this.div.addEventListener ('click', () => {
            shapeName.value=this.div.classList;
            shapeWidth.value=size;
            shapeHeight.value=size;
            shapeRadius.value="Not Applicable";
            shapeArea.value=size**2;
            shapePerimeter.value=4*size;
        })

        this.div.addEventListener ('dblclick', () => {
            this.div.remove();
        })
    }
}
class Circle extends Shape {
    constructor (x, y, radius){
        super(x,y);                    
        this.div.classList.add('circle');         
        this.div.style.width = `${radius*2}px`;         
        this.div.style.height = `${radius*2}px`;        

        this.div.addEventListener ('click', () => {
            shapeName.value=this.div.classList;
            shapeWidth.value=radius*2;
            shapeHeight.value=radius*2;
            shapeRadius.value=radius;
            shapeArea.value=(Math.PI)*((radius)**2);
            shapePerimeter.value=(2)*(radius)*(Math.PI);
        })

        this.div.addEventListener ('dblclick', () => {
            this.div.remove();
        })
    }
}
class Rectangle extends Shape {
    constructor (x,y, recHeight, recWidth){
        super(x,y);
        this.div.classList.add('rectangle');
        this.div.style.height = `${recHeight}px`; 
        this.div.style.width = `${recWidth}px`;

        this.div.addEventListener ('click', () => {
            shapeName.value=this.div.classList;
            shapeWidth.value=recWidth;
            shapeHeight.value=recHeight;
            shapeRadius.value="Not Applicable";
            shapeArea.value=recWidth*recHeight;
            shapePerimeter.value= 2*(+recWidth + +recHeight);
        })

        this.div.addEventListener ('dblclick', () => {
            this.div.remove();
        })

        if (recHeight === recWidth){
            alert('This is a square, not a rectangle!');
            this.div.remove();
        }
    }
}
class Triangle extends Shape {
    constructor (x, y, size){
        super(x,y);
        this.div.classList.add('triangle');         
        this.div.style.borderBottom= `${size}px solid yellow`;        
        this.div.style.borderRight = `${size}px solid transparent`;        

        this.div.addEventListener ('click', () => {
            shapeName.value=this.div.classList;
            shapeWidth.value=size;
            shapeHeight.value=size;
            shapeRadius.value="Not Applicable";
            shapeArea.value=(size*size)/2;
            shapePerimeter.value= +size + +size + Math. sqrt(size**2 + size**2) ;
        })

        this.div.addEventListener ('dblclick', () => {
            this.div.remove();
        })
    }
}

//Buttons---------------

let sqButton = document.getElementById('sq-button'); 
sqButton.addEventListener('click', insertSquare);       

let cirButton = document.getElementById('cir-button');
cirButton.addEventListener('click', insertCircle); 

let recButton = document.getElementById('rec-button');
recButton.addEventListener('click', insertRectangle);

let triButton = document.getElementById('tri-button'); 
triButton.addEventListener('click', insertTriangle);       

//Functions-------------

function insertSquare () {
    var size = document.getElementById("square-input").value;
    let xVal = randomVal(0,600-size); 
    let yVal = randomVal(0,600-size);
    let sq = new Square(xVal, yVal, size);
}

function insertCircle () {
    var radius = document.getElementById("circle-input").value;
    let xVal = randomVal(0,600-(radius*2));  
    let yVal = randomVal(0,600-(radius*2));
    let cir = new Circle(xVal, yVal, radius);
}

function insertRectangle () {
    var recHeight = document.getElementById("rectangle-height-input").value;
    var recWidth = document.getElementById("rectangle-width-input").value;
    let xVal = randomVal(0,600-recWidth); 
    let yVal = randomVal(0,600-recHeight);
    let rec = new Rectangle(xVal, yVal, recHeight, recWidth);

}

function insertTriangle () {
    var size = document.getElementById("triangle-input").value;
    let xVal = randomVal(0,600-size);  
    let yVal = randomVal(0,600-size);
    let tri = new Triangle(xVal, yVal, size);
}


function randomVal (min,max) {    
    return Math.floor(Math.random() * (max - min));
}
