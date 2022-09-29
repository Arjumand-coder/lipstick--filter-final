lipstick_X=0;
lipstick_y=0;
function preload() {
lipstick = loadImage('https://i.postimg.cc/bv5D066s/l1.png');
}

function setup() {
    canvas= createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is Intialized');
}
  
  function gotPoses(results) {
    if(results.length > 0)
    {

        console.log(results);
        lipstick_X = results[0].pose.nose.x-25;
        lipstick_y = results[0].pose.nose.y+11;
        console.log(" Lipstick  x = "+ lipstick_X);
        console.log(" Lipstick y = "+ lipstick_y);
    }
  }

function draw() {
    image(video, 0,0,300,300);
    image(lipstick, lipstick_X, lipstick_y, 50,50);
}

function take_snapshot()  {
    save('my.png')
}