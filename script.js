function toggleLanguage() {
    const isRTL = document.documentElement.dir === 'rtl';
    document.documentElement.dir = isRTL ? 'ltr' : 'rtl';
    document.documentElement.lang = isRTL ? 'en' : 'ar';
    document.querySelectorAll('[data-ar]').forEach(el => {
        el.textContent = isRTL ? el.getAttribute('data-en') : el.getAttribute('data-ar');
    });
}

function openModal(id) {
    const content = document.getElementById(id).innerHTML;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }
