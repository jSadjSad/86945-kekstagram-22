import {isEscKey, isEnterKey} from './util.js';

const uploadFormNode = document.querySelector('#upload-file');
const uploadNode = document.querySelector('.img-upload__overlay');
const uploadCancelNode = uploadNode.querySelector('.img-upload__cancel');
const bodyNode = document.querySelector('body');

const onUploadFormChange = () => {
  openUpload();
}

const onUploadCancelClick = () => {
  closeUpload();
}

const onUploadCancelEnterPress = (evt) => {
  if (isEnterKey(evt)) {
    closeUpload();
  }
}

const onUploadEscPress = (evt) => {
  if (isEscKey(evt)) {
    closeUpload();
  }
}

const openUpload = () => {
  uploadNode.classList.remove('hidden');
  bodyNode.classList.add('modal-open');
  document.addEventListener('keydown', onUploadEscPress);
}


const closeUpload = () => {
  uploadNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadEscPress);
}

uploadFormNode.addEventListener('input', onUploadFormChange);
uploadCancelNode.addEventListener('click', onUploadCancelClick);
uploadCancelNode.addEventListener('keydown', onUploadCancelEnterPress);
