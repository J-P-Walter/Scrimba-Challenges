const screensaver = document.getElementById("screensaver");
var timeout;
var isScreensaver = false;
const time = document.getElementById("timeout");

function showScreensaver() {
  screensaver.style.display = "flex";
  isScreensaver = true;
}
function showContent() {
  screensaver.style.display = "none";
  isScreensaver = false;
}
document.onmousemove = function () {
  if (isScreensaver) {
    showContent();
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      showScreensaver();
    }, time.value);
  }
};

countdown();
