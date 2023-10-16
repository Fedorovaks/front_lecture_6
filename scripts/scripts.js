
const btnMobile = document.querySelector(".btn-mobile");
const popup = document.querySelector(".popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const listContent = document.querySelector(".main-container__list").cloneNode(1);
const navContent = document.querySelector(".nav-content").cloneNode(1);

// При клике на иконку btn вызываем ф-ию btnbHandler
btnMobile.addEventListener("click", btnHandler);

// Выполняем действия при клике ..
function btnHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    btnMobile.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(listContent);
    popup.appendChild(navContent);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(listContent.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    btnMobile.classList.remove("active");
    body.classList.remove("noscroll");
}


// Реализация меню в шапке
const btnMenu = document.querySelector(".logo__btn");
const menu = document.querySelector(".menu");
const headCustomButton = document.querySelector(".head__custom-button");
const buttonSubscription = document.querySelector(".head__button-subscription");
const formSearch = document.querySelector(".form-search");
const headAuthLink = document.querySelector(".head__auth-link");

btnMenu.addEventListener("click", openMenu);

function openMenu(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    btnMenu.classList.remove("fa-bars");
    btnMenu.classList.toggle("fa-window-close");
    if(btnMenu.classList.contains('fa-window-close')){
    
        menu.classList.toggle("open");
        headCustomButton.classList.toggle("open");
        buttonSubscription.classList.toggle("open");
        formSearch.classList.toggle("open");
        headAuthLink.classList.toggle("open");

    }
    else{
        btnMenu.classList.toggle("fa-bars");  
        menu.classList.remove("open");
        headCustomButton.classList.remove("open");
        buttonSubscription.classList.remove("open");
        formSearch.classList.remove("open");
        headAuthLink.classList.remove("open");
    }
    
}   