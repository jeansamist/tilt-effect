// JavaScript (script.js)
function tiltImage(event) {
  const container = event.currentTarget;
  const image = container.querySelector("img");
  const containerRect = container.getBoundingClientRect();
  const containerCenterX = containerRect.left + containerRect.width / 2;
  const containerCenterY = containerRect.top + containerRect.height / 2;

  const cursorX = event.clientX;
  const cursorY = event.clientY;

  const maxTilt = 10; // Adjust tilt intensity as needed

  const tiltX = ((cursorX - containerCenterX) / containerRect.width) * maxTilt;
  const tiltY = ((cursorY - containerCenterY) / containerRect.height) * maxTilt;

  image.style.transform = `perspective(2000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
}
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
let sY = 0;
const texts = document.querySelector(".texts");
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    setTimeout(() => {
      if (sY != texts.children.length - 1) {
        sY++;
      }
      texts.style.transform = "translateY(" + 103 * sY * -1 + "px)";
    }, 100);
  } else {
    setTimeout(() => {
      if (sY != 0) {
        sY--;
      }
      texts.style.transform = "translateY(" + 103 * sY * -1 + "px)";
    }, 100);
  }
});
