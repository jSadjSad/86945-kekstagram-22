'use strict';

const PHOTOS_AMOUNT = 25;
const COMMENTS_AMOUNT = 10;
const AVATARS_AMOUNT = 6;
const MESSAGES_MAX_AMOUNT = 2;

const PHOTO_DESCRIPTIONS = ['Пляж рядом с отелем', 'Go to the beach', 'Пляж с белым песочком', 'Девушка в бикини с фотоаппаратом', 'Прикольные рисовые человечки', 'Бэтмобиль',  'Клубника', 'Морс и ягодки',  'Самолет над пляжем', 'Галошница на колесиках', 'Дорога к морю', 'Белая AUDI посреди деревни', 'Странное блюдо из непонятно чего с офощами', 'Суши-кот', 'На диване в сапогах', 'Над облаками', 'Симфонический оркестр', 'Раритет', 'Тапки с подсветкой', 'Отель и пальмы', 'Вкусно и полезно', 'Закат над морем', 'Милашка-крабик', 'We will rock you', 'Дефендер и бегемоты'];

const COMMMENTATORS_NAMES = ['Донна Роза Дальвадорес', 'Труфальдино', 'Фигаро', 'Руслан', 'Людмила', 'Вахмурка', 'Гржимелик', 'Шерлок Холмс', 'Джон Ватсон', 'Генри Баскервиль', 'ВанХельсинг', 'Влад Цепеш', 'Игорь Иванович Печкин', 'Доктор Айболит', 'Бармалей', 'Джейсон Борн', 'Джеймс Бонд', 'Воландеморт'];

const COMMMENTATORS_MESSAGES = [ 'Всё отлично!',  'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Получаем случайное целое число
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

// Генерируем комментарий
const createComment = (photoID, commentNumber) => {
  const randomNumber = getRandomIntInclusive(0, COMMMENTATORS_NAMES.length - 1);
  const getAvatarNumber = (randomNumber) => {
    if ((randomNumber + 1) <= (AVATARS_AMOUNT)) {
      return randomNumber + 1;
    }
    return getAvatarNumber(randomNumber - AVATARS_AMOUNT);
  }
  return {
    id: photoID * 10 + commentNumber,
    avatar: 'img/avatar-' + (getAvatarNumber(randomNumber)) + '.svg',
    message: (createRandomArrayFromArray(COMMMENTATORS_MESSAGES, 1, MESSAGES_MAX_AMOUNT)).join(' '),
    name: COMMMENTATORS_NAMES[randomNumber],
  }
}

// Генерируем массив комментариев
const createCommentsList = (commentsMaxNumber, photoID) => {
  let randomNumber = getRandomIntInclusive (1, commentsMaxNumber);
  let commentsList = [];
  for (let i = 1; i <= randomNumber; i++) {
    commentsList.push(createComment(photoID, i));
  }
  return commentsList;
}

// Генерируем профиль фотографии
const createPhotoProfile = (photoProfileNumber) => {
  return {
    id: (photoProfileNumber + 1),
    url: 'photos/' + (photoProfileNumber + 1) + '.jpg',
    description: PHOTO_DESCRIPTIONS[photoProfileNumber],
    likes: getRandomIntInclusive (15, 200),
    comments: createCommentsList(COMMENTS_AMOUNT, (photoProfileNumber + 1)),
  }
}

// Генерируем массив профилей
const createPhotoProfileList = () => {
  return new Array(PHOTOS_AMOUNT).fill(null).map((createPhotoProfileList, index) => createPhotoProfile(index));
}

createPhotoProfileList();
