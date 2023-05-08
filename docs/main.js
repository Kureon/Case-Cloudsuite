window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.scroll');

    let index = 0, length = target.length;
    for (index; index < length; index++) {
        let position = window.pageYOffset * target[index].dataset.rate;

        target[index].style.transform = 'translate3d(0px, '+position+'px, 0px)';
    }
});

window.addEventListener('scroll', function(e) {
    const header = document.querySelector('.primary-header');
    if (window.pageYOffset  > 0) {
        header.style.backgroundColor = 'white';
      } else {
        header.style.backgroundColor = 'transparent';
      }
      console.log(window.pageYOffset );
});