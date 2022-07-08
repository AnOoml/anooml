const body = document.querySelector('body');
const typoghraphies = document.querySelectorAll('p,h1,a,button');
const header = document.querySelector('header');
const changeMode = document.querySelector('#changeMode');
const changeModeIcon = document.querySelector('#changeMode > i');
let theme = "light";

const ChangeClassName = (className1, className2, item) => {
    item.classList.toggle(className1);
    if (className2) item.classList.toggle(className2);
};

const FuncChangeMode = () => {
    if (theme === "light") { 
        theme = "dark";
        ChangeClassName('shadow-light', 'shadow-dark', header)
    } else {
        theme = "light";
        ChangeClassName('shadow-dark', 'shadow-light', header)
    };
    Object.keys(typoghraphies).map((key, index) => ChangeClassName('text-white', false, typoghraphies[key]));
    ChangeClassName('bg-dark', false, body);
    ChangeClassName('bg-dark', 'bg-light', header);
    ChangeClassName('fa-sun', 'fa-moon', changeModeIcon);
    header.style.shadow
}

changeMode.addEventListener('click', FuncChangeMode)
