//Carrosseis
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

$('.owl-insta').owlCarousel({
  loop: true,
  margin: 8,
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
    },  
    1500: {
      items: 4
    }
  }
});

$('.owl-two').owlCarousel({
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
    },
    1500:{
      items:4
    }

  }
});

//Redirect Cards Menu

const cardsCursos = document.getElementsByClassName("cursos");



//Dropdown Menu
const menuToggle = document.querySelector(".menu-toggle");
const topics = document.querySelector(".topics");

menuToggle.addEventListener("click", () => {
  topics.classList.toggle("active");
});

//Scroll Menu
$("#SobreMenu").click(function() {
  console.log("Nathan")
  $('html, body').animate({
      scrollTop: $("#Sobre").offset().top
  }, 1000);
});

$("#CursosMenu").click(function() {
  console.log("Nathan")
  $('html, body').animate({
      scrollTop: $("#Cursos").offset().top
  }, 1000);
});


$("#GaleriaMenu").click(function() {
  console.log("Nathan")
  $('html, body').animate({
      scrollTop: $("#Galeria").offset().top
  }, 1000);
})

$("#InicioMenu").click(function() {
  console.log("Nathan")
  $('html, body').animate({
      scrollTop: $("#Inicio").offset().top
  }, 1000);
});

