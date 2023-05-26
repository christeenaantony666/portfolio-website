function showScrollButton() {
    var scrollButton = document.getElementById('scroll-button');
    scrollButton.style.display = 'block';
  }
  
  function scrollToSection4() {
    var section4 = document.querySelector('.section4');
    section4.scrollIntoView({ behavior: 'smooth' });
  }
  
  