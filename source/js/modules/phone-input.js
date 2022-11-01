import {default as imask} from 'imask';

const setPhoneMask = () => {
  const phoneElements = document.querySelectorAll('.feedback__input--phone');
  const maskOption = {
    mask: '+{7}(000)000-00-00',
    updateOptions: {
      mask: Number,
      min: 10,
    },
  };

  if (phoneElements[0]) {
    phoneElements.forEach((phoneElement) => imask(phoneElement, maskOption));
  }
};

export {setPhoneMask};
