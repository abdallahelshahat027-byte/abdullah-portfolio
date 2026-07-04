const sidebar = document.getElementById("sidebar");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");

function toggleMenu(){
    sidebar.classList.toggle("active");
}

function closePopup(){
    popup.style.display = "none";
}

window.onclick = function(e){
    if(e.target === popup){
        closePopup();
    }
}

function showContent(type){

    sidebar.classList.remove("active");

    let html = "";

    switch(type){

        case "about":

        html = `
        <h2>📄 النبذة التعريفية</h2>

        <p>
        مسئول مشتريات يمتلك مهارات قوية في التفاوض وإدارة الموردين، مع خبرة في توفير احتياجات الشركة بأفضل جودة وأقل تكلفة، والقدرة على متابعة المخزون وتنظيم عمليات الشراء بكفاءة عالية.
        </p>
        `;
        break;

        case "contact":

        html = `
        <h2>📞 معلومات الاتصال</h2>

        <p><b>رقم الهاتف:</b> +966565120349</p>

        <p><b>البريد الإلكتروني:</b><br>
        Abdallahelshahat027@gmail.com</p>

        <p><b>العنوان:</b><br>
        المملكة العربية السعودية - الرياض</p>
        `;
        break;

        case "languages":

        html = `
        <h2>🌍 اللغات</h2>

        <ul>
        <li>اللغة العربية : 100%</li>
        <li>اللغة الإنجليزية : 70%</li>
        </ul>
        `;
        break;

        case "hobbies":

        html = `
        <h2>📚 الهوايات</h2>

        <ul>
        <li>القراءة</li>
        <li>التعليم المستمر</li>
        </ul>
        `;
        break;

        case "extra":

        html = `
        <h2>⭐ لمحة إضافية</h2>

        <p>

مسئول مشتريات محترف يمتلك خبرة في إدارة عمليات الشراء والتوريد بكفاءة عالية، مع قدرة متميزة على التفاوض وبناء علاقات قوية مع الموردين لتحقيق أفضل جودة بأقل التكاليف.

<br><br>

يتمتع بمهارات تحليلية وتنظيمية قوية، وخبرة في متابعة المخزون وإدارة العقود وضمان استمرارية التوريد وفق أعلى معايير الجودة والالتزام.

        </p>
        `;
        break;        case "qualification":

        html = `
        <h2>🎓 المؤهلات العلمية</h2>

        <ul>

        <li>2017 - 2021 : جامعة الزقازيق — ليسانس حقوق.</li>

        <li>2021 - 2022 : نقابة المحامين بالشرقية — دبلومة الإدارة القانونية للشركات.</li>

        </ul>
        `;
        break;

        case "experience":

        html = `
        <h2>💼 الخبرات العملية</h2>

        <h3>مجموعة شركات النجم الذهبي (2023 - 2025)</h3>

        <p><b>المسمى الوظيفي:</b> مدير مشتريات</p>

        <ul>

        <li>البحث عن الموردين والتعامل معهم.</li>

        <li>مقارنة الأسعار والعروض واختيار الأفضل.</li>

        <li>التفاوض على الأسعار وشروط الدفع والتوريد.</li>

        <li>إصدار أوامر الشراء ومتابعتها.</li>

        <li>التأكد من مطابقة الخامات والمنتجات للمواصفات.</li>

        </ul>

        <hr>

        <h3>شركة أستر (2025 - 2026)</h3>

        <p><b>المسمى الوظيفي:</b> مسئول مشتريات</p>

        <ul>

        <li>متابعة المخزون وتحديد الاحتياجات.</li>

        <li>التنسيق مع المخازن والحسابات والإدارات الأخرى.</li>

        <li>إعداد تقارير المصروفات والمشتريات.</li>

        <li>متابعة العقود والفواتير.</li>

        <li>حل مشاكل التأخير أو نقص التوريد.</li>

        <li>تقليل التكاليف مع الحفاظ على الجودة.</li>

        </ul>
        `;
        break;

        case "skills":

        html = `
        <h2>⭐ المهارات الاحترافية</h2>

        <ul>

        <li>الإشراف على العمال</li>

        <li>الإدارة الفعالة</li>

        <li>إدارة المصانع</li>

        <li>Zoho ERP</li>

        <li>Odoo ERP</li>

        <li>Oracle ERP</li>

        </ul>
        `;
        break;

    }

    popupContent.innerHTML = html;
    popup.style.display = "flex";

}
