import '../vendor/jquery';
import '../vendor/jquery.mask';

const phoneMask = () => {
  jQuery(function ($) {
    $('#phone').mask('+7 (999) 999-9999');
  });
};

export {phoneMask};
