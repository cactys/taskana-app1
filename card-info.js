const humidity = document.querySelector('#humidity');
const barometr = document.querySelector('#barometr');
const visibility = document.querySelector('#visibility');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const wind = document.querySelector('#wind');
const barometrComment = document.querySelector('#barometr-comment');
const visibilityComment = document.querySelector('#visibility-comment');
const sunriseComment = document.querySelector('#sunrise-comment');
const sunsetComment = document.querySelector('#sunset-comment');
const windComment = document.querySelector('#wind-comment');
const inputRange = document.querySelector('#range');


const anyVariable =  {
    humidity : '22',
    barometr : '761',
    visibility :'28',
    sunrise: '8:42',
    sunset: '16:37',
    wind: '2',
    barometrComment:'Повышенное',
    visibilityComment:'Нормальная',
    sunriseComment:'02:47',
    sunsetComment:'05:08',
    windComment:'Cеверо-западный',
}

// заполняем значениям
humidity.innerText = anyVariable.humidity
barometr.innerText = anyVariable.barometr
visibility.innerText = anyVariable.visibility
sunrise.innerText = anyVariable.sunrise
sunset.innerText = anyVariable.sunset
wind.innerText = anyVariable.wind
barometrComment.innerText = anyVariable.barometrComment
visibilityComment.innerText = anyVariable.visibilityComment
sunriseComment.innerText = anyVariable.sunriseComment
sunsetComment.innerText = anyVariable.sunsetComment
windComment.innerText = anyVariable.windComment
inputRange.value = anyVariable.humidity


