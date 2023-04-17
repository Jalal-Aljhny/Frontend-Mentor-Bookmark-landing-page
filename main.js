let logo = document.querySelector("header .container img");
let menuIcon = document.querySelector("header .container img#menu");
let menu = document.querySelector("header .container ul");
let header = document.querySelector("header");
let menuMood = "open";
let plusIcon = document.querySelector("header #mob-plus");
let switchers = document.querySelectorAll("main .features ul li");
let featureParts = document.querySelectorAll("main .features-slides > div");
let questions = document.querySelectorAll(
  "main .container .question-answer > div > div"
);
let answers = Array.from(questions).fill("hidden");
let mainLink = window.location.href;
let form = document.forms[0];
let userEmail = document.querySelector("main .contact form input[type='text']");
let errorMessage = document.querySelector("main .contact form div");
let errorIcon = document.querySelector("main .contact form div img");
let mainImage = document.querySelector(
  "main .book-mark .container div:nth-child(2) img"
);
let startTime = new Date();
let featureTabs = document.querySelector("main .features ul");
let featuresImage = document.querySelectorAll("main .features-slides img");
let featuresText = document.querySelectorAll(
  "main .features-slides > div > div:nth-child(2)"
);
let extensionBoxes = document.querySelectorAll("main .downloads > div");

window.addEventListener("load", () => {
  let endTime = new Date();
  let loadTime = endTime - startTime;
  window.setTimeout(() => {
    mainImage.classList.add("loaded");
  }, loadTime);
});
logo.addEventListener("click", () => {
  window.location.reload();
  window.location.href = mainLink;
});
menuIcon.addEventListener("click", () => {
  if (menuMood == "open") {
    menu.classList.add("mobile-nav");
    menuIcon.src = "images/icon-close.svg";
    header.style.backgroundColor = "rgba(51, 51, 51, 0.9)";
    logo.src = "images/logo-bookmark-mob.svg";
    menuMood = "close";
    plusIcon.classList.add("plus");
  } else {
    menu.classList.remove("mobile-nav");
    menuIcon.src = "images/icon-hamburger.svg";
    header.style.backgroundColor = "#fff";
    logo.src = "images/logo-bookmark.svg";
    menuMood = "open";
    plusIcon.classList.remove("plus");
  }
});

switchers.forEach((li) => {
  li.addEventListener("click", removeActive);
});
function removeActive() {
  switchers.forEach((li) => {
    li.classList.remove("active");
  });
  this.classList.add("active");
  addDepatment(this.dataset.num);
}
function addDepatment(clas) {
  featureParts.forEach((part) => {
    part.style.display = "none";
  });
  featureParts.forEach((part) => {
    if (part.classList.contains(clas)) {
      part.style.display = "flex";
    }
  });
}

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (answers[question.parentElement.getAttribute("id")] == "hidden") {
      question.querySelector("img").style.transform = "rotate(180deg)";
      question.querySelector("img").src = "images/icon-arrow-red.svg";
      question.nextSibling.nextSibling.style.display = "block";
      answers[question.parentElement.getAttribute("id")] = "visible";
    } else {
      question.querySelector("img").style.transform = "rotate(0)";
      question.querySelector("img").src = "images/icon-arrow.svg";
      question.nextSibling.nextSibling.style.display = "none";
      answers[question.parentElement.getAttribute("id")] = "hidden";
    }
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userEmail == "" || !validEmail(userEmail.value)) {
    errorMessage.classList.add("error");
    errorIcon.style.display = "block";
  } else {
    errorMessage.classList.remove("error");
    errorIcon.style.display = "none";
  }
});

function validEmail(email) {
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(email);
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= featureTabs.offsetTop - 600) {
    featureTabs.classList.add("scrolled");
  }
  featuresImage.forEach((image) => {
    if (window.scrollY >= image.offsetTop - 600) {
      image.classList.add("scrolled");
    }
  });
  featuresText.forEach((text) => {
    if (window.scrollY >= text.offsetTop - 600) {
      text.classList.add("scrolled");
    }
  });
  extensionBoxes.forEach((box) => {
    if (window.scrollY >= box.offsetTop - 600) {
      box.classList.add("scrolled");
    }
  });
  questions.forEach((question) => {
    if (window.scrollY >= question.offsetTop - 600) {
      question.classList.add("scrolled");
    }
  });
});
