Webcam.set({
width:350,
height:300,
image_format:'png',
image_quality:90

})


camera = document.getElementById("camera");
Webcam.attach("#camera");


function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img  id = "captured_image" src = "'+data_uri+'"/>'
    });
}



console.log("ml5 version" ,ml5.version );
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BM8bCWGan/",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}



function indentify_image(){

img = document.getElementById("captured_image");
classifier.classify(img, gotResult);
}



function gotResult(error , results){
if (error) {
 console.error("error");
} else{

console.log("results");
document.getElementById("result_object").innerHTML = results[0].label;
document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}