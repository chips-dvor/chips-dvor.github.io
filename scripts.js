// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    
    if (burger) {
        burger.addEventListener('click', function() {
            menu.classList.toggle('header__menu--active');
        });
    }

    // Закрытие меню при клике на пункт меню
    const menuLinks = document.querySelectorAll('.header__menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('header__menu--active');
        });
    });

    // Табы для планов тренировок (если они есть на странице)
    const tabs = document.querySelectorAll('.training__tab');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Удаляем активный класс у всех табов
                tabs.forEach(t => t.classList.remove('training__tab--active'));
                // Добавляем активный класс текущему табу
                this.classList.add('training__tab--active');
                
                // Скрываем все контенты
                const contents = document.querySelectorAll('.training__content');
                contents.forEach(content => content.classList.remove('training__content--active'));
                
                // Показываем нужный контент
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('training__content--active');
            });
        });
    }
});