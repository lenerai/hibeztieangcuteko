function checkPageLoad() {
    console.log("LOADED");
  }

function playSoundOnTap() {
    var audio = document.getElementById("audio-tap-se");
    audio.play();
    audio.volume = 0.5;
}

window.onload = function() {
  playMusicOnLoad();
}

function playMusicOnLoad() {
  var audio = document.getElementById("bgmbeats");
  audio.play();
}

function crashAlert() {
    alert("ay qaqi nagcrash");
    alert("na crush kita :D");
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

var elementInView = document.querySelectorAll(".card");
var textInView = document.querySelectorAll(".card-text");

window.addEventListener("scroll", function () {
    elementInView.forEach((element) => {
      if (isInViewport(element)) {
  
        this.setTimeout(() => {
          element.classList.add("animate__animated", "animate__slideInDown");
        }, 100);
      } else {
        element.classList.remove("animate__animated", "animate__slideInDown");
      }
    });
  
    textInView.forEach((element) => {
      if (isInViewport(element)) {
  
        this.setTimeout(() => {
          element.classList.add("typewriter");
        }, 100);
      } else {
        element.classList.remove("typewriter");
      }
    });
  });


function scrollToThird(elementIDLabel, elementIDButtonn) {
    var jabe_label = document.getElementById(elementIDLabel);
    var jabe_button = document.getElementById(elementIDButtonn);

    jabe_label.style.display = 'none';
    jabe_button.style.display = '';

    jabe_button.classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
}

function changeDisplayText(elementID, elementID2) {
  playSoundOnTap();
  console.log("PLAYED");
    var elementIDtext = document.getElementById(elementID);
    var elementIDtext2 = document.getElementById(elementID2);


    elementIDtext.style.display = 'none';
    elementIDtext2.style.display = '';  

}

//hide fourth-btn
function hide_btn(elementID, elementID2) {
    var elementIDtext = document.getElementById(elementID);
    var elementIDtext2 = document.getElementById(elementID2);


    elementIDtext.style.display = 'none';
    elementIDtext2.style.display = '';
}

function banat_modal(elementID, elementID2, elementID3, h4text, ptext, imagesource) {
  var h4 = document.getElementById(elementID);
  var p = document.getElementById(elementID2);
  var newimage = document.getElementById(elementID3);

  h4.innerHTML = h4text;
  p.innerHTML = ptext;
  newimage.src = imagesource;
}

function addBtnAnimations () {
let paper_btn_class = document.querySelectorAll('.paper-btn');

  paper_btn_class.forEach(element => {
    element.classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
  })

}
addBtnAnimations();

//stop pulse animation when mouse is hovering
function stopAnimation() {

  console.log("RUNNING");
  let paper_btn_class = document.querySelectorAll('.paper-btn');

  paper_btn_class.forEach(element => {
    element.addEventListener('mouseover', () => {
      element.classList.remove('animate__infinite');
    })
    
    element.addEventListener('mouseout', () => {
      element.classList.add('animate__infinite');
    })
  })
}

stopAnimation();

function stopAudio(audioID) {
  const audioElement = document.getElementById(audioID);

  audioElement.pause();

  console.log("PAUSED");
}

//show section after 1 second
function showSection() {
  const lastpage_section = document.getElementById('lastpage-section');

  lastpage_section.style.display = '';
}

setTimeout(showSection, 1000);
