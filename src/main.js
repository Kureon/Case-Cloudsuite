window.addEventListener('scroll', function(e) {
  // Change header background on scroll
  const header = document.querySelector('.primary-header');
  if (window.pageYOffset  > 0) {
      header.style.backgroundColor = 'white';
    } else {
      header.style.backgroundColor = 'transparent';
    }
    console.log(window.pageYOffset );

  // Change scroll speed of objects with scroll and data-rate
  const target = document.querySelectorAll('.scroll');

  let index = 0, length = target.length;
  for (index; index < length; index++) {
      let position = window.pageYOffset * target[index].dataset.rate;

      target[index].style.transform = 'translate3d(0px, '+position+'px, 0px)';
  }
});