import {createPhotoProfiles} from './data.js';

const photoContainerNode = document.querySelector('.pictures');
const photoProfiles = createPhotoProfiles();

const photoItemTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotoItem = (photoProfile) => {
  const photoItem = photoItemTemplate.cloneNode(true);
  photoItem.querySelector('.picture__img').src = photoProfile.url;
  photoItem.querySelector('.picture__img').alt = photoProfile.description;
  photoItem.querySelector('.picture__comments').textContent = photoProfile.comments.length;
  photoItem.querySelector('.picture__likes').textContent = photoProfile.likes;
  return photoItem;
}

const renderPhotos = () => {
  const photosCollectionFragment = document.createDocumentFragment();
  photoProfiles.forEach((item) => {
    photosCollectionFragment.appendChild(renderPhotoItem(item));
  });
  photoContainerNode.appendChild(photosCollectionFragment);
}

export {renderPhotos};
