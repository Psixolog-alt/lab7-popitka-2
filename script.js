document.addEventListener('DOMContentLoaded', function() {
    // Элементы навигации
    const homeBtn = document.getElementById('homeBtn');
    const catalogBtn = document.getElementById('catalogBtn');
    const servicesBtn = document.getElementById('servicesBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactsBtn = document.getElementById('contactsBtn');
    const userBtn = document.getElementById('userBtn');
    
    // Модальные окна
    const loginModal = document.getElementById('loginModal');
    const catalogModal = document.getElementById('catalogModal');
    const servicesModal = document.getElementById('servicesModal');
    const aboutModal = document.getElementById('aboutModal');
    
    // Кнопки закрытия модальных окон
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeCatalogModal = document.getElementById('closeCatalogModal');
    const closeServicesModal = document.getElementById('closeServicesModal');
    const closeAboutModal = document.getElementById('closeAboutModal');
    
    // Формы личного кабинета
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const loginFormElement = document.getElementById('loginFormElement');
    const registerFormElement = document.getElementById('registerFormElement');
    
    // Получаем все навигационные кнопки
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Функция для обновления активной кнопки
    function setActiveButton(activeBtn) {
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }
    
    // Функция для открытия модального окна
    function openModal(modal) {
        modal.style.display = 'flex';
    }
    
    // Функция для закрытия модального окна
    function closeModal(modal) {
        modal.style.display = 'none';
    }
    
    // Обработчики навигационных кнопок
    homeBtn.addEventListener('click', function() {
        setActiveButton(this);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    catalogBtn.addEventListener('click', function() {
        setActiveButton(this);
        openModal(catalogModal);
    });
    
    servicesBtn.addEventListener('click', function() {
        setActiveButton(this);
        openModal(servicesModal);
    });
    
    aboutBtn.addEventListener('click', function() {
        setActiveButton(this);
        openModal(aboutModal);
    });
    
    contactsBtn.addEventListener('click', function() {
        setActiveButton(this);
        document.querySelector('.three-columns').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Личный кабинет
    userBtn.addEventListener('click', function() {
        openModal(loginModal);
    });
    
    // Обработчики закрытия модальных окон
    closeLoginModal.addEventListener('click', function() {
        closeModal(loginModal);
    });
    
    closeCatalogModal.addEventListener('click', function() {
        closeModal(catalogModal);
    });
    
    closeServicesModal.addEventListener('click', function() {
        closeModal(servicesModal);
    });
    
    closeAboutModal.addEventListener('click', function() {
        closeModal(aboutModal);
    });
    
    // Закрытие модальных окон при клике вне их
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            closeModal(loginModal);
        }
        if (event.target === catalogModal) {
            closeModal(catalogModal);
        }
        if (event.target === servicesModal) {
            closeModal(servicesModal);
        }
        if (event.target === aboutModal) {
            closeModal(aboutModal);
        }
    });
    
    // Закрытие модальных окон по клавише ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (loginModal.style.display === 'flex') {
                closeModal(loginModal);
            }
            if (catalogModal.style.display === 'flex') {
                closeModal(catalogModal);
            }
            if (servicesModal.style.display === 'flex') {
                closeModal(servicesModal);
            }
            if (aboutModal.style.display === 'flex') {
                closeModal(aboutModal);
            }
        }
    });
    
    // Переключение между формами входа и регистрации
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });
    
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
    
    // Обработка формы входа
    loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Здесь будет реальная проверка учетных данных
        if (username && password) {
            alert(`Добро пожаловать, ${username}!`);
            userBtn.innerHTML = '<i class="fas fa-user-circle"></i> ' + username;
            closeModal(loginModal);
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    });
    
    // Обработка формы регистрации
    registerFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        
        // Здесь будет реальная регистрация
        if (name && email && password) {
            alert(`Регистрация успешна! Добро пожаловать, ${name}!`);
            userBtn.innerHTML = '<i class="fas fa-user-circle"></i> ' + name;
            closeModal(loginModal);
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    });
    
    // Плавное появление элементов при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Добавляем анимации для элементов
    const animatedElements = document.querySelectorAll('.main-photo, .text-column, .photo-item, .column');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Обновление активной кнопки при прокрутке
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const contactsSection = document.querySelector('.three-columns');
        const contactsOffset = contactsSection.offsetTop;
        
        if (scrollPosition >= contactsOffset - 200) {
            setActiveButton(contactsBtn);
        } else {
            setActiveButton(homeBtn);
        }
    });
});