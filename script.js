// =========================
// Scroll Progress Bar
// =========================

window.addEventListener("scroll", function(){

    let scrollTop = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});



// =========================
// Scroll To Top
// =========================

const scrollTopBtn = document.getElementById("scrollTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        scrollTopBtn.style.display="block";

    }else{

        scrollTopBtn.style.display="none";

    }


});


scrollTopBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



// =========================
// Reveal Animation
// =========================


function reveal(){


    let reveals=document.querySelectorAll(".reveal");


    reveals.forEach((item)=>{


        let windowHeight=window.innerHeight;

        let elementTop=item.getBoundingClientRect().top;

        let elementVisible=120;


        if(elementTop < windowHeight - elementVisible){

            item.classList.add("active");

        }


    });


}


window.addEventListener("scroll",reveal);

reveal();



// =========================
// Open Section Buttons
// =========================


function openSection(id){


    let section=document.getElementById(id);


    if(section){

        section.scrollIntoView({

            behavior:"smooth"

        });

    }


}



// =========================
// KPI Counter Animation
// =========================


let counters=document.querySelectorAll(".counter");


let started=false;


function startCounter(){


    if(started) return;


    let kpi=document.getElementById("kpi");


    if(!kpi) return;



    let position=kpi.getBoundingClientRect().top;



    if(position < window.innerHeight){


        started=true;


        counters.forEach(counter=>{


            let target=parseInt(counter.innerText);


            let count=0;


            let speed=20;



            let update=setInterval(()=>{


                count++;


                counter.innerText=count+"%";



                if(count>=target){

                    clearInterval(update);

                }


            },speed);



        });



    }


}


window.addEventListener("scroll",startCounter);



// =========================
// Language Switch
// =========================


const translateBtn=document.getElementById("translateBtn");


let english=false;



translateBtn.onclick=function(){


    if(!english){


        document.documentElement.lang="en";

        document.documentElement.dir="ltr";


        translateBtn.innerHTML=
        '<i class="fa-solid fa-language"></i> العربية';



        translateEnglish();



        english=true;



    }else{


        location.reload();


    }


};



// =========================
// English Translation
// =========================


function translateEnglish(){


const translations={


"الرئيسية":"Home",

"نبذة عني":"About",

"الخبرات":"Experience",

"الرؤية":"Professional Vision",

"فلسفة الشراء":"Procurement Philosophy",

"المهارات":"Skills",

"الدورات":"Courses",

"اللغات":"Languages",

"الهوايات":"Hobbies",

"التحديات":"Challenges",

"التواصل":"Contact",


"عبد الله الشحات":"Abdallah Elshahat",


"مسؤول مشتريات استراتيجي":"Strategic Procurement Officer"


};



document.querySelectorAll("body *").forEach(el=>{


    if(el.children.length===0){


        let text=el.innerText.trim();


        if(translations[text]){


            el.innerText=translations[text];


        }


    }


});


}
