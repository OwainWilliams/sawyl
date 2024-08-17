const body: HTMLBodyElement = document.body as HTMLBodyElement;
const darkModeBtn: HTMLButtonElement = document.querySelector('.darkmodeToggle') as HTMLButtonElement;
const darkModeBtnText: HTMLSpanElement = darkModeBtn.querySelector('.button-text') as HTMLSpanElement;

const toggleDarkMode = () : void => {

    body.classList.toggle('dark-mode');
    darkModeBtn.classList.toggle('__active');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');

        darkModeBtnText.innerText = "Switch to light mode"
        return;
    }
    
    localStorage.setItem('theme', 'light');
    darkModeBtnText.innerText = "Switch to dark mode"
}

darkModeBtn.addEventListener('click', toggleDarkMode);

window.onload = () : void => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        darkModeBtn.classList.add('__active');
        darkModeBtnText.innerText = "Switch to light mode"
    }
}