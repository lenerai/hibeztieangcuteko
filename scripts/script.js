const script = document.createElement("script");
script.src = 
'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js';
script.async = true;

script.onload = () => {
  console.log('Script loaded successfully')
};

script.onerror = () => {
  console.log('Error occurred while loading script');
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['crus', 'beztie', 'mirilin', 'merylen :)'];
const el = document.getElementById("typewriter");

const button_lights_off = document.getElementById('button-lightsoff')
const text_h6 = document.getElementsByTagName('h6')[0];

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoopMainScreen = async () => {
  while (curPhraseIndex < phrases.length)  {

    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
          document.getElementById('audio-typewriter1').play();
      el.innerText = curWord.substring(0, i+1);
      await sleep(sleepTime);
    }
    
    await sleep(sleepTime * 10);

    if (curPhraseIndex === phrases.length - 1) {
      document.getElementById('audio-typewriter1').pause()
      text_h6.style.display = 'block';
      text_h6.classList.add('animate__animated', 'animate__fadeIn');

      await sleep(sleepTime * 2);

      button_lights_off.style.display = 'inline-block';

      return;
    } else {
  for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);
    }

    if (curPhraseIndex === phrases.length - 1) {
      document.getElementById('audio-typewriter1').pause()
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoopMainScreen();

// function to request to toggle full screen
function demandFullScreen () {

  if (window.screenTop && window.screenY) {
    alert('ifullscreen mo muna sabi, bobo ka ba');
}

}

// change first document page title
function changeFirstDocumentTitle() {
  document.title = "tarantado";
}

function stopAnimation(elementID) {
  let element = document.getElementById(elementID);

  element.addEventListener('mouseover', () => {
    element.classList.remove('animate__infinite');
  })
  
  element.addEventListener('mouseout', () => {
    element.classList.add('animate__infinite');
  })
}

//stops audio
function stopAudio() {
  const audioElement = document.getElementById("bgmbeats");

  audioElement.pause();

  console.log("PAUSED");
}

//clicky sound
function playSoundOnTap() {
  var audio = document.getElementById("audio-tap-se");
  audio.play();

  console.log("TAP")
}