const clientY = document.documentElement.clientHeight;
const hero = document.querySelector("#home .text");
window.addEventListener("scroll", () => {
  hero.style.background = `rgba(0, 0, 0, ${
    window.pageYOffset / clientY - 0.1
  })`;
});
const about = document.querySelector("#about .text");
const aboutP = document.querySelectorAll(".about-text-p");
window.addEventListener("scroll", () => {
  about.style.background = `rgba(0, 0, 0, ${1 - window.pageYOffset / clientY})`;
  about.style.color = `rgba(255, 255, 255, ${window.pageYOffset / clientY})`;
  if (window.pageYOffset / clientY > 1) {
    about.style.background = `rgba(0, 0, 0, ${
      window.pageYOffset / clientY - 1
    })`;
    aboutP.forEach((item) => {
      item.style.color = `rgba(255,255,255, ${
        2 - window.pageYOffset / clientY
      })`;
    });
  }
});
const skillsP = document.querySelector("#skills");
const skillsH = document.querySelector("#skills h2");
const skillsTxt = document.querySelector("#skills .flex");
window.addEventListener("scroll", () => {
  skillsH.style.background = `rgba(0, 0, 0, ${
    2.2 - window.pageYOffset / clientY
  })`;
  skillsTxt.style.background = `rgba(0, 0, 0, ${
    2.2 - window.pageYOffset / clientY
  })`;
  if (window.pageYOffset / clientY > 2) {
    skillsTxt.style.background = `rgba(0, 0, 0, ${
      window.pageYOffset / clientY - 2
    })`;
    skillsTxt.style.color = `rgba(255,255,255, ${
      3 - window.pageYOffset / clientY
    })`;
  }
});
