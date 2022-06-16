let renderElements = () => {
  let myScript = document.createElement("script");
  myScript.type = "text/javascript";
  myScript.setAttribute("src", "../../js/app.js");
  document.body.appendChild(myScript);
};

//fetch function for intro section
fetch("../../intro/intro.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".intro-section").innerHTML = data;
  });

//fetch function for about section
fetch("../../about/about.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".about-section").innerHTML = data;
  });

//fetch function for services section
fetch("../../services/services.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".service-sec").innerHTML = data;
  });

//fetch function for transparent image section
fetch("../../transparent image/transparent.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".transparent-img").innerHTML = data;
  });

//fetch function for skills section
fetch("../../skills/skills.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".skills-section").innerHTML = data;
  });

//fetch function for education section
fetch("../../education/education.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".education-section").innerHTML = data;
  });

//fetch function for experience section
fetch("../../experience/experience.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".experience-section").innerHTML = data;
  });

//fetch function for work section
fetch("../../work/work.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".work-section").innerHTML = data;
  });

//fetch function for contact section
fetch("../../contact/contact.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".contact-section").innerHTML = data;
    renderElements();
  });
