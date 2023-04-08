let count = 1

document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
}, 7000)

function nextImage(){
  count++;
  if(count>4){
    count=1;
  }

  document.getElementById("radio"+count).checked = true;
}

const accordion = document.getElementsByClassName('contentBx');

for(i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}


        
        
