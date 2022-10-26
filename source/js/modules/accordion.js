const ATTRIBUTE_BUTTON = 'data-accordion-btn';
const ATTRIBUTE_BUTTON_NUMBER = 'data-accordion-btn-number';
const ATTRIBUTE_BLOCK = 'data-accordion-block';
const ATTRIBUTE_BLOCK_NUMBER = 'data-accordion-block-number';
const CLOSE_ATTRIBUTE_VALUE = 'close';
const OPEN_ATTRIBUTE_VALUE = 'open';

const accordionContainer = document.querySelector('.footer__lower-container');
const accordionControlArea = accordionContainer && accordionContainer.querySelectorAll('.footer__accordion-controls');
const accordionButtons = accordionContainer && accordionContainer.querySelectorAll('.footer__btn-toggle');
const accordionBlocks = accordionContainer && accordionContainer.querySelectorAll('.footer__list');

const isOpenAtribute = (elemnt, attributeName) => elemnt.getAttribute(attributeName) === OPEN_ATTRIBUTE_VALUE;
const isTargetBlock = (block, blockNumber) => block.getAttribute(ATTRIBUTE_BLOCK_NUMBER) === blockNumber;
const setAttributeValue = (element, attributeName, attributeValue) => element.setAttribute(attributeName, attributeValue);

const getAttributeValue = (element, attributeName) => element.getAttribute(attributeName);

const setAttributesToClose = (elements, attributeName) => {
  if (elements[0]) {
    elements.forEach((element) => setAttributeValue(element, attributeName, CLOSE_ATTRIBUTE_VALUE));
  }
};

const initialSetAccordionElements = () => {
  setAttributesToClose(accordionControlArea, ATTRIBUTE_BUTTON);
  setAttributesToClose(accordionBlocks, ATTRIBUTE_BLOCK);
};

const setTurgetBlockAttribute = (blocks, blockNumber, attributeValue) => {
  blocks.forEach((block) => {
    if (isTargetBlock(block, blockNumber)) {
      setAttributeValue(block, ATTRIBUTE_BLOCK, attributeValue);
    }
  });
};

const buttonClickHandler = (button) => () => {
  const blockNumber = getAttributeValue(button, ATTRIBUTE_BUTTON_NUMBER);
  if (!isOpenAtribute(button, ATTRIBUTE_BUTTON)) {
    initialSetAccordionElements();
    setAttributeValue(button, ATTRIBUTE_BUTTON, OPEN_ATTRIBUTE_VALUE);
    setTurgetBlockAttribute(accordionBlocks, blockNumber, OPEN_ATTRIBUTE_VALUE);
  } else {
    setAttributeValue(button, ATTRIBUTE_BUTTON, CLOSE_ATTRIBUTE_VALUE);
    setTurgetBlockAttribute(accordionBlocks, blockNumber, CLOSE_ATTRIBUTE_VALUE);
  }
};

const setElementsHandler = (elements, handler) => {
  if (elements[0]) {
    elements.forEach((element) => element.addEventListener('click', handler(element)));
  }
};

const setAccordion = () => {
  initialSetAccordionElements();
  setElementsHandler(accordionButtons, buttonClickHandler);
  setElementsHandler(accordionControlArea, buttonClickHandler);
};

export {setAccordion, isOpenAtribute, setAttributeValue, CLOSE_ATTRIBUTE_VALUE, OPEN_ATTRIBUTE_VALUE};
