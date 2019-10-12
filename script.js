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
  modal.style.display = 'none';
  console.log(modal);
  pictures.forEach((pict)=> {
    pict.addEventListener('click', ()=>{
      const pictClone = pict.cloneNode(true);
      pictBox.appendChild(pictClone);
      pictBox.style.height='80vh';
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      blackFill.classList.add('open');
      pictBox.querySelector('.pict').style.height = '80vh';
      pictBox.querySelector('.pict').style.width = 'auto';
    });
  });
  const closeBtn = document.querySelector('.closeBtn');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // скроллится
    blackFill.classList.remove('open');
    while (pictBox.firstChild) {
      pictBox.removeChild(pictBox.firstChild);
  }
});
blackFill.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
  blackFill.classList.remove('open');
});
