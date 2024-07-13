import { weatherInfo } from './card-info.js';
import { swiperOne } from './slider.js';
import { swiperTWo } from './slider.js';

const inputSearch = document.querySelector('#header-search')
const buttonSearch = document.querySelector('.search')
const buttonClose = document.querySelector('.dagger')
const form = document.querySelector('#form')
const sliderTop = document.querySelector('.slider__top')
const selectorHours = document.querySelector('#selector-hours')
const selectorDays = document.querySelector('#selector-days')
const reverse1 = document.querySelector('.slider__change--one')
const reverse2 = document.querySelector('.slider__change--two')

function formInputHandler(){
    console.log(inputSearch.value);
    buttonClose.classList.remove('none')
    buttonSearch.classList.add('none')
}
function closeClickHandler(event){
    event.preventDefault()
    inputSearch.value = '';
    buttonClose.classList.add('none')
    buttonSearch.classList.remove('none')
}

function keyEnterHandler(event){
    if (event.key === 'Enter') {
        console.log(inputSearch.value);
    } 
}
function selectorHandler(event){
    if(event.target === selectorDays){
        reverse1.classList.add('none')
        reverse2.classList.remove('none')
        selectorDays.classList.add('slider__top--active')
        selectorHours.classList.remove('slider__top--active')

    }else if(event.target === selectorHours){
        reverse1.classList.remove('none')
        reverse2.classList.add('none')
        selectorDays.classList.remove('slider__top--active')
        selectorHours.classList.add('slider__top--active')
    }
}

inputSearch.addEventListener('keydown',keyEnterHandler );
form.addEventListener('input',formInputHandler)
buttonClose.addEventListener('click',closeClickHandler)
sliderTop.addEventListener('click',selectorHandler)







