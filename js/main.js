import {createPhotoProfiles} from './data.js';
import {renderPhotos} from './render-photos.js';

const photoProfiles = createPhotoProfiles();
renderPhotos(photoProfiles);
