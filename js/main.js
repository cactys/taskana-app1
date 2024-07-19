
import { weatherInfo } from './cardAdd.js';
import { getWeatherHours } from './sliderAdd.js';
import { getWeatherDays } from './sliderAdd.js'

const inputSearch = document.querySelector('#header-search')
const buttonSearch = document.querySelector('.search')
const buttonClose = document.querySelector('.dagger')
const form = document.querySelector('#form')
const sliderTop = document.querySelector('.slider__top')
const selectorHours = document.querySelector('#selector-hours')
const selectorDays = document.querySelector('#selector-days')
const reverseHours = document.querySelector('.slider__change--hours')
const reverseDays = document.querySelector('.slider__change--days')
const swiperHours = document.querySelector('.swiper-wrapper--hours')
const swiperDays = document.querySelector('.swiper-wrapper--days')

swiperHours.insertAdjacentHTML('beforeend',getWeatherHours.join(''))

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
        swiperHours.classList.add('none')
        swiperDays.classList.remove('none')
        selectorDays.classList.add('slider__top--active')
        selectorHours.classList.remove('slider__top--active')
        swiperDays.insertAdjacentHTML('beforeend',getWeatherDays.join(''))
        

    }else if(event.target === selectorHours){
        swiperHours.classList.remove('none')
        swiperDays.classList.add('none')
        selectorDays.classList.remove('slider__top--active')
        selectorHours.classList.add('slider__top--active')
        swiperHours.insertAdjacentHTML('beforeend',getWeatherHours.join(''))
    }
}


inputSearch.addEventListener('keydown',keyEnterHandler );
form.addEventListener('input',formInputHandler)
buttonClose.addEventListener('click',closeClickHandler)
sliderTop.addEventListener('click',selectorHandler)







