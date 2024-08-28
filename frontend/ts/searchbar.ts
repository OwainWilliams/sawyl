const searchBar: HTMLDivElement = document.querySelector('.searchbar') as HTMLDivElement;
const searchBarForm: HTMLFormElement = document.querySelector('.searchbar-form') as HTMLFormElement;
const searchBarToggle: HTMLButtonElement = document.querySelector('.searchbarToggle') as HTMLButtonElement;
const searchBarInput: HTMLInputElement = document.querySelector('.searchbar-form > input') as HTMLInputElement;
const searchBarSubmit: HTMLButtonElement = document.querySelector('.searchbar-form > .searchbar-button') as HTMLButtonElement;

const toggleSearch: () => void = () => {
    if (searchBar.classList.contains('__active')) {
        searchBar.classList.remove('__active');
        searchBarInput.value = "";
        searchBarForm.setAttribute('aria-hidden', 'true');
        searchBarInput.setAttribute('tabindex', '-1');
        searchBarSubmit.setAttribute('tabindex', '-1');
    } else {
        searchBar.classList.add('__active');
        searchBarForm.setAttribute('aria-hidden', 'false');
        searchBarInput.setAttribute('tabindex', '0');
        searchBarSubmit.setAttribute('tabindex', '0');
        searchBarInput.focus();
    }
}

searchBarToggle.addEventListener('click', toggleSearch);