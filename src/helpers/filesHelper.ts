
import  {Projet} from '../model/projet';

export function getRootPath() {
  return './assets/pictures/';
}

export function getFilesExtension() {
  return '.png';
}

export function getPictures() {
  const outputArray = [
    'logo_white',
    'logo_grey',
    'heavy_image'
  ];

  return outputArray;
}


export function getScreenShots() {
  const outputArray = [
    new Projet('Ceci est une application pour Enedis pour aider les techniciens à planifier leurs journées','logo_white','logo_trans'),
    new Projet('Ceci est une application pour Enedis pour aider les techniciens à planifier leurs journées','logo_grey','logo_trans'),
    new Projet('Ceci est une application pour Enedis pour aider les techniciens à planifier leurs journées','heavy_image','logo_trans'),
    ];

  return outputArray;
}
