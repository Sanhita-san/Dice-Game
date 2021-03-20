var randomNo1 = Math.floor((Math.random()*6)+1);
var srcc1= "images/dice"+randomNo1+".png"
document.querySelector(".img1").setAttribute("src",srcc1);

var randomNo2 = Math.floor((Math.random()*6)+1);
var srcc2= "images/dice"+randomNo2+".png"
document.querySelector(".img2").setAttribute("src",srcc2);

if(randomNo1>randomNo2){
	document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}else if(randomNo2>randomNo1){
	document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}else{
	document.querySelector("h1").innerHTML="Draw!";
}