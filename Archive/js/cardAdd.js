import { weatherData } from './variable.js';

export const getWeatherData = weatherData.map((item, index) => {
    const maxRangeValue = item.name === 'pressure' ? 1000 : 100;
    const additionalClass = item.title === 'Давление' ? 'weather__item-range weather__item-range_gradient' : 'weather__item-range';
  

    let progressValueText;
    if (item.title === 'Давление') {
      progressValueText = item.value > 50 ? 'повышенное' : 'нормальное';
    } else if (item.title === 'Видимость') {
      progressValueText = item.value > 20 ? 'Нормальная' : ' Пониженая';
    } else if (item.title === 'Рассвет' || item.title === 'Закат') {
      progressValueText = `Прошло: ${item.remainingTime}`;
    } else if (item.title === 'Сила ветра') {
      progressValueText = item.direction;
    }
  
    const textBar = () => {
      if (item.title === 'Влажность') {
        return `
            <input type="range" id="${item.name}-range" class="weather__item-range" value = '${item.value}' min="0" max="${maxRangeValue}">
            <div class="range-borders">
              <span class="range-borders__item">0%</span>
              <span class="range-borders__item">100%</span>
            </div>`;
      } else if (item.title === 'Давление' || item.title === 'Видимость' ) {
        return `
            <input type="range" id="${item.name}-range" class="${additionalClass}" value = '${item.value}'   min="0" max="${maxRangeValue}">
              <div class="range-borders weather__status--center" >
                <span id="${item.name}-comment" class=" weather__status">${progressValueText}</span>
              </div>`;
        }else{
          return `
            <div class="range-borders weather__status--center" >
              <span id="${item.name}-comment" class=" weather__status">${progressValueText}</span>
            </div>`;
        }
        
    }
      return `
      <li key="${index}" class="weather__item">
        <article class="weather__item-content">
          <div class="weather__item-info">
            <h3 class="weather__item-title">${item.title}</h3>
            <img class="weather__item-img" src="${item.img}" alt="${item.title}">
            <span class="weather__item-value">${item.value + ' ' + item.smv}</span>
          </div>
          <div class="weather__item-comment">
            ${textBar()}
          </div>
        </article>
      </li>`;
  });
  
  export const weatherInfo = (document.querySelector('.weather__card').insertAdjacentHTML('beforeend',getWeatherData.join('')));

  