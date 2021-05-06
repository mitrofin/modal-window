import productModal from '../templates/productModal.hbs';

const modalProductContainer = document.querySelector('main');

function modalAppend() {
  modalProductContainer.insertAdjacentHTML('afterbegin', productModal());
}
modalAppend();

const openModalProduct = document.getElementById('myBtn');
const closeModal = document.querySelector('#close_modal_product');
const backdrop = document.querySelector('.backdropProduct');

closeModal.addEventListener('click', closeModalProduct);
openModalProduct.addEventListener('click', openModalFunc);

let infoAboutSaller;
let infoAboutSallerCover;

/* показывает инфо о продавце */
infoAboutSaller = document.querySelector('.dealler_infornation_down');
infoAboutSallerCover = document.querySelector('.dealler_infornation');

infoAboutSallerCover.addEventListener('click', showInfoAboutsaller);

function showInfoAboutsaller() {
  infoAboutSallerCover.style.opacity = '0';
  infoAboutSaller.style.opacity = '1';
}

function openModalFunc(evt) {
  evt.preventDefault();
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeydown);
  backdrop.addEventListener('click', closeModalOnBackdropProduct);
}

function closeModalProduct() {
  backdrop.classList.add('is-hidden');
}
function closeModalOnBackdropProduct(event) {
  if (event.target === backdrop) {
    closeModalProduct();
  }
}

function onEscKeydown(event) {
  if (event.code === 'Escape') {
    closeModalProduct();
  }
}
