const forms = document.querySelectorAll('.feedback__form');

const clearStorage = () => {
  localStorage.clear();
};

const elementFormHandler = (element) => () => {
  const {name, type, value, checked} = element;
  if (type !== 'checkbox') {
    localStorage.setItem(name, value);
  } else {
    localStorage.setItem(name, checked);
  }
};

const setFormButton = (button) => {
  button.addEventListener('click', clearStorage);
};

const setFormElement = (element, handler) => {
  element.addEventListener('change', handler(element));
};

const setFormElements = (formElements) => {
  for (let formElement of formElements) {
    setFormElement(formElement, elementFormHandler);
  }
};

const setForm = (form) => {
  const formFields = form.elements;
  const formButton = form.querySelector('button');

  setFormElements(formFields);
  setFormButton(formButton);
};

const setForms = () => {
  if (forms[0]) {
    forms.forEach((form) => {
      setForm(form);
    });
  }
};

export {setForms};
