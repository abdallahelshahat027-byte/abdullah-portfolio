const text = "بورتفوليو عبدالله الشحات";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,80);

}

}

typeWriter();
