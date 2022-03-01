function start(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CHQW7UvUT/model.json",modelloaded)
}

function modelloaded(){
classifier.classify(gotResult)
}

function gotResult(error,results){
if(error){
console.error(error)
}
else{
console.log(results)
red= Math.floor(Math.random()*255)+1;
green= Math.floor(Math.random()*255)+1;
blue= Math.floor(Math.random()*255)+1;
document.getElementById("res_name").innerHTML = "I can hear: "+results[0].label;
document.getElementById("res_accu").innerHTML = "Accuracy: "+(results[0].confidence*100).toFixed(3)+"%";
document.getElementById("res_name").style.color="rgb("+red+","+green+","+blue+")";
document.getElementById("res_accu").style.color="rgb("+red+","+green+","+blue+")";
img1=document.getElementById("a1");
img2=document.getElementById("a2");
img3=document.getElementById("a3");
img4=document.getElementById("a4");
if(results[0].label=="Clapping"){
img1.src="aliens-01.gif"
img2.src="aliens-02.png"
img3.src="aliens-03.png"
img4.src="aliens-04.png"
}
else if(results[0].label=="Tapping"){
img1.src="aliens-01.png"
img2.src="aliens-02.gif"
img3.src="aliens-03.png"
img4.src="aliens-04.png"
}
else if(results[0].label=="Banging"){
img1.src="aliens-01.png"
img2.src="aliens-02.png"
img3.src="aliens-03.gif"
img4.src="aliens-04.png"
}
else{
img1.src="aliens-01.png"
img2.src="aliens-02.png"
img3.src="aliens-03.png"
img4.src="aliens-04.gif"
}
}
}