'use strict';


// Получение случайного числа в заданном интервале (не включая max)
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomArbitrary = function(min, max) {
  if (min > max) {
    return 'Правильно введите границы диапазона';
  }
  return Math.random() * (max - min) + min;
}


// Получение случайного числа с плавающей точкой из диапазона с указанным количеством знаков после запятой

const getRandomArbitraryFloat = function(min, max, n) {
  if (min > max) {
    return 'Правильно введите границы диапазона';
  }
  return +((Math.random() * (max - min) + min).toFixed(n));
}


// Проверка нажатой клавиши

const isEscKeycode = function(evt) {
  const ESK_KEYCODE = 27;
  return evt.keyCode === ESK_KEYCODE;
}

const isEnterKeycode = function(evt) {
  const ENTER_KEYCODE = 13;
  return evt.keyCode === ENTER_KEYCODE;
}



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


//Проверка максимальной длины строки

const checkTextLength = function(text, max) {
  if (text.length <= max) {
    return true;
  }
  return false;
}
