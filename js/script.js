const clientY = document.documentElement.clientHeight;
const hero = document.querySelector("#home .text");
window.addEventListener("scroll", () => {
  hero.style.background = `rgba(0, 0, 0, ${
    window.pageYOffset / clientY - 0.1
  })`;
});
const about = document.querySelector("#about .text");
window.addEventListener("scroll", () => {
  about.style.background = `rgba(0, 0, 0, ${1 - window.pageYOffset / clientY})`;
  about.style.color = `rgba(255, 255, 255, ${window.pageYOffset / clientY})`;
});
