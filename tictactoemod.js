var x = getWidth();
var y = getHeight();
var whosNext = 'black';

var case1 = 1;
var case2 = 2;
var case3 = 3;
var case4 = 4;
var case5 = 5;
var case6 = 6;
var case7 = 7;
var case8 = 8;
var case9 = 9;
/*  1 2 3
    4 5 6
    7 8 9*/
var done = true;

//whosNext symbolises who the next player is. start is black 
function start() {
DrawBoard();
//player1();
mouseClickMethod(onTap);
}

function onTap(e) {

//help decipher which case click at
var positionX;
if (e.getX() > 0 && e.getX() < x/3 ){
    positionX = x/6;
}else if (e.getX() > x/3 && e.getX() < x/3*2 ){
    positionX = x/2; 
} else {
    positionX = x/6*5;
}

var positionY;

if (e.getY() > 0 && e.getY() < y/3 ){
    positionY = y/6;
}else if (e.getY() > y/3 && e.getY() < y/3*2 ){
    positionY = y/2; 
} else {
    positionY = y/6*5;
}


//number is available. 'Red' and 'Black' symbolises what is inside
// this is to see if available or not 
if (positionY == y/6 && positionX == x/6 && case1 == 1 && done == true ){
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case1 = 'Black';
        console.log('black');
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case1 = 'Red';
    }
    //case1
}else if(positionY == y/6 && positionX == x/2 && case2 == 2  && done == true ){
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case2 = 'Black';
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case2 = 'Red';
    }
    //case2 = false;
    //case2
}else if (positionY == y/6 && positionX == x/6*5 && case3 == 3 && done == true ) {
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case3 = 'Black';
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case3 = 'Red';
    }
    //case3 = false;
    //case3
}else if (positionY == y/2 && positionX == x/6 && case4 == 4 && done == true ) {
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case4 = 'Black';
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case4 = 'Red';
    }
   
    //case4
}else if (positionY == y/2 && positionX == x/2 && case5 == 5 && done == true ) {
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case5 = 'Black';
        console.log('black');
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case5 = 'Red';
    }
    //case5
}else if (positionY == y/2 && positionX == x/6*5 && case6 == 6 && done == true ) {
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case6 = 'Black';
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case6 = 'Red';
    }
    //case6
}else if (positionY == y/6*5 && positionX == x/6 && case7 == 7 && done == true ) {
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case7 = 'Black';
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case7 = 'Red';
    }
    //case7 = false;
    //case7
}else if (positionY == y/6*5 && positionX == x/2 && case8 == 8 && done == true ) {
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case8 = 'Black';
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case8 = 'Red';
    }
    //case8 = false;
    //case8
}else if (positionY == y/6*5 && positionX == x/6*5 && case9 == 9 && done == true ) {
    if (whosNext == 'black') {
        drawCircleBlack(positionX, positionY);
        whosNext = 'red';
        case9 = 'Black';
        console.log('black');
    } else {
        drawCircleRed(positionX, positionY);
        whosNext = 'black';
        case9 = 'Red';
    }
    //case9 = false;
    //case9
}

//when case have same color
var winner = false;
    if (case1 == case5 && case5 == case9 && case9 == case1 || case3 == case5 && case5 == case7 && case7 == case3){
        //across
        winner = true;
    } 

    if (case1 == case4 && case4 == case7 && case7 == case1 || case2 == case5 && case5 == case8 && case2 == case8 || case3 ==  case6 && case6 == case9 && case9 ==case3){
        //diagonal
        winner = true;
    }  
    if (case1 == case2 && case2 == case3 && case3 == case1 || case4 == case5 && case5 == case6 && case6 == case4 || case7 ==  case8 && case8 == case9 && case9 == case7){
        //horizon
        winner = true;
    }    
//decide whos the winner
if (winner == true){
    var rect = new Rectangle(2000, 500);
    rect.setPosition(0, 0);
    rect.setColor(Color.BLACK);
    add(rect); // Add rectangle
    
    if (whosNext == 'black'){
        var txt = new Text("Red wins!", "20pt Arial");
        var positionx = getWidth() / 3;
        var positiony = getHeight() / 2;
        txt.setPosition(positionx, positiony);
        txt.setColor(Color.white);
        add(txt);
    } else {
        var txt = new Text("Black wins!", "20pt Arial");
        var positionx = getWidth() / 3;
        var positiony = getHeight() / 2;
        txt.setPosition(positionx, positiony);
        txt.setColor(Color.white);
        add(txt);
    }
    done = false;
    console.log ('somebody won!');
}

if (winner == false && case1 != 1 && case2 != 2 && case3 != 3 && case4 != 4 && case5 != 5 && case6 != 6 && case7 != 7 && case8 != 8 && case9 != 9){
    var rect = new Rectangle(2000, 500);
    rect.setPosition(0, 0);
    rect.setColor(Color.BLACK);
    add(rect); // Add rectangle
    
    var txt = new Text(" " + "Its a tie!", "20pt Arial");

    var positionx = getWidth() / 3;
    var positiony = getHeight() / 2;
    txt.setPosition(positionx, positiony);
    txt.setColor(Color.white);
    add(txt); 
    console.log('Its a tie');
}
}

function drawCircleBlack(x, y) {
// Radius of the circle
var radius = 50;
// Sets the color of the circles
var color = Color.BLACK;
var circle = new Circle(radius);
circle.setPosition(x, y);
circle.setColor(color);
add(circle);
}
function drawCircleRed(x,y){
// Radius of the circle
var radius = 50;
// Sets the color of the circles
var color = Color.RED;
var circle = new Circle(radius);
circle.setPosition(x, y);
circle.setColor(color);
add(circle);

}



function DrawBoard() {
var line1 = new Line (0, y/3, y, y/3);//first line from y axes
add (line1);
var line2 = new Line (0 ,y*2/3 , y, y*2/3);//second line for y axes
add (line2);
var line3 = new Line (x/3 ,0, x/3, y);
add (line3);
var line4 = new Line (x*2/3 ,0 , x*2/3, y);
add (line4);
}