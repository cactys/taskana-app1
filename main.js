const inputSearch = document.querySelector('#header-search')
const buttonSearch = document.querySelector('.button-search')
const buttonClose = document.querySelector('.button-dagger')
const form = document.querySelector('#form')


form.addEventListener('input', () => {
    

    if (inputSearch.value !== '') {
        buttonClose.classList.remove('none')
        buttonSearch.classList.add('none')
    } else {
        buttonClose.classList.add('none')
        buttonSearch.classList.remove('none')
    }

    console.log(inputSearch.value);
})