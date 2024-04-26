let last_tab_opened = false;
var clickCounter = 0;

var counter = 0;

const heartbeat_audio = document.getElementById('heartbeat-audio');

window.onload = function () {
  // var number = prompt("enter ka number");
  document.getElementById("heartclick").style.display = "block";

  setTimeout(function() {
    document.getElementById('start-audio').play();
  }, 500)

};

var image_heart = document.getElementById("heartclick");

function click_object() {
  modify_caption_text();

  if (clickCounter < 1) {
    counter = 100;
  } 

  clickCounter++;
  console.log(clickCounter);

  var image_w = image_heart.clientWidth;

  image_heart.style.width = image_w + 3 + "px";

  //max width should be 450px

  if (image_w >= 450) {
    changeToMiddleFinger();
    openFinalTab(last_tab_opened);
    last_tab_opened = true;
  } else return;
}

function counter_bar() {
  setInterval(function () {
    var str = "w-" + counter;

    const w_str = document.getElementById("timer-bar");

    w_str.classList.forEach((item) => {
      if (item.startsWith("w-")) {
        w_str.classList.remove(item);
      }
    });

    w_str.classList.add(str);

    counter--;

    if (counter == 0) {
      changeToMiddleFinger();

      clearInterval(counter_bar);
      console.log("STOPPED");

      openFinalTab(last_tab_opened);

      last_tab_opened = true;

      return;
    }
  }, 100);
}

counter_bar();

// function to change image/icon to middle finger
function changeToMiddleFinger() {
  var image_heart = document.getElementById("heartclick");
  var image_div = document.getElementById("image-div");

  heartbeat_audio.pause();

  image_heart.src = "/src/img/middle-finger.svg";
  image_div.removeAttribute("onclick");
  caption_p.innerHTML = "ayan ang bagal mo kasi :|";

  /*changing to the click counter text
   */
  setTimeout(function () {
    caption_p.innerHTML = clickCounter;
  }, 1500);

  image_heart.classList.add(
    "animate__animated",
    "animate__bounce",
    "animate__infinite"
  );
  console.log("image changed");
}

//function to open final tab in another tab
function openFinalTab(last_tab_opened) {
  if (last_tab_opened == false) {
    setTimeout(function () {
      var explosion = document.getElementById("explosion-sound");
      explosion.volume = 0.4;
      explosion.play();
      window.open("/html/talaga.html", "_blank");

    }, 3500);

    return;
  } else console.log("already opened");
  return;
}

var caption_p = document.getElementById("clicker-caption");
//function to change text in caption
function modify_caption_text() {
  if (clickCounter == 15 && counter > 75) {
    console.log("SO FAST");
    caption_p.innerHTML = "eyy sanay na sanay";
  } else if (counter < 70 && counter > 50) {
    heartbeat_audio.play();
    caption_p.innerHTML = "faster pa boi";
  } else if (counter < 45 && counter > 10) {
    caption_p.innerHTML = "pakita mo kung sino ka ";
  }
}

//play start audio
function playStartAudio() {
  const start_audio = document.getElementById('start-audio');

  start_audio.play();
}