const searchBar: HTMLDivElement = document.querySelector('.searchbar') as HTMLDivElement;
const searchBarToggle: HTMLButtonElement = document.querySelector('.searchbarToggle') as HTMLButtonElement;
const searchBarInput: HTMLInputElement = document.querySelector('.searchbar-form > input') as HTMLInputElement;

const toggleSearch: () => void = () => {
    if (searchBar.classList.contains('__active')) {
        searchBar.classList.remove('__active');
        searchBarInput.value = "";
    } else {
        searchBar.classList.add('__active');
        searchBarInput.focus();
    }
}

searchBarToggle.addEventListener('click', toggleSearch);