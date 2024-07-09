
const anyVariable =  {
    humidity : '70',
    barometr : '761',
    visibility :'30',
    sunrise: '8:42',
    sunset: '16:37',
    wind: '3',
    barometrComment:'Повышенное',
    visibilityComment:'Нормальная',
    sunriseComment:'02:47',
    sunsetComment:'06:08',
    windComment:'Cеверо-западный',
}
const anyValues =  {
    humidity : document.querySelector('#humidity'),
    barometr : document.querySelector('#barometr'),
    visibility : document.querySelector('#visibility'),
    sunrise: document.querySelector('#sunrise'),
    sunset: document.querySelector('#sunset'),
    wind: document.querySelector('#wind'),
    barometrComment: document.querySelector('#barometr-comment'),
    visibilityComment:document.querySelector('#visibility-comment'),
    sunriseComment:  document.querySelector('#sunrise-comment'),
    sunsetComment:document.querySelector('#sunset-comment'),
    windComment:document.querySelector('#wind-comment'),
}


// заполняем значениям
anyValues.humidity.innerText = anyVariable.humidity
anyValues.barometr.innerText = anyVariable.barometr
anyValues.visibility.innerText = anyVariable.visibility
anyValues.sunrise.innerText = anyVariable.sunrise
anyValues.sunset.innerText = anyVariable.sunset
anyValues.wind.innerText = anyVariable.wind
anyValues.barometrComment.innerText = anyVariable.barometrComment
anyValues.visibilityComment.innerText = anyVariable.visibilityComment
anyValues.sunriseComment.innerText = anyVariable.sunriseComment
anyValues.sunsetComment.innerText = anyVariable.sunsetComment
anyValues.windComment.innerText = anyVariable.windComment



