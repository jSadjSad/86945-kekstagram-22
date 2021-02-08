'use strict';

const PHOTOS_AMOUNT = 25;
const COMMENTATORS_AMOUNT = 6;
const MESSAGES_MAX_AMOUNT = 2;
const MAX_COMMENTATOR_ID = 300;

const PHOTO_DESCRIPTIONS = ['Пляж рядом с отелем', 'Go to the beach', 'Пляж с белым песочком', 'Девушка в бикини с фотоаппаратом', 'Прикольные рисовые человечки', 'Бэтмобиль',  'Клубника', 'Морс и ягодки',  'Самолет над пляжем', 'Галошница на колесиках', 'Дорога к морю', 'Белая AUDI посреди деревни', 'Странное блюдо из непонятно чего с офощами', 'Суши-кот', 'На диване в сапогах', 'Над облаками', 'Симфонический оркестр', 'Раритет', 'Тапки с подсветкой', 'Отель и пальмы', 'Вкусно и полезно', 'Закат над морем', 'Милашка-крабик', 'We will rock you', 'Дефендер и бегемоты'];

const COMMMENTATORS_NAMES = ['Донна Роза Дальвадорес', 'Труфальдино', 'Фигаро', 'Тристан', 'Изольда', 'Кармен', 'Руслан', 'Людмила', 'Вахмурка', 'Гржимелик', 'Иван Бровкин', 'Йозеф Швейк', 'Шерлок Холмс', 'Джон Ватсон', 'Генри Баскервиль', 'ВанХельсинг', 'Влад Цепеш', 'Матроскин', 'Дядя Федор', 'Шарик', 'Игорь Иванович Печкин', 'Доктор Айболит', 'Бармалей', 'Джейсон Борн', 'Джеймс Бонд', 'Воландеморт'];

const COMMMENTATORS_MESSAGES = [ 'Всё отлично!',  'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Получаем случайное целое число
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получаем массив случайных чисел
const createRandomNumbersArray = (n, min, max) => {
  let array = [];
  while (n > 0) {
    let randomNumber = getRandomIntInclusive(min, max);
    // if (!array.includes(randomNumber)) {
    if (!array.some(element => element == randomNumber)) {
      array.push(randomNumber);
    }
    n--;
  }
  return array;
}

// Получаем массив случайных элементов из другого массива
const createRandomArrayFromArray = (sourceArray, minAmount, maxAmount) => {
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

// Генерируем массив ID комментаторов
const COMMMENTATORS_ID = createRandomNumbersArray(COMMMENTATORS_NAMES.length, 1, MAX_COMMENTATOR_ID);

// Генерируем комментарий
const createComment = (count) => {
  const randomNumber = getRandomIntInclusive(0, COMMMENTATORS_NAMES.length - 1);
  return {
    id: COMMMENTATORS_ID[randomNumber],
    avatar: 'img/avatar-' + count + '.svg',
    message: (createRandomArrayFromArray(COMMMENTATORS_MESSAGES, 1, MESSAGES_MAX_AMOUNT)).join(' '),
    name: COMMMENTATORS_NAMES[randomNumber],
  }
}

// Генерируем массив комментариев
const createCommentsList = (num) => {
  let randomNumber = getRandomIntInclusive (1, num);
  let commentsList = [];
  for (let i = 1; i <= randomNumber; i++) {
    commentsList.push(createComment(i));
  }
  return commentsList;
}

// Генерируем профиль фотографии
const createPhotoProfile = (number) => {
  return {
    id: (number + 1),
    url: 'photos/' + (number + 1) + '.jpg',
    description: PHOTO_DESCRIPTIONS[number],
    likes: getRandomIntInclusive (15, 200),
    comments: createCommentsList(COMMENTATORS_AMOUNT),
  }
}

// Генерируем массив профилей
const createPhotoProfileList = () => {
  return new Array(PHOTOS_AMOUNT).fill(null).map((createPhotoProfileList, index) => createPhotoProfile(index));
}

createPhotoProfileList();
