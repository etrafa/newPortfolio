const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".banner__texts", {});

const projects = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

projects.reveal(".my__projects__section", {});

const aboutMe = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

aboutMe.reveal(".about__me__section", {});
aboutMe.reveal(".certifications__javascript", {});

const technologies = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 3000,
  reset: true,
});

technologies.reveal(".technology__javascript", {});
technologies.reveal(".contact__me__section", {});
