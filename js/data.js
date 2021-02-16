import { getRandomIntInclusive } from './util.js';
import { createRandomArrayFromArray } from './util.js';

const photosAmount = 25;
const commentsAmount = 20;
const avatarsAmount = 6;
const messagesMaxAmount = 2;
const minLikesAmount = 15;
const maxLikesAmount = 200;
const minCommentIDAmount = 1;
let maxCommentIDAmount = 10;
const maxCommentIDAmountIncrement = 10;

const photoDescriptions = ['Пляж рядом с отелем', 'Go to the beach', 'Пляж с белым песочком', 'Девушка в бикини с фотоаппаратом', 'Прикольные рисовые человечки', 'Бэтмобиль',  'Клубника', 'Морс и ягодки',  'Самолет над пляжем', 'Галошница на колесиках', 'Дорога к морю', 'Белая AUDI посреди деревни', 'Странное блюдо из непонятно чего с офощами', 'Суши-кот', 'На диване в сапогах', 'Над облаками', 'Симфонический оркестр', 'Раритет', 'Тапки с подсветкой', 'Отель и пальмы', 'Вкусно и полезно', 'Закат над морем', 'Милашка-крабик', 'We will rock you', 'Дефендер и бегемоты'];

const commentatorsNames = ['Донна Роза Дальвадорес', 'Труфальдино', 'Фигаро', 'Руслан', 'Людмила', 'Вахмурка', 'Гржимелик', 'Шерлок Холмс', 'Джон Ватсон', 'Генри Баскервиль', 'ВанХельсинг', 'Влад Цепеш', 'Игорь Иванович Печкин', 'Доктор Айболит', 'Бармалей', 'Джейсон Борн', 'Джеймс Бонд', 'Воландеморт'];

const commentatorsMessages = [ 'Всё отлично!',  'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Получаем случайное целое число


// Генерируем комментарий
const commentIDs = [];
const createComment = () => {
  const randomNumber = getRandomIntInclusive(0, commentatorsNames.length - 1);
  const getAvatarNumber = (randomNumber) => {
    if ((randomNumber + 1) <= (avatarsAmount)) {
      return randomNumber + 1;
    }
    return getAvatarNumber(randomNumber - avatarsAmount);
  }
  const getCommentID = () => {
    if (commentIDs.length == maxCommentIDAmount) {
      maxCommentIDAmount = commentIDs.length + maxCommentIDAmountIncrement;
    }
    let commentID = getRandomIntInclusive(minCommentIDAmount, maxCommentIDAmount);
    while (commentIDs.includes(commentID)) {
      commentID = getRandomIntInclusive(minCommentIDAmount, maxCommentIDAmount);
    }
    commentIDs.push(commentID);
    return commentID;
  }

  return {
    id: getCommentID (),
    avatar: 'img/avatar-' + (getAvatarNumber(randomNumber)) + '.svg',
    message: (createRandomArrayFromArray(commentatorsMessages, 1, messagesMaxAmount)).join(' '),
    name: commentatorsNames[randomNumber],
  }
}

// Генерируем массив комментариев
const createCommentsList = (commentsMaxNumber, photoID) => {
  const randomNumber = getRandomIntInclusive (1, commentsMaxNumber);
  const commentsList = [];
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
    description: photoDescriptions[photoProfileNumber],
    likes: getRandomIntInclusive (minLikesAmount, maxLikesAmount),
    comments: createCommentsList(commentsAmount, (photoProfileNumber + 1)),
  }
}

// Генерируем массив профилей
const createPhotoProfiles = () => {
  return new Array(photosAmount).fill(null).map((createPhotoProfiles, index) => createPhotoProfile(index));
}

export {createPhotoProfiles};
