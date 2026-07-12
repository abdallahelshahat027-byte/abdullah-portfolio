// =========================
// Arabic / English Content
// =========================


const languageData = {


ar:{


direction:"rtl",


name:"عبد الله الشحات",

job:"مسؤول مشتريات (Procurement Officer)",


aboutTitle:"نبذة مختصرة عني",

aboutText:
"مسؤول مشتريات استراتيجي بخبرة عملية مثبتة في إدارة المشتريات، التفاوض التعاقدي، وتحسين التكاليف. أمتلك خلفية قانونية قوية تمنحني ميزة تحليلية في إدارة العقود والمخاطر، مع خبرة في أنظمة ERP وتحليل البيانات.",



experienceTitle:"الخبرات العملية",


visionTitle:"رؤيتي المهنية",


philosophyTitle:"فلسفة الشراء",


skillsTitle:"المهارات التقنية والبرمجية",


coursesTitle:"الدورات التدريبية والمؤهلات",


languagesTitle:"اللغات",


hobbiesTitle:"الهوايات",


challengeTitle:"التحديات والإنجازات",


kpiTitle:"مؤشرات الأداء الرئيسية (KPIs)",


contactTitle:"معلومات التواصل"


},



en:{


direction:"ltr",


name:"Abdallah Elshahat",


job:"Procurement Officer",



aboutTitle:"Professional Summary",


aboutText:
"Strategic Procurement Officer with proven experience in procurement management, contract negotiation, cost optimization, supplier relationships and ERP systems. Strong legal background supporting contract analysis and risk management.",



experienceTitle:"Professional Experience",


visionTitle:"Professional Vision",


philosophyTitle:"Procurement Philosophy",


skillsTitle:"Technical Skills",


coursesTitle:"Training & Qualifications",


languagesTitle:"Languages",


hobbiesTitle:"Hobbies",


challengeTitle:"Challenges & Achievements",


kpiTitle:"Key Performance Indicators (KPIs)",


contactTitle:"Contact Information"


}


};



// =========================
// Apply Language
// =========================


function changeLanguage(lang){


document.documentElement.dir =
languageData[lang].direction;


document.querySelector(".hero h1").innerText =
languageData[lang].name;


document.querySelector(".hero h2").innerText =
languageData[lang].job;



document.querySelector("#about .section-title h2").innerText =
languageData[lang].aboutTitle;



document.querySelector("#about .card p").innerText =
languageData[lang].aboutText;



document.querySelector("#experience .section-title h2").innerText =
languageData[lang].experienceTitle;



document.querySelector("#vision .section-title h2").innerText =
languageData[lang].visionTitle;



document.querySelector("#philosophy .section-title h2").innerText =
languageData[lang].philosophyTitle;



document.querySelector("#skills .section-title h2").innerText =
languageData[lang].skillsTitle;



document.querySelector("#courses .section-title h2").innerText =
languageData[lang].coursesTitle;



document.querySelector("#languages .section-title h2").innerText =
languageData[lang].languagesTitle;



document.querySelector("#hobbies .section-title h2").innerText =
languageData[lang].hobbiesTitle;



document.querySelector("#challenges .section-title h2").innerText =
languageData[lang].challengeTitle;



document.querySelector("#kpi .section-title h2").innerText =
languageData[lang].kpiTitle;



document.querySelector("#contact .section-title h2").innerText =
languageData[lang].contactTitle;


}
