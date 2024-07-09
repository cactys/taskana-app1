const inputSearch = document.querySelector('#header-search')
const buttonSearch = document.querySelector('.search')
const buttonClose = document.querySelector('.dagger')
const form = document.querySelector('#form')


form.addEventListener('input', () => {
    console.log(inputSearch.value);
})

buttonClose.addEventListener('click',(event) =>{
    event.preventDefault()
    inputSearch.value = '';
    buttonClose.classList.add('none')
    buttonSearch.classList.remove('none')
})

inputSearch.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log(inputSearch.value);
    }
});

inputSearch.addEventListener('focus', () => {
    buttonClose.classList.remove('none')
    buttonSearch.classList.add('none')
   
})

