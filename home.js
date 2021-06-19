if (document.documentElement.clientWidth < 800) {
  let header = document.querySelector(".header");
  let navbar = document.querySelector(".nav");
  let menu = document.querySelector(".menu");
  let logo = document.querySelector(".logo");
  let title = document.querySelector(".title");

  menu.addEventListener("click", function () {
    let i = menu.querySelector("i");
    if (i.classList[1] === "fa-bars") {
      document.querySelector(".landing").scrollIntoView();
      i.classList.remove("fa-bars");
      i.classList.add("fa-times");
      menu.style.color = "#d3d3d3";
      menu.style.position = "absolute";
      // menu.style.marginTop = "2.5vh";

      let item = navbar.querySelectorAll(".item");
      header.style.height = "100vh";
      header.style.position = "absolute";
      header.style.top = "0";
      header.style.transition = "0.5s ease-in-out";

      header.style.backgroundColor = "#000000a0";
      navbar.style.height = "80vh";

      for (var j = 0; j < item.length; j++) item[j].style.display = "block";
      title.style.display = "none";
      logo.style.display = "none";
    } else {
      i.classList.remove("fa-times");
      i.classList.add("fa-bars");

      menu.style.color = "black";
      menu.style.position = "fixed";
      // menu.style.marginTop = "1vh";

      let item = navbar.querySelectorAll(".item");
      header.style.height = "10vh";
      header.style.position = "static";
      header.style.backgroundColor = "#00000060";
      header.style.transition = "0.5s ease-in-out";

      navbar.style.height = "9vh";

      for (var j = 0; j < item.length; j++) item[j].style.display = "none";
      title.style.display = "flex";
      title.style.height = "90vh";
      logo.style.display = "block";
    }
  });
}

// scrolling

let landing = document.querySelector(".landing");
let amen = document.querySelector(".amen");
let about = document.querySelector(".about");
let gathering = document.querySelector(".gathering");
let past = document.querySelector(".past");
let oasis = document.querySelector(".oasis");
let team = document.querySelector(".team");
let footer = document.querySelector("#footer");

let item = document.querySelectorAll(".item");
let menu = document.querySelector(".menu");

// eda, i think you could use a loop here to make the code cleaner and shorter lol :)
amen.addEventListener("click", function () {
  landing.scrollIntoView();
});
item[0].addEventListener("click", function () {
  about.scrollIntoView();
  menu.click();
});
item[1].addEventListener("click", function () {
  gathering.scrollIntoView();
  menu.click();
});
item[2].addEventListener("click", function () {
  past.scrollIntoView();
  menu.click();
});
item[3].addEventListener("click", function () {
  oasis.scrollIntoView();
  menu.click();
});
item[4].addEventListener("click", function () {
  team.scrollIntoView();
  menu.click();
});
item[5].addEventListener("click", function () {
  footer.scrollIntoView();
  menu.click();
});

// toggling image modal
const images = document.querySelectorAll(".modalPopupImage");
const modalImg = document.querySelector("#modal-img");
images.forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
  });
});
