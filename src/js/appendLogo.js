import logo from '../templates/logo.hbs';

const modalProductContainer = document.querySelector('main');

function logoAppend() {
  modalProductContainer.insertAdjacentHTML('afterbegin', logo());
}
logoAppend();
