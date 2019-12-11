/*function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);
  } */

const pictures = document.querySelectorAll('.pict');
console.log(pictures);
const modal = document.getElementById('modal');
const blackFill = document.getElementById('black_fill');
const pictBox = document.querySelector('.bigPict');
console.log(modal);
pictures.forEach((pict) => {
  pict.addEventListener('click', () => {
    const pictClone = pict.cloneNode(true);
    pictBox.appendChild(pictClone);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    blackFill.classList.add('open');
    if(pictClone.classList.contains('imgvertic')){
      pictClone.classList.add('BigImgVertic');
      modal.classList.add('ModalForImgVertic');
    }
      pictClone.classList.add('BigImgGoriz');
  });
});
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = ''; // скроллится
  blackFill.classList.remove('open');
  modal.classList.remove('ModalForImgVertic');
  while (pictBox.firstChild) {
    pictBox.removeChild(pictBox.firstChild);
  }
});
blackFill.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
  blackFill.classList.remove('open');
  modal.classList.remove('ModalForImgVertic');
  while (pictBox.firstChild) {
    pictBox.removeChild(pictBox.firstChild);
  }
});