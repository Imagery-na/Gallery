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
  modal.style.display = 'none';
  console.log(modal);
  pictures.forEach((pict)=> {
    pict.addEventListener('click', ()=>{
      modal.style.display = '';
    });
  });
