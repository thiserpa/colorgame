var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var qntSquares = 6;

easyButton.addEventListener("click", function(){
    qntSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(qntSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    qntSquares = 6;
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColors(qntSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(qntSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++){
        //add colors to squares
        squares[i].style.backgroundColor = colors[i];
    };
    document.querySelector("h1").style.background = "steelblue";

    if(resetButton.textContent === "Play again"){
        resetButton.textContent = "New colors";
    }
    messageDisplay.textContent = "";
});

for(var i = 0; i < squares.length; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener("click", function(){

        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color clicked and picked
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            document.querySelector("h1").style.background = clickedColor;
            resetButton.textContent = "Play again"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    })
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;

    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //generate array of random colors
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    //return array
    return arr;
}

function randomColor(){
    // pick red
    var r = Math.floor(Math.random() * 256);
    
    // pick red
    var g = Math.floor(Math.random() * 256);

    // pick red
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}