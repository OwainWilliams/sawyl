const darkModeBtn: HTMLButtonElement = document.querySelector('.darkmodeToggle') as HTMLButtonElement;
const body: HTMLBodyElement = document.body as HTMLBodyElement;

const toggleDarkMode = () : void => {

    body.classList.toggle('dark-mode');
    darkModeBtn.classList.toggle('__active');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        return;
    }

    localStorage.setItem('theme', 'light');
}

darkModeBtn.addEventListener('click', toggleDarkMode);

window.onload = () : void => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        darkModeBtn.classList.add('__active');
    }
}