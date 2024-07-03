inputSearch = document.querySelector('#header-search')
buttonSearch = document.querySelector('.button-search')
buttonClose = document.querySelector('.button-dagger')


inputSearch.addEventListener('input', () => {
    

    if (inputSearch.value !== '') {
        buttonClose.classList.remove('none')
        buttonSearch.classList.add('none')
    } else {
        buttonClose.classList.add('none')
        buttonSearch.classList.remove('none')
    }

    console.log(inputSearch.value);
})