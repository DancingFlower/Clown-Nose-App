noseX=0;
noseY=0;
rightEyeX=0;
rightEyeY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/QNJPnN9X/clownnose.png');
    sunglasses = loadImage('https://i.postimg.cc/MZdrxPWR/pink-gogs.png');
    
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y;
        console.log("leftEye x = " + leftEyeX);
        console.log("leftEye y = " + leftEyeY);
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
        console.log("rightEye x = " + rightEyeX);
        console.log("rightEye y = " + rightEyeY);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX-15, noseY-15, 30, 30);
    image(sunglasses, rightEyeX-100, rightEyeY-120, 250, 250);
    
}

function take_snapshot(){
   save('myFilterImage.png');
}