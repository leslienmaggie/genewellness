// 負責載入導覽列與頁尾的通用函數
function loadComponents() {
    // 1. 載入 Nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        fetch('nav.html')
            .then(res => res.text())
            .then(data => {
                navPlaceholder.innerHTML = data;
                initNavLogic(); // 載入完後啟動漢堡選單邏輯
            });
    }

    // 2. 載入 Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(res => res.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }
}

// 漢堡選單與下拉選單邏輯
function initNavLogic() {
    const hb = document.getElementById('hamburger-btn');
    const menu = document.getElementById('mobile-nav-panel');
    const trigger = document.getElementById('mobile-sub-trigger');
    const subBox = document.getElementById('mobile-sub-box');

    if (hb) hb.onclick = (e) => { e.stopPropagation(); menu.classList.toggle('show'); };
    if (trigger) trigger.onclick = (e) => { subBox.classList.toggle('active'); };
    
    document.onclick = (e) => {
        if (menu && !menu.contains(e.target) && e.target !== hb) {
            menu.classList.remove('show');
        }
    };
}

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', loadComponents);
