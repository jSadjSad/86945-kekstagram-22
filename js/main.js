'use strict';


// Получение случайного числа в заданном интервале (не включая max)
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomArbitrary = function(min, max) {
  if (min > max) {
    return 'Правильно введите границы диапазона';
  }
  return Math.random() * (max - min) + min;
}

alert('getRandomArbitrary (1, 150) - ' + getRandomArbitrary(1, 150));


// Получение случайного числа с плавающей точкой из диапазона с указанным количеством знаков после запятой

const getRandomArbitraryFloat = function(min, max, n) {
  if (min > max) {
    return 'Правильно введите границы диапазона';
  }
  return +((Math.random() * (max - min) + min).toFixed(n));
}

alert('getRandomArbitraryFloat (1, 150, 2) - ' + getRandomArbitraryFloat(1, 150, 2));

// Проверка нажатой клавиши


//Кекстаграм

// Получение целого числа в заданном интервале (включительно)
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomIntInclusive = function(min, max) {
  if (min > max) {
    return 'Правильно введите границы диапазона';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert('getRandomIntInclusive (1, 150) - ' + getRandomIntInclusive(1, 150));

//Проверка максимальной длины строки

const checkTextLength = function(text, max) {
  if (text.length <= max) {
    return true;
  }
  return false;
}

alert('checkTextLength ("Тра-та-та", 140) - ' + checkTextLength('Тра-та-та', 140));
