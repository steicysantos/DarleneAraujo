// let count = 1

// document.getElementById("radio1").checked = true;

// setInterval(function(){
//   nextImage();
// }, 7000)

// function nextImage(){
//   count++;
//   if(count>4){
//     count=1;
//   }

//   document.getElementById("radio"+count).checked = true;
// }

// const accordion = document.getElementsByClassName('contentBx');

// for(i = 0; i < accordion.length; i++){
//   accordion[i].addEventListener('click', function(){
//     this.classList.toggle('active')
//   })
// }

console.log("Nathan")

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

