status ="";
objects = [];
textinput = "";
function preload(){


}


function setup(){
    canvas = createCanvas(280,280);
    canvas.position(490,220);
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();
}

function draw(){
    image(video,0,0,280,280);

}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("label1").innerHTML = "Status : Detecting Object";
    textinput = document.getElementById("input").value;

}

function modelLoaded(){

    console.log("Model Loaded!");
    status = true;
   
}