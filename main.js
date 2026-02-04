function loadComponents() {
    // 1. 載入 Nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        // 使用 ./nav.html 確保路徑相對正確
        fetch('./nav.html')
            .then(res => {
                if (!res.ok) throw new Error('找不到 nav.html');
                return res.text();
            })
            .then(data => {
                navPlaceholder.innerHTML = data;
                initNavLogic(); 
            })
            .catch(err => console.error("Nav 載入失敗:", err));
    }

    // 2. 載入 Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('./footer.html')
            .then(res => res.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(err => console.error("Footer 載入失敗:", err));
    }
}

function initNavLogic() {
    const hb = document.getElementById('hamburger-btn');
    const menu = document.getElementById('mobile-nav-panel');
    const trigger = document.getElementById('mobile-sub-trigger');
    const subBox = document.getElementById('mobile-sub-box');

    // 定義手機版下拉選單的內容 (確保這裡跟你的 nav 結構匹配)
    const subHtml = `
        <a href="wgs.html" class="sub-item">WGS 全基因體檢測</a>
        <a href="wes.html" class="sub-item">WES 外顯體基因檢測</a>
        <a href="height.html" class="sub-item">身高管理</a>
        <a href="sleep.html" class="sub-item">睡眠追蹤</a>
    `;

    // 漢堡選單點擊
    if (hb) {
        hb.onclick = (e) => {
            e.stopPropagation();
            menu.classList.toggle('show');
        };
    }

    // 手機版「檢測」子選單點擊
    if (trigger) {
        trigger.onclick = (e) => {
            e.stopPropagation();
            // 如果裡面沒東西，就塞入內容
            if (!subBox.innerHTML.trim()) {
                subBox.innerHTML = subHtml;
            }
            subBox.classList.toggle('active');
        };
    }
    
    // 點擊空白處關閉選單
    document.onclick = (e) => {
        if (menu && menu.classList.contains('show') && !menu.contains(e.target) && e.target !== hb) {
            menu.classList.remove('show');
        }
    };
}

document.addEventListener('DOMContentLoaded', loadComponents);
