/* Cursor Glow */

const cursor=document.createElement("div");

cursor.style.width="18px";
cursor.style.height="18px";
cursor.style.border="2px solid #00c6ff";
cursor.style.borderRadius="50%";
cursor.style.position="fixed";
cursor.style.pointerEvents="none";
cursor.style.transition=".08s";
cursor.style.zIndex="999999";

document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX-9+"px";
cursor.style.top=e.clientY-9+"px";

});

/* Parallax */

document.addEventListener("mousemove",e=>{

const hero=document.querySelector(".hero");

let x=(e.clientX/window.innerWidth)*20;

let y=(e.clientY/window.innerHeight)*20;

hero.style.backgroundPosition=`${50+x/3}% ${50+y/3}%`;

});/* Loading */

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},1500);

}

/* Progress Animation */

function animateBars(){

document.querySelectorAll(".progress div").forEach(bar=>{

bar.style.width=bar.dataset.width;

});

}
