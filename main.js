Webcam.set({
    width:350,
    height:300,
    image_format:' png',
    png_quality:90
});
cam= document.getElementById("camera");
Webcam.attach('#cam');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/u71HYO9hy/', modelLoaded);