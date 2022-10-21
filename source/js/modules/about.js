import {isOpenAtribute, setAttributeValue, OPEN_ATTRIBUTE_VALUE, CLOSE_ATTRIBUTE_VALUE} from './accordion';

const ABOUT_BUTTON = 'data-about-bth';
const ABOUT_BUTTON_ACTIVE = 'data-about-btn-state';
const ABOUT_EXTRA_BLOCK = 'data-about-extra-information';
const ACTIVE_STATE_BUTTON = 'active';
const INACTIVE_STATE_BUTTON = 'inactive';

const aboutContainer = document.querySelector('.about__container');
const aboutButton = aboutContainer.querySelector('.about__button');
const buttonShowLess = aboutButton.querySelector('.about__btn-less');
const buttonShowMore = aboutButton.querySelector('.about__btn-more');
const aboutExtraBlock = aboutContainer.querySelector('.abot__pharagraph-container--full');

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
  button.addEventListener('click', handler(button));
};

const setAboutSecton = () => {
  setButtonHandler(aboutButton, aboutButtonHandler);
};

export {setAboutSecton};
