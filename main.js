var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;


nasa_arr=["Nasa_Mars1.jpeg","Nasa_Mars3.jpeg","Nasa_Mars4.jpg","Nasa_Mars5.jpg"];
random_number=Math.floor(Math.random()*4);
background_img=nasa_arr[random_number];
rover_img="rover.png";

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;//uploadbackground is a function 
    background_imgTag.src=background_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;//uploadbackground is a function 
    rover_imgTag.src=rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
   var keyPressed=e.keyCode;
   if (keyPressed=='37') {
    console.log("left");
    left();
   }

   if (keyPressed=='38') {
    console.log("up");
    up();
   }

   if (keyPressed=='39') {
    console.log("right");
    right();
   }

   if (keyPressed=='40') {
    console.log("down");
    down();
   }
}
function up() {
    if (rover_y >0) {
        rover_y=rover_y-10;
        console.log("the x and y coordinates are, x= "+rover_x+" | y= "+rover_y);
        uploadBackground();
        uploadRover();
    }

}
function down() {
    if (rover_y <500){
        rover_y=rover_y+10;
        console.log("the x and y coordinates are, x= "+rover_x+" | y= "+rover_y);
        uploadBackground();
        uploadRover();
    }

}
function left() {
    if (rover_x >0) {
        rover_x=rover_x-10;
        console.log("the x and y coordinates are, x= "+rover_x+" | y= "+rover_y);
        uploadBackground();
        uploadRover();
    }

}
function right() {
    if (rover_x <700) {
        rover_x=rover_x+10;
        console.log("the x and y coordinates are, x= "+rover_x+" | y= "+rover_y);
        uploadBackground();
        uploadRover();
    }

}
