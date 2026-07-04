const sidebar = document.getElementById("sidebar");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");

function toggleMenu() {
    sidebar.classList.toggle("active");
}

function closePopup() {
    popup.style.display = "none";
}

window.onclick = function(e){
    if(e.target === popup){
        closePopup();
    }
}

function showContent(type){

let html = "";

switch(type){

case "about":
html = `
<h2>📄 النبذة التعريفية</h2>
<p style="direction:rtl;text-align:right;line-height:2;">
مسئول مشتريات يمتلك مهارات قوية في التفاوض وإدارة الموردين، مع خبرة في توفير احتياجات الشركة بأفضل جودة وأقل تكلفة، والقدرة على متابعة المخزون وتنظيم عمليات الشراء بكفاءة عالية.
</p>
`;
break;

case "qualification":
html = `
<h2>🎓 المؤهلات العلمية</h2>

<ul style="direction:rtl;text-align:right;line-height:2;">
<li>2017 - 2021 : جامعة الزقازيق — ليسانس حقوق.</li>
<li>2021 - 2022 : نقابة المحامين بالشرقية — دبلومة الإدارة القانونية للشركات.</li>
</ul>
`;
break;

case "experience":
html = `
<h2>💼 الخبرات العملية</h2>

<div style="direction:rtl;text-align:right;line-height:2;">

<h3>مجموعة شركات النجم الذهبي (2023 - 2025)</h3>

<ul>
<li>مدير مشتريات.</li>
<li>البحث عن الموردين والتعامل معهم.</li>
<li>مقارنة الأسعار والعروض.</li>
<li>التفاوض على الأسعار وشروط الدفع والتوريد.</li>
<li>إصدار أوامر الشراء.</li>
<li>التأكد من مطابقة المنتجات للمواصفات.</li>
</ul>

<hr>

<h3>شركة أستر (2025 - 2026)</h3>

<ul>
<li>مسئول مشتريات.</li>
<li>متابعة المخزون.</li>
<li>التنسيق مع الإدارات.</li>
<li>عمل تقارير المشتريات.</li>
<li>متابعة العقود والفواتير.</li>
<li>تقليل التكاليف مع الحفاظ على الجودة.</li>
</ul>

</div>
`;
break;

case "skills":
html = `
<h2>💼 المهارات الاحترافية</h2>

<ul style="direction:rtl;text-align:right;line-height:2;">
<li>الإشراف على العمال</li>
<li>الإدارة الفعالة</li>
<li>إدارة المصانع</li>
<li>Zoho ERP</li>
<li>Odoo ERP</li>
<li>Oracle ERP</li>
</ul>
`;
break;

case "languages":
html = `
<h2>🌍 اللغات</h2>

<ul style="direction:rtl;text-align:right;line-height:2;">
<li>العربية : 100%</li>
<li>الإنجليزية : 70%</li>
</ul>
`;
break;

case "hobbies":
html = `
<h2>📚 الهوايات</h2>

<ul style="direction:rtl;text-align:right;line-height:2;">
<li>القراءة</li>
<li>التعليم المستمر</li>
</ul>
`;
break;

case "extra":
html = `
<h2>⭐ لمحة إضافية</h2>

<p style="direction:rtl;text-align:right;line-height:2;">
مسئول مشتريات محترف يمتلك خبرة في إدارة عمليات الشراء والتوريد بكفاءة عالية، مع قدرة متميزة على التفاوض وبناء علاقات قوية مع الموردين لتحقيق أفضل جودة بأقل التكاليف، ويتمتع بمهارات تحليلية وتنظيمية قوية.
</p>
`;
break;

case "contact":
html = `
<h2>📞 معلومات الاتصال</h2>

<ul style="direction:rtl;text-align:right;line-height:2;">
<li>📱 +966565120349</li>
<li>📧 Abdallahelshahat027@gmail.com</li>
<li>📍 المملكة العربية السعودية - الرياض</li>
</ul>
`;
break;

default:
html = "<h2>لا توجد بيانات</h2>";

}

popupContent.innerHTML = html;
popup.style.display = "flex";
sidebar.classList.remove("active");

}
