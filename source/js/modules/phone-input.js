import {default as imask} from 'imask';

const setPhoneMask = () => {
  const phoneElements = document.querySelectorAll('.feedback__input--phone');
  const maskOption = {
    mask: '+{7}(000)000-00-00',
  };

  if (phoneElements) {
    phoneElements.forEach((phoneElement) => imask(phoneElement, maskOption));
  }
};

export {setPhoneMask};
