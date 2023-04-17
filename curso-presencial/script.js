let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// console.log("Nathan")

$('.owl-one').owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});



// var slideIndex = 0;
// var slides = document.getElementsByClassName("slide");
// var dots = document.getElementsByClassName("dot");

// showSlides();

// function showSlides() {
//   var i;
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 5000); // Muda o slide a cada 5 segundos
// }

// // Adiciona evento de clique aos dots
// for (var i = 0; i < dots.length; i++) {
//   dots[i].addEventListener("click", function () {
//     var dotIndex = Array.prototype.indexOf.call(dots, this);
//     slideIndex = dotIndex + 1;
//     showSlides();
//   });
// }

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    accordionItems.forEach(item => item.classList.remove('active'));
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

window.addEventListener('load', () => {
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;

  const target1 = 78;
  const target2 = 1000;
  const target3 = 10;
  const target4 = 70;

  setInterval(() => {
    if (counter1 < target1) {
      counter1++;
      document.getElementById('counter1').innerText = counter1;
    }
    if (counter2 < target2) {
      counter2++;
      document.getElementById('counter2').innerText = counter2;
    }
    if (counter3 < target3) {
      counter3++;
      document.getElementById('counter3').innerText = counter3;
    }
    if (counter4 < target4) {
      counter4++;
      document.getElementById('counter4').innerText = counter4;
    }
  }, 10);
});


