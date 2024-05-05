// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let pic = document.querySelector("img");
  let selector = document.querySelector('#horn-select')
  let aud = document.querySelector('audio');
  let vol = document.querySelector('#volume');
  let volPic = vol.nextElementSibling;
  let btn = document.querySelector('button');

  const jsConfetti = new JSConfetti();


  selector.addEventListener("change", function(){
    if(selector.value === "air-horn"){
      pic.src = "assets/images/air-horn.svg";
      aud.src = "assets/audio/air-horn.mp3";

    }
    if(selector.value === "car-horn"){
      pic.src = "assets/images/car-horn.svg";
      aud.src = "assets/audio/car-horn.mp3";
    }
    if(selector.value === "party-horn"){
      pic.src = "assets/images/party-horn.svg";
      aud.src = "assets/audio/party-horn.mp3";
    }
  })

vol.addEventListener("change", function(){
  if(vol.value == 0){
    volPic.src = "assets/icons/volume-level-0.svg"; }
  if(vol.value >= 1 && vol.value < 33){
    volPic.src = "assets/icons/volume-level-1.svg";
  }
  if(vol.value >= 33 && vol.value < 67){
    volPic.src = "assets/icons/volume-level-2.svg";
  }
  if(vol.value >= 67 ){
    volPic.src = "assets/icons/volume-level-3.svg";
  }
  aud.volume = vol.value / 100;
})

btn.addEventListener('click', function(){
  aud.play();
  if(selector.value === "party-horn"){
    jsConfetti.addConfetti();

  }


})
  
}

