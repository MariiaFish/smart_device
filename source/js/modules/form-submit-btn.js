const FILLED_PHONE_INPUT_CLASS = 'feedback__input-phone-filled';
const UNFILLED_PHONE_INPUT_CLASS = 'feedback__input-phone-unfilled';

const addClass = (className, inputElement) => {
  inputElement.classList.add(className);
};

const removeClass = (className, inputElement) => {
  inputElement.classList.remove(className);
};

const srightModeForm = (form, submitBtn) => {
  const phoneNumberInput = form && form.querySelector('.feedback__input--phone');

  phoneNumberInput.addEventListener('change', (evt) => {
    if (evt.target.value.length >= 16) {
      submitBtn.disabled = false;
      removeClass(UNFILLED_PHONE_INPUT_CLASS, evt.target);
      addClass(FILLED_PHONE_INPUT_CLASS, evt.target);
    } else {
      submitBtn.disabled = true;
      removeClass(FILLED_PHONE_INPUT_CLASS, evt.target);
      addClass(UNFILLED_PHONE_INPUT_CLASS, evt.target);
    }
  });
};

export {srightModeForm};
