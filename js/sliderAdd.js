import { sliderHours } from './variable.js';
import { sliderdays } from './variable.js';


export const getWeatherHours = sliderHours.map((item) => {

    return `
        <article class="swiper__item">
            <time class="swiper__time">${item.time}</time>
            <img class="swiper__img" src="${item.img}" alt="погода">
            <span class="swiper__value">${item.value + item.smv}</span>
        </article>`;
 
});

export const getWeatherDays = sliderdays.map((item) => {

    return `
        <article class="swiper__item swiper__item--days">
            <time class="swiper__time ">${item.data}</time>
            <img class="swiper__img" src="${item.img}" alt="погода">
            <span class="swiper__value">${item.range}</span>
        </article>`;
 
});

