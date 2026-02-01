/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Close menu when clicking a link
document.querySelectorAll(".nav_menu_list a").forEach((link) => {
  link.addEventListener("click", function () {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.className = "nav-menu";
  });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "80px";
    navHeader.style.lineHeight = "80px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: [
    "Full Stack Developer",
    "Computer Engineer",
    "React & Next.js Developer",
    "Laravel Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 800,
  reset: false,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 50 });
sr.reveal(".featured-text-info", { delay: 100 });
sr.reveal(".featured-text-btn", { delay: 150 });
sr.reveal(".social_icons", { delay: 150 });
sr.reveal(".featured-image", { delay: 200 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 100 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 800,
  reset: false,
});

srLeft.reveal(".about-info", { delay: 50 });
srLeft.reveal(".contact-info", { delay: 50 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 800,
  reset: false,
});

srRight.reveal(".skills-box", { delay: 50 });
srRight.reveal(".form-control", { delay: 50 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ----- DARK MODE THEME ----- */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-mode";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* ----- PRELOADER JS ----- */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const preName = document.getElementById("preName");

  if (preName) {
    const nameText = preName.getAttribute("data-name");
    preName.innerHTML = nameText
      .split("")
      .map((char, i) => {
        if (char === " ") return `<span style="width: 1rem;"></span>`;
        return `<span style="animation-delay: ${i * 0.08}s">${char}</span>`;
      })
      .join("");
  }

  // Minimum display time for luxury feel
  setTimeout(() => {
    preloader.classList.add("fade-out");

    // Remove from DOM after transition
    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }, 4000); // Wait for name animation to finish
});
