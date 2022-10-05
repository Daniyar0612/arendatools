const Open = document.querySelector(".burger-menu");
const Close = document.querySelector(".nav-close");
const nav = document.querySelector(".navigation");

Open.addEventListener("click", open);
Close.addEventListener("click", close);

function open() {
  nav.classList.add("active");
}

function close() {
  nav.classList.remove("active");
}

// HEADER

const header = document.querySelector(".headerwrapper");
const headerH = document.querySelector(".headerwrapper").clientHeight;
const headerHight = document.querySelector(".header").clientHeight;

document.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll > headerHight) {
    header.classList.add("fixed");

    document.body.welcomewrapper.style.paddingTop = headerH + "px";
  } else {
    header.classList.remove("fixed");

    document.body.removeAttribute("style");
  }
};
