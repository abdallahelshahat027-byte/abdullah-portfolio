// =========================
// فتح وإغلاق الصناديق
// =========================

function toggleContent(id){

    let box = document.getElementById(id);

    if(box.style.display === "block"){

        box.style.display = "none";

    }else{

        box.style.display = "block";

        box.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }

}


// =========================
// الوضع الليلي
// =========================

const darkBtn = document.getElementById("darkMode");


darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML="☀️";

    }else{

        darkBtn.innerHTML="🌙";

    }

});



// =========================
// زر الرجوع للأعلى
// =========================


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }


});


topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,
        behavior:"smooth"

    });


});
// =========================
// الترجمة عربي / English
// =========================


const translateBtn = document.getElementById("translateBtn");

let englishMode = false;


translateBtn.addEventListener("click",()=>{


    englishMode = !englishMode;


    if(englishMode){


        document.documentElement.lang="en";

        document.documentElement.dir="ltr";


        translateBtn.innerHTML="🌐 English | العربية";


        changeLanguage("en");


    }else{


        document.documentElement.lang="ar";

        document.documentElement.dir="rtl";


        translateBtn.innerHTML="🌐 العربية | English";


        changeLanguage("ar");


    }


});



// =========================
// تغيير النصوص
// =========================


function changeLanguage(lang){



if(lang==="en"){


document.querySelector(".profile-side h2").innerHTML="Abdallah Elshahat";


document.querySelector(".profile-side p").innerHTML="Procurement Officer";


document.querySelector(".profile-card h1").innerHTML="Abdallah Elshahat";


document.querySelector(".profile-card h3").innerHTML="Procurement Officer";



let links = document.querySelectorAll(".sidebar nav a");


let englishLinks=[

"Home",
"About Me",
"Experience",
"Professional Vision",
"Procurement Philosophy",
"Skills",
"Education",
"Languages",
"Hobbies",
"Challenges",
"KPIs",
"Contact"

];


links.forEach((link,index)=>{


let icon = link.querySelector("i").outerHTML;

link.innerHTML = icon + " " + englishLinks[index];


});



}

else{


location.reload();

}


}
