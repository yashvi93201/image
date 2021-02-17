Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image'src='"+data_uri+"'>";
    
    });
}
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/K6k3p6ilN/model.json',modelLoaded);
function modelLoaded(){
    console.log('model Is loaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is"+prediction1;
    speak_data2="the secconed prediction is "+prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}
function check(){
      img= document.getElementById("captured_image");
      classifier.classify(img,gotResult);

}
function gotResult(error,results){
    if(error){
console.error(error);

    }
    else{
         console.log(results);
         document.getElementById("result_emotion_name").innerHTML=results[0].label;
         document.getElementById("result_emotion_name2").innerHTML=results[1].label;
         prediction1= results[0].label;
         prediction2=results[1].label;
         speak();
         if(results[0].label=="Happy"){
document.getElementById("update_emoji").innerHTML="&#128522;";

         }
         if(results[0].label=="Sad") {
            document.getElementById("update_emoji").innerHTML="&#128532;";   
         }
         if(results[0].label=="Angry") {
            document.getElementById("update_emoji").innerHTML="&#128545;";   
        }
        if(results[1].label=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522;";
        }
        if(results[1].label=="Sad"){
            document.getElementById("update_emoji2").innerHTML="&#128532;"; }
             
       if(results[1].label=="Angry"){
        document.getElementById("update_emoji2").innerHTML="&#128545;";   
       }
    }

}



