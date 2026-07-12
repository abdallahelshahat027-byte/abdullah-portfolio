// =========================
// POPUP SYSTEM
// =========================

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

let currentLang = "ar";

const content = {

exp: {
ar: `مسؤول مشتريات | بوابة السيارة
• تحقيق وفورات 12%
• إدارة Odoo و Zoho
• تقليل العجز لأقل من 2%

مسؤول مشتريات | النجم الذهبي
• تطوير الموردين
• تحسين العقود
• تقليل التكاليف`,
en: `Procurement Officer | Car Gate
• Achieved 12% savings
• Managed Odoo & Zoho ERP
• Reduced shortage below 2%

Procurement Officer | Golden Star
• Supplier development
• Contract optimization
• Cost reduction`
},

vision: {
ar: `العقود أداة لحماية الشركة وتقليل المخاطر.
الموردين شركاء نجاح.`,
en: `Contracts protect the company and reduce risks.
Suppliers are success partners.`
},

philosophy: {
ar: `أعتمد على TCO وليس السعر فقط.`,
en: `I focus on total cost of ownership (TCO), not just price.`
},

skills: {
ar: `ERP - تفاوض - تحليل بيانات - إدارة مخزون`,
en: `ERP - Negotiation - Data Analysis - Inventory Management`
},

edu: {
ar: `حقوق - جامعة الزقازيق
دبلومة قانونية`,
en: `Law - Zagazig University
Legal Diploma`
},

lang: {
ar: `عربي - إنجليزي`,
en: `Arabic - English`
},

hobbies: {
ar: `قراءة - تعلم - تكنولوجيا`,
en: `Reading - Learning - Technology`
},

challenge: {
ar: `حل أزمة نقص خامات وتقليل زمن التوريد 30%`,
en: `Solved material shortage crisis and reduced lead time by 30%`
},

kpi: {
ar: `خفض التكاليف 15% - دقة مخزون 98%`,
en: `Reduced cost by 15% - Inventory accuracy 98%`
},

contact: {
ar: `الرياض - السعودية
0565120349
Abdallahelshahat027@gmail.com`,
en: `Riyadh - Saudi Arabia
0565120349
Abdallahelshahat027@gmail.com`
}

};

// =========================
// OPEN POPUP
// =========================

function openBox(type){
  popup.style.display = "flex";

  if(content[type]){
    popupText.innerText = content[type][currentLang];
  }else{
    popupText.innerText = "No Data";
  }
}

// =========================
// CLOSE POPUP
// =========================

function closeBox(){
  popup.style.display = "none";
}

// =========================
// CLOSE ON OUTSIDE CLICK
// =========================

window.onclick = function(e){
  if(e.target === popup){
    closeBox();
  }
};

// =========================
// LANGUAGE SWITCH
// =========================

const langBtn = document.getElementById("langToggle");

langBtn.onclick = () => {

  currentLang = currentLang === "ar" ? "en" : "ar";

  // تغيير النصوص
  document.querySelectorAll("[data-ar]").forEach(el=>{
    el.innerText = el.getAttribute("data-" + currentLang);
  });

  // تغيير زر اللغة
  langBtn.innerText = currentLang === "ar" ? "EN" : "AR";

};
