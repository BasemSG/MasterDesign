//mega menue
let myElement = document.getElementById("mega");
let myMegaLinks = document.getElementById("mega-links");
const mediaQuery = window.matchMedia("(min-width: 768px)");

myElement.onclick = function () {
  if (mediaQuery.matches) {
    if (myMegaLinks.style.display === "none") {
      myMegaLinks.style.display = "flex";
    } else {
      myMegaLinks.style.display = "none";
    }
  } else {
    if (myMegaLinks.style.display === "none") {
      myMegaLinks.style.display = "initial";
    } else {
      myMegaLinks.style.display = "none";
    }
  }
};

//skills
let skills = document.querySelector("div.skills");
let spans = document.querySelectorAll("div.skills div.box span");
window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.set;
    });
  }
});
//event
let times = document.querySelectorAll(
  ".events .info .time .unit span:first-child "
);
let day = times[0];
let hour = times[1];
let min = times[2];
let sec = times[3];

let counter = setInterval(function () {
  sec.textContent--;
  if (sec.textContent === "-1") {
    min.textContent--;
    if (min.textContent === "0") {
      hour.textContent--;
      if (hour.textContent === "0") {
        day.textContent--;
        hour.textContent = "24";
      }
      min.textContent = "60";
    }
    sec.textContent = "60";
  }
  if (
    day.textContent === "0" &&
    hour.textContent === "0" &&
    min.textContent === "0" &&
    sec.textContent === "0"
  ) {
    clearInterval(counter);
  }
}, 1000);

//states
let states = document.querySelector("div.state");
let nums = document.querySelectorAll("div.state span");
let start = false;

function startCount(el) {
  let goal = el.dataset.number;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= states.offsetTop) {
    if (!start) {
      nums.forEach((num) => startCount(num));
    }
    start = true;
  }
});

//up button
let btn = document.querySelector("button.up");
let article = document.querySelector(".articles");

window.addEventListener("scroll", () => {
  if (window.scrollY >= article.offsetTop) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
