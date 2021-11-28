var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight*1.18;


var background = new Image();
//background.src = "https://images3.alphacoders.com/179/179065.jpg";
background.src = "https://images.alphacoders.com/591/591905.jpg";
//background.src = "https://wallpaper.dog/large/10814052.png";

background.onload = function(){
    ctx.drawImage(background,0,0, canvas.width, canvas.height*1.18);
}
