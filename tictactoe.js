var y = getHeight();
//used to know which player come first, true = black and false = red
var startFirst = true;

function start() {
    DrawBoard();
    //player1();
    mouseClickMethod(onTap);
}


// draw a circle in posiion x, y and the color COLOR
function drawCircle(x, y, couleur) {
    console.log("drawing " + couleur + " circle in postion " + x + " " + y);
    // Radius of the circle
    var radius = 50;
    // Sets the color of the circles
    var color = couleur;
    var circleR = new Circle(radius);
    circleR.setPosition(x, y);
    circleR.setColor(color);
    add(circleR);
    //startFirst = false;    
}

// draw a circle in posiion x, y and the color black
function drawCircleBlack(x, y) {
    console.log("drawing red circle in postion " + x + " " + y);
            // Radius of the circle
            var radius = 50;
            // Sets the color of the circles
            var color = Color.BLACK;
            var circleR = new Circle(radius);
            circleR.setPosition(x, y);
            circleR.setColor(color);
            add(circleR);
            startFirst = false;    
}

    
function drawCircleRed(x,y){
    console.log("drawing red circle in postion " + x + " " + y);
            // Radius of the circle
            var radius = 50;
            // Sets the color of the circles
            var color = Color.RED;
            var circleR = new Circle(radius);
            circleR.setPosition(x, y);
            circleR.setColor(color);
            add(circleR);
            startFirst = true;    
    
}


function onTap(e) {
    console.log("in OnTap startFirst is " + startFirst);
    if (startFirst == true) {
        drawCircle(e.getX(), e.getY(), Color.BLACK );
        console.log("In true : startFirst is " + startFirst)
        startFirst = false;
    }else{
        drawCircle(e.getX(), e.getY(), Color.RED);
        console.log("In false : startFirst is " + startFirst);
        startFirst = true;
    }
}
function player1() {
    /*if(startFirst == true) {
        drawCircleBlack;
    } else {
        drawCircleRed;
        */
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