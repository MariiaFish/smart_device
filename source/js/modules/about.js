import {isOpenAtribute, setAttributeValue, OPEN_ATTRIBUTE_VALUE, CLOSE_ATTRIBUTE_VALUE} from './accordion';

const ABOUT_BUTTON = 'data-about-bth';
const ABOUT_BUTTON_ACTIVE = 'data-about-btn-state';
const ABOUT_EXTRA_BLOCK = 'data-about-extra-information';
const ABOUT_BUTTON_JS_MODE = 'data-about-btn-js-mode';
const ACTIVE_STATE_BUTTON = 'active';
const INACTIVE_STATE_BUTTON = 'inactive';
const INACTIVE_NO_JS_MODE = 'true';

const aboutContainer = document.querySelector('.about');
const aboutButton = aboutContainer && aboutContainer.querySelector('.about__button');
const buttonShowLess = aboutButton && aboutButton.querySelector('.about__btn-less');
const buttonShowMore = aboutButton && aboutButton.querySelector('.about__btn-more');
const aboutExtraBlock = aboutContainer && aboutContainer.querySelector('.about__pharagraph-container--full');

const openAboutBlock = (trigerButton) => {
  setAttributeValue(buttonShowMore, ABOUT_BUTTON_ACTIVE, INACTIVE_STATE_BUTTON);
  setAttributeValue(buttonShowLess, ABOUT_BUTTON_ACTIVE, ACTIVE_STATE_BUTTON);
  setAttributeValue(aboutExtraBlock, ABOUT_EXTRA_BLOCK, OPEN_ATTRIBUTE_VALUE);
  setAttributeValue(trigerButton, ABOUT_BUTTON, OPEN_ATTRIBUTE_VALUE);
};

const closeAboutBlock = (trigerButton) => {
  setAttributeValue(buttonShowLess, ABOUT_BUTTON_ACTIVE, INACTIVE_STATE_BUTTON);
  setAttributeValue(buttonShowMore, ABOUT_BUTTON_ACTIVE, ACTIVE_STATE_BUTTON);
  setAttributeValue(aboutExtraBlock, ABOUT_EXTRA_BLOCK, CLOSE_ATTRIBUTE_VALUE);
  setAttributeValue(trigerButton, ABOUT_BUTTON, CLOSE_ATTRIBUTE_VALUE);
};

const aboutButtonHandler = (button) => () => {
  if (isOpenAtribute(button, ABOUT_BUTTON)) {
    closeAboutBlock(button);
  } else {
    openAboutBlock(button);
  }
};

const setButtonHandler = (button, handler) => {
  if (button) {
    button.addEventListener('click', handler(button));
  }
};

const setAboutSecton = () => {
  setAttributeValue(aboutButton, ABOUT_BUTTON_JS_MODE, INACTIVE_NO_JS_MODE);
  setAttributeValue(aboutExtraBlock, ABOUT_EXTRA_BLOCK, CLOSE_ATTRIBUTE_VALUE);
  setButtonHandler(aboutButton, aboutButtonHandler);
};

export {setAboutSecton};
