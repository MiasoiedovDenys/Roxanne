$(document).ready(function () {
    $(".header__burger").click(function (event) {
      $(".header__burger,.header__menu,.header__link").toggleClass("active");
      $("body").toggleClass("lock");
    });
  
    $(".header__link").click(function (event) {
      $(".header__burger,.header__menu,.header__link").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });

const sections = document.querySelectorAll("section");
const headerLogoImage = document.querySelector(".header__logo-image");
const headerLogoMobile = document.querySelector(".header__logo-mobile");
const welcomeContainer = document.querySelector(".welcome-container");
const footerLogo = document.querySelector(".footer__logo");
const header = document.querySelector("header");

function hideElements() {
    if (headerLogoImage) headerLogoImage.classList.add("hidden");
    if (headerLogoMobile) headerLogoMobile.classList.add("hidden");
    if (welcomeContainer) welcomeContainer.style.position = "absolute";
    if (footerLogo) footerLogo.style.display = "inherit";
    sections.forEach((e) => e.classList.add("hidden"));
    document.querySelectorAll(".active_js").forEach((e) => e.classList.remove("active_js"));
}

function showElements() {
    if (headerLogoImage) headerLogoImage.classList.remove("hidden");
    if (headerLogoMobile) headerLogoMobile.classList.remove("hidden");
    if (welcomeContainer) welcomeContainer.style.position = "inherit";
    if (footerLogo) footerLogo.style.display = "none";
    sections.forEach((e) => e.classList.add("hidden"));
    document.querySelectorAll(".active_js").forEach((e) => e.classList.remove("active_js"));
}

function togglePage(link) {
    const idPage = link.split("#")[1];
    const targetElement = document.getElementById(idPage);

    if (!targetElement) return;

    const parentSection = targetElement.closest("section"); 

    if (parentSection) {
        sections.forEach((e) => e.classList.add("hidden"));
        hideElements();
        parentSection.classList.remove("hidden");
        scrollToElement(targetElement); 
    } else {
        sections.forEach((e) => e.classList.add("hidden"));
        hideElements();
        targetElement.classList.remove("hidden");
        scrollToElement(targetElement);
    }

    const currentLink = document.querySelector(`[href="${link}"]`);
    if (currentLink) currentLink.closest("li").classList.add("active_js");
}

function scrollToElement(element) {
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - 70; 
    window.scrollTo({
        top: elementPosition,
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
        }
    });
});

footerLogo?.addEventListener("click", showElements);
document.querySelector(".header__logo")?.addEventListener("click", showElements);
window.addEventListener("scroll", handleScroll);