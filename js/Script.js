// Get the elements with the class "domain-heading", "portfolio-heading", "blog-heading", "career-heading", and "contact-heading"
const homeItem = document.querySelector("#home-heading");
const aboutUsItem = document.querySelector("#aboutUs-heading");
const serviceItem = document.querySelector("#service-heading");
const domainItem = document.querySelector("#domain-heading");
const portfolioItem = document.querySelector("#portfolio-heading");
const blogItem = document.querySelector("#blog-heading");
const careerItem = document.querySelector("#career-heading");
const contactItem = document.querySelector("#contact-heading");

// Get the corresponding collapse elements
const homeCollapse = document.querySelector(".home-body");
const aboutUsCollapse = document.querySelector(".aboutUs-body");
const serviceCollapse = document.querySelector(".service-body");
const domainCollapse = document.querySelector(".domain-body");
const portfolioCollapse = document.querySelector(".portfolio-body");
const blogCollapse = document.querySelector(".blog-body");
const careerCollapse = document.querySelector(".career-body");
const contactCollapse = document.querySelector(".contact-body");

// Function to handle mouseenter for each element
function handleMouseEnter(item, collapse) {
    item.addEventListener("mouseenter", function () {
        hideAllCollapses();
        collapse.style.display = "block"; // Assuming the initial state is "display: none;"
        fadeIn(collapse);
    });
}

// Function to handle mouseleave for each collapse element
function handleMouseLeave(collapse) {
    collapse.addEventListener("mouseleave", function () {
        fadeOut(collapse);
    });
}

// Apply the functionality to each item and collapse element
handleMouseEnter(homeItem, homeCollapse);
handleMouseEnter(aboutUsItem, aboutUsCollapse);
handleMouseEnter(serviceItem, serviceCollapse);
handleMouseEnter(domainItem, domainCollapse);
handleMouseEnter(portfolioItem, portfolioCollapse);
handleMouseEnter(blogItem, blogCollapse);
handleMouseEnter(careerItem, careerCollapse);
handleMouseEnter(contactItem, contactCollapse);

handleMouseLeave(homeCollapse);
handleMouseLeave(aboutUsCollapse);
handleMouseLeave(serviceCollapse);
handleMouseLeave(domainCollapse);
handleMouseLeave(portfolioCollapse);
handleMouseLeave(blogCollapse);
handleMouseLeave(careerCollapse);
handleMouseLeave(contactCollapse);

// Function to fade in an element
function fadeIn(element) {
    let opacity = 0;
    const fadeEffect = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 1);
}

// Function to fade out an element
function fadeOut(element) {
    let opacity = 1;
    const fadeEffect = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            element.style.display = "none";
            clearInterval(fadeEffect);
        }
    }, 10);
}
function hideAllCollapses() {
    homeCollapse.style.display="none";
    aboutUsCollapse.style.display="none";
    serviceCollapse.style.display="none";
    serviceCollapse.style.display="none";
    domainCollapse.style.display = "none";
    portfolioCollapse.style.display = "none";
    blogCollapse.style.display = "none";
    careerCollapse.style.display = "none";
    contactCollapse.style.display = "none";
}
serviceCollapse.addEventListener("mouseenter", function () {
    // Add the 'active-service' class to the service heading
    serviceItem.classList.add("active-service");
  });

  // Add an event listener for mouseleave on the service body
  serviceCollapse.addEventListener("mouseleave", function () {
    // Remove the 'active-service' class from the service heading
    serviceItem.classList.remove("active-service");
  });

  domainCollapse.addEventListener("mouseenter", function () {
    // Add the 'active-service' class to the service heading
    domainItem.classList.add("active-service");
  });

  // Add an event listener for mouseleave on the service body
  domainCollapse.addEventListener("mouseleave", function () {
    // Remove the 'active-service' class from the service heading
    domainItem.classList.remove("active-service");
  });


  portfolioCollapse.addEventListener("mouseenter", function () {
    // Add the 'active-service' class to the service heading
    portfolioItem.classList.add("active-service");
  });

  // Add an event listener for mouseleave on the service body
  portfolioCollapse.addEventListener("mouseleave", function () {
    // Remove the 'active-service' class from the service heading
    portfolioItem.classList.remove("active-service");
  });


  blogCollapse.addEventListener("mouseenter", function () {
    // Add the 'active-service' class to the service heading
    blogItem.classList.add("active-service");
  });

  // Add an event listener for mouseleave on the service body
  blogCollapse.addEventListener("mouseleave", function () {
    // Remove the 'active-service' class from the service heading
    blogItem.classList.remove("active-service");
  });

  careerCollapse.addEventListener("mouseenter", function () {
    // Add the 'active-service' class to the service heading
    careerItem.classList.add("active-service");
  });

  // Add an event listener for mouseleave on the service body
  careerCollapse.addEventListener("mouseleave", function () {
    // Remove the 'active-service' class from the service heading
    careerItem.classList.remove("active-service");
  });

  contactCollapse.addEventListener("mouseenter", function () {
   
    contactItem.classList.add("active-service");
  });


  contactCollapse.addEventListener("mouseleave", function () {
  
    contactItem.classList.remove("active-service");
  });


window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add("navbar-sticky");
  } else {
    navbar.classList.remove("navbar-sticky");
  }
});




const heroSection = document.getElementById('hero-section');
const collapseSection = document.getElementById('navbarSupportedContent');


collapseSection.addEventListener('show.bs.collapse', function () {

  heroSection.classList.add('hidden-hero');
});

collapseSection.addEventListener('hidden.bs.collapse', function () {

  heroSection.classList.remove('hidden-hero');
});

// var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
//   interval: 2000, // Adjust as needed
//   wrap: true
// });















