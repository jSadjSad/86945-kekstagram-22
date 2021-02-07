'use strict';


// Получение случайного числа в заданном интервале (не включая max)
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// const getRandomArbitrary = function(min, max) {
//   if (min > max) {
//     return 'Правильно введите границы диапазона';
//   }
//   return Math.random() * (max - min) + min;
// }
//
// alert('getRandomArbitrary (1, 150) - ' + getRandomArbitrary(1, 150));


// Получение случайного числа с плавающей точкой из диапазона с указанным количеством знаков после запятой

// const getRandomArbitraryFloat = function(min, max, n) {
//   if (min > max) {
//     return 'Правильно введите границы диапазона';
//   }
//   return +(getRandomArbitrary(min, max).toFixed(n));
// }
//
// alert('getRandomArbitraryFloat (1, 150, 2) - ' + getRandomArbitraryFloat(1, 150, 2));

// Проверка нажатой клавиши


//Кекстаграм

// Получение целого числа в заданном интервале (включительно)
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// const getRandomIntInclusive = function(min, max) {
//   if (min > max) {
//     return 'Правильно введите границы диапазона';
//   }
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// alert('getRandomIntInclusive (1, 150) - ' + getRandomIntInclusive(1, 150));
//
// //Проверка максимальной длины строки
//
// const checkTextLength = function(text, max) {
//   return text.length <= max;
// }
//
// alert('checkTextLength ("Тра-та-та", 140) - ' + checkTextLength('Тра-та-та', 140));


const PHOTOS_AMOUNT = 25;
const COMMENTATORS_AMOUNT = 6;
const COMMENTS_MAX_AMOUNT = 2;
const MAX_COMMENTATOR_ID = 300;

const PHOTO_DESCRIPTIONS = ['Пляж рядом с отелем', 'Go to the beach', 'Пляж с белым песочком', 'Девушка в бикини с фотоаппаратом', 'Прикольные рисовые человечки', 'Бэтмобиль',  'Клубника', 'Морс и ягодки',  'Самолет над пляжем', 'Галошница на колесиках', 'Дорога к морю', 'Белая AUDI посреди деревни', 'Странное блюдо из непонятно чего с офощами', 'Суши-кот', 'На диване в сапогах', 'Над облаками', 'Симфонический оркестр', 'Раритет', 'Тапки с подсветкой', 'Отель и пальмы', 'Вкусно и полезно', 'Закат над морем', 'Милашка-крабик', 'We will rock you', 'Дефендер и бегемоты'];

const COMMMENTATORS_NAMES = ['Донна Роза Дальвадорес', 'Труфальдино', 'Фигаро', 'Тристан', 'Изльда', 'Кармен', 'Руслан', 'Людмила', 'Вахмурка', 'Гржимелик', 'Иван Бровкин', 'Йозеф Швейк', 'Шерлок Холмс', 'Джон Ватсон', 'Генри Баскервиль', 'ВанХельсинг', 'Влад Цепеш', 'Матроскин', 'Дядя Федор', 'Шарик', 'Игорь Иванович Печкин', 'Доктор Айболит', 'Бармалей', 'Джейсон Борн', 'Джеймс Бонд', 'Воландеморт'];

const COMMMENTATORS_MESSAGES = [ 'Всё отлично!',  'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Получаем случайное целое число
const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получаем массив случайных чисел
const createRandomNumbersArray = function (n, min, max) {
  let array = [];
  while (n > 0) {
    let randomNumber = getRandomIntInclusive(min, max);
    if (array.some !== randomNumber ) {
      array.push(randomNumber);
    }
    n--;
  }
  return array;
}

// Получаем массив случайных элементов из другого массива
const createRandomArrayFromArray = function(sourceArray, minAmount, maxAmount) {
  let elementsAmount = getRandomIntInclusive(minAmount, maxAmount);
  let elements = [];
  while (elementsAmount > 0) {
    let element = sourceArray[getRandomIntInclusive(0, sourceArray.length - 1)];
    if (!elements.includes(element)) {
      elements.push(element);
      elementsAmount--;
    }
  }
  return elements;
}

// Получаем случайное значение id
let RandomNumbers = createRandomNumbersArray(COMMMENTATORS_NAMES.length, 1, MAX_COMMENTATOR_ID);


// Генерируем комментарий
const createComment = function(count) {
  return {
    id: RandomNumbers[count],
    avatar: 'img/avatar-' + count + '.svg',
    message: (createRandomArrayFromArray(COMMMENTATORS_MESSAGES, 1, COMMENTS_MAX_AMOUNT)).join(' '),
    name: COMMMENTATORS_NAMES[getRandomIntInclusive(0, COMMMENTATORS_NAMES.length - 1)],
  }
}

// Генерируем массив комментариев
const createCommentsList = function(num) {
  let randomNumber = getRandomIntInclusive (1, num);
  let commentsList = [];
  for (let i = 1; i <= randomNumber; i++) {
    commentsList.push(createComment(i));
  }
  return commentsList;
}

// Генерируем профиль фотографии
const createPhotoProfile = function(number) {
  return {
    id: (number + 1),
    url: 'photos/' + (number + 1) + '.jpg',
    description: PHOTO_DESCRIPTIONS[number],
    likes: getRandomIntInclusive (15, 200),
    comments: createCommentsList(COMMENTATORS_AMOUNT),
  }
}

// Генерируем массив профилей
// const createPhotoProfileList = function(photosAmount) {
//   let photoProfileList = [];
//   for (let i = 1; i <= photosAmount; i++) {
//     photoProfileList.push(createPhotoProfile(i));
//   }
//   return photoProfileList;
// }


const createPhotoProfileList = function() {
  let photoProfileList = new Array(PHOTOS_AMOUNT).fill(null).map((photoProfileList, index) => createPhotoProfile(index));
  return photoProfileList
}

createPhotoProfileList();
