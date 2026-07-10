// ================= Smooth Scroll =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ================= Dark / Light =================

const themeBtn=document.getElementById("themeToggle");

themeBtn.onclick=function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML="☀️";

}else{

themeBtn.innerHTML="🌙";

}

}

// ================= Fade Animation =================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ================= Language =================

const language=document.getElementById("language");

language.addEventListener("change",function(){

if(this.value==="ar"){

document.documentElement.lang="ar";
document.body.dir="rtl";

}else{

document.documentElement.lang="en";
document.body.dir="ltr";

}

});  
