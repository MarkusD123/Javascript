// Hamburger and cross icon change - responsive menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

hamburgerIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    menuList.style.display = "block";
  } else if (hamburgerIcon.classList[1] === "fa-xmark") {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
  }
});
// Dark-Light mode
const switcher = document.querySelector(".switch input");
const header = document.querySelector("header");
const themeText = document.querySelector(".switcher-description p");
const themeIcon = document.querySelector(".switcher-description i");

const switchTheme = (event) => {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

switcher.addEventListener("change", switchTheme);
const darkMode = () => {
  themeText.textContent = "Dark Mode";
  themeIcon.classList.replace("fa-sun", "fa-moon");
};
const lightMode = () => {
  themeText.textContent = "Light Mode";
  themeIcon.classList.replace("fa-moon", "fa-sun");
};

// SECTION 1 - increase size of img after mouse enter
const boxImage = document.querySelectorAll(".box-img");
boxImage.forEach((oneImage) => {
  oneImage.addEventListener("mouseenter", () => {
    oneImage.style.transform = "scale(1.1)";
  });
  oneImage.addEventListener("mouseleave", () => {
    oneImage.style.transform = "scale(1)";
  });
});
// SECTION 2 - formular - checking if password is correct
const formular1 = document.querySelector(".formular1");
const email1 = document.querySelector(".email1");
const pass1 = document.querySelector(".password1");
const pass2 = document.querySelector(".password2");
const resultSection2 = document.querySelector(".result-section2");

// Function - filling of new paragraph
const createP = (content, whereToAdd) => {
  const newP = document.createElement("p");
  newP.textContent = content;
  whereToAdd.append(newP);
};

formular1.addEventListener("submit", (event) => {
  event.preventDefault();

  // cleaning of new paragraph
  resultSection2.textContent = "";

  if (pass1.value === pass2.value && pass1.value != "") {
    createP("Welcome :)", resultSection2);
  }
  if (pass1.value !== pass2.value) {
    createP("not equalled passwords", resultSection2);
  }
  if (email1.value === "") {
    createP("missing email", resultSection2);
  }
  if (pass1.value === "") {
    createP("missing password", resultSection2);
  }
  if (pass2.value === "") {
    createP("missing confirmation password", resultSection2);
  }
});
// Scroll down - icon up
const scrollUp = document.querySelector(".scroll-up-img");
window.addEventListener("scroll", () => {
  if (window.scrollY <= 100) {
    scrollUp.style.visibility = "hidden";
  } else {
    scrollUp.style.visibility = "visible";
  }
});
// Formular in footer
const formular2 = document.querySelector(".formular2");
const signupEmail = document.querySelector(".sign-up-email");
const resultFoot = document.querySelector(".result-foot");

formular2.addEventListener("submit", (event) => {
  event.preventDefault();

  if (signupEmail.value === "") {
    resultFoot.textContent = "Missing - input email!";
    resultFoot.style.color = "red";
  } else {
    resultFoot.textContent = "Thank you, Welcome";
    resultFoot.style.color = "black";
  }
});
