// =========================
// منع أي كود قديم يشتغل
// =========================
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Popup System
    // =========================

    window.openSection = function(id){

        let section = document.getElementById(id);

        if(section){

            let popup = document.getElementById("popup");
            let content = document.getElementById("popupContent");

            // فضي القديم
            content.innerHTML = "";

            // انسخ المحتوى
            content.innerHTML = section.innerHTML;

            // افتح البوب
            popup.style.display = "flex";
        }
    }

    window.closePopup = function(){
        document.getElementById("popup").style.display = "none";
    }

    // =========================
    // قفل البوب لما تدوس بره
    // =========================
    document.addEventListener("click", function(e){

        let popup = document.getElementById("popup");

        if(e.target === popup){
            popup.style.display = "none";
        }

    });

    // =========================
    // منع أي Sections تظهر لوحدها
    // =========================
    let sections = document.querySelectorAll(".section-content");

    sections.forEach(sec => {
        sec.style.display = "none";
    });

});
