// const sections = document.querySelectorAll("section");
// const headerLogoImage = document.querySelector(".header__logo-image");
// const headerLogoMobile = document.querySelector(".header__logo-mobile");
// const headerTitle = document.querySelector(".header__title");
// const welcomeContainer = document.querySelector(".welcome-container");
// const footerLogo = document.querySelector(".footer__logo");

// function hideElements() {
//   headerLogoImage.classList.add("hidden");
//   headerLogoMobile.classList.add("hidden");
//   headerTitle.classList.add("hidden");
//   welcomeContainer.style.position = "absolute";
//   footerLogo.style.display = "inherit";
//   sections.forEach((e) => e.classList.add("hidden"));
//   document
//     .querySelectorAll(".active_js")
//     .forEach((e) => e.classList.remove("active_js"));
// }

// function showElements() {
//   headerLogoImage.classList.remove("hidden");
//   headerLogoMobile.classList.remove("hidden");
//   headerTitle.classList.remove("hidden");
//   welcomeContainer.style.position = "inherit";
//   footerLogo.style.display = "none";
//   sections.forEach((e) => e.classList.add("hidden"));
//   document
//     .querySelectorAll(".active_js")
//     .forEach((e) => e.classList.remove("active_js"));
// }

// function togglePage(link) {
//   const idPage = link.split("#")[1];
//   const section = document.getElementById(idPage);

//   sections.forEach((e) => e.classList.add("hidden"));
//   hideElements();
//   section.classList.remove("hidden");

//   const currentLink = document.querySelector(`[href="${link}"]`);
//   currentLink.closest("li").classList.add("active_js");
// }

// document.querySelectorAll(".header__menu a").forEach((e) => {
//   e.addEventListener("click", (event) => {
//     event.preventDefault();
//     const link = e.getAttribute("href");

//     if (link) {
//       togglePage(link);
//     }
//   });
// });

// footerLogo.addEventListener("click", showElements);
// document.querySelector(".header__logo").addEventListener("click", showElements);





// const sections = document.querySelectorAll("section");
// const headerLogoImage = document.querySelector(".header__logo-image");
// const headerLogoMobile = document.querySelector(".header__logo-mobile");
// // const headerTitle = document.querySelector(".header__title");
// const welcomeContainer = document.querySelector(".welcome-container");
// const footerLogo = document.querySelector(".footer__logo");


// function hideElements() {
//   headerLogoImage.classList.add("hidden");
//   headerLogoMobile.classList.add("hidden");
//   // headerTitle.classList.add("hidden");
//   welcomeContainer.style.position = "absolute";
//   footerLogo.style.display = "inherit";
//   sections.forEach((e) => e.classList.add("hidden"));
//   document
//     .querySelectorAll(".active_js")
//     .forEach((e) => e.classList.remove("active_js"));
// }

// function showElements() {
//   headerLogoImage.classList.remove("hidden");
//   headerLogoMobile.classList.remove("hidden");
//   // headerTitle.classList.remove("hidden");
//   welcomeContainer.style.position = "inherit";
//   footerLogo.style.display = "none";
//   sections.forEach((e) => e.classList.add("hidden"));
//   document
//     .querySelectorAll(".active_js")
//     .forEach((e) => e.classList.remove("active_js"));
// }

// function togglePage(link) {
//   const idPage = link.split("#")[1];
//   const section = document.getElementById(idPage);

//   sections.forEach((e) => e.classList.add("hidden"));
//   hideElements();
//   section.classList.remove("hidden");

//   const currentLink = document.querySelector(`[href="${link}"]`);
//   currentLink.closest("li").classList.add("active_js");
// }

// function scrollToSection(section) {
//   const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
//   window.scrollTo({
//     top: sectionPosition,
//     behavior: "smooth",
//   });
// }

// document.querySelectorAll(".header__menu a").forEach((e) => {
//   e.addEventListener("click", (event) => {
//     event.preventDefault();
//     const link = e.getAttribute("href");

//     if (link) {
//       togglePage(link);
//       const section = document.getElementById(link.split("#")[1]);
//       scrollToSection(section);
//     }
//   });
// });

// footerLogo.addEventListener("click", showElements);
// document.querySelector(".header__logo").addEventListener("click", showElements);





// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     header.style.setProperty("--header-bg-color", "rgba(108, 93, 165, 0.5)");
//   } else {
//     header.style.setProperty("--header-bg-color", "transparent");
//   }



const sections = document.querySelectorAll("section");
const headerLogoImage = document.querySelector(".header__logo-image");
const headerLogoMobile = document.querySelector(".header__logo-mobile");
const welcomeContainer = document.querySelector(".welcome-container");
const footerLogo = document.querySelector(".footer__logo");
const header = document.querySelector("header");

function hideElements() {
    headerLogoImage.classList.add("hidden");
    headerLogoMobile.classList.add("hidden");
    welcomeContainer.style.position = "absolute";
    footerLogo.style.display = "inherit";
    sections.forEach((e) => e.classList.add("hidden"));
    document.querySelectorAll(".active_js").forEach((e) => e.classList.remove("active_js"));
}

function showElements() {
    headerLogoImage.classList.remove("hidden");
    headerLogoMobile.classList.remove("hidden");
    welcomeContainer.style.position = "inherit";
    footerLogo.style.display = "none";
    sections.forEach((e) => e.classList.add("hidden"));
    document.querySelectorAll(".active_js").forEach((e) => e.classList.remove("active_js"));
}

function togglePage(link) {
    const idPage = link.split("#")[1];
    const section = document.getElementById(idPage);

    sections.forEach((e) => e.classList.add("hidden"));
    hideElements();
    section.classList.remove("hidden");

    const currentLink = document.querySelector(`[href="${link}"]`);
    currentLink.closest("li").classList.add("active_js");
}

function scrollToSection(section) {
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
    });
}

function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

document.querySelectorAll(".header__menu a").forEach((e) => {
    e.addEventListener("click", (event) => {
        event.preventDefault();
        const link = e.getAttribute("href");

        if (link) {
            togglePage(link);
            const section = document.getElementById(link.split("#")[1]);
            scrollToSection(section);
        }
    });
});

footerLogo.addEventListener("click", showElements);
document.querySelector(".header__logo").addEventListener("click", showElements);
window.addEventListener("scroll", handleScroll);