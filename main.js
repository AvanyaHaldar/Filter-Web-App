var gender="";

function preload() {
lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup() {
  canvas = createCanvas(500, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 400);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', getPoses);
}

function modelLoaded() {
  console.log("PoseNet is Initialized");
  
}

function draw() {
  image(video, 0, 0, 500, 400);
  gender=document.getElementById("gender").value;
  console.log("Gender = "+ gender);
  if (gender=="girl") {
    image(lipstick,noseX-25,noseY+14,55,30);
  }
  else{
    image(mustache,noseX-28,noseY+5,60,30);
  }
  
}

function takeSnapshot() {
  save("My_Filtered_Image.png");
}

var noseX = "";
var noseY = "";

function getPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x=" + noseX);
    console.log("nose y=" + noseY);
  }
}
