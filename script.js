// Smooth scrolling for navigation links
// Select all anchor tags where the href starts with "#" (internal page links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  // Add a click event listener to each link
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default jump-to-section behavior

    // Get the target section using the href attribute of the link
    const targetSection = document.querySelector(this.getAttribute('href'));

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth' // Smooth scrolling instead of instant jump
    });
  });
});

// Scroll reveal animation
// Select all elements with the class 'reveal'
const revealElements = document.querySelectorAll('.reveal');

// Function to add the 'active' class when elements come into view
function revealOnScroll() {
  revealElements.forEach(element => {
    // Get the distance from the top of the viewport to the element
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // If the element is within 100px of being visible in the viewport, activate it
    if (elementTop < windowHeight - 100) {
      element.classList.add('active'); // Add class to trigger CSS animation
    }
  });
}

// Listen for scroll events on the window
// Every time the user scrolls, check which elements should be revealed
window.addEventListener('scroll', revealOnScroll);
