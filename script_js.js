// 頁面切換功能
function showPage(pageId) {
    // 隱藏所有頁面
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // 顯示選中的頁面
    document.getElementById(pageId).classList.add('active');
    
    // 更新導航連結狀態
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // 如果是首頁，則將首頁導航設為active
    if (pageId === 'home') {
        const homeLink = document.querySelector('.nav-links a[onclick*="home"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    } else {
        // 其他頁面則設定對應的導航為active
        if (event && event.target) {
            event.target.classList.add('active');
        }
    }
}

// FAQ展開/摺疊功能
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    answer.classList.toggle('show');
    
    // 添加動畫效果
    if (answer.classList.contains('show')) {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

// 當頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    
    // 表單提交處理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感謝您的訊息！我們會盡快回覆您。');
            this.reset();
        });
    }

    // 課程報名按鈕處理
    const courseButtons = document.querySelectorAll('.course-card .submit-btn');
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('感謝您的報名！我們會盡快與您聯繫確認課程時間。');
        });
    });

    // 平滑滾動到頂部
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 初始化：確保首頁為活躍狀態
    const homeNavLink = document.querySelector('.nav-links a[onclick*="home"]');
    if (homeNavLink) {
        homeNavLink.classList.add('active');
    }
});

// 響應式導航處理（如果需要的話）
function handleMobileNav() {
    // 這裡可以添加手機版導航選單的處理邏輯
    // 例如漢堡選單的開關等
}

// 平滑進入動畫
function animateOnScroll() {
    const cards = document.querySelectorAll('.article-card, .course-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// 滾動事件監聽
window.addEventListener('scroll', animateOnScroll);

// 初始化動畫
document.addEventListener('DOMContentLoaded', function() {
    // 設置初始狀態
    const cards = document.querySelectorAll('.article-card, .course-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 觸發動畫
    setTimeout(animateOnScroll, 100);
});
