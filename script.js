const carousel = document.getElementById('carouselExampleControls');

// Set the interval time (in milliseconds)
const intervalTime = 5000; // 5 seconds

// Set the current slide index
let currentSlide = 0;

// Function to move to the next slide
function nextSlide() {
  const prevSlide = currentSlide;
  currentSlide = (currentSlide + 1) % 3; // Loop through the slides

  // Add classes to handle sliding animation
  const items = carousel.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
    item.classList.remove('active', 'prev');
    if (index === currentSlide) {
      item.classList.add('active');
    } else if (index === prevSlide) {
      item.classList.add('prev');
    }
  });
}

// Set the interval timer
let timer = setInterval(nextSlide, intervalTime);

// Function to reset the timer
function resetTimer() {
  clearInterval(timer); // Clear the previous timer
  timer = setInterval(nextSlide, intervalTime); // Set a new timer
}

// Add event listener to reset the timer when there's user interaction
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('click', resetTimer);
document.addEventListener('touchstart', resetTimer);

// Function to show the registration form and dim the background
function dim() {
  document.getElementById('registrationForm').style.display = 'block';
  document.querySelector('.dimmer').style.display = 'block';
  document.querySelector('body').classList.add('no-scroll');
}

// Function to hide the registration form and remove the dim effect
function hideForm() {
  document.getElementById('registrationForm').style.display = 'none';
  document.querySelector('.dimmer').style.display = 'none';
  document.querySelector('body').classList.remove('no-scroll');
}

document.addEventListener('DOMContentLoaded', function () {
  const brandLogosInner = document.querySelector('.brand-logos-inner');
  const brandLogosClone = brandLogosInner.cloneNode(true);
  brandLogosInner.parentElement.appendChild(brandLogosClone);
});

const selectElement = document.getElementById('produk');

selectElement.addEventListener('change', function() {
            if (this.value === "") {
                this.style.color = '#999'; // Placeholder color
            } else {
                this.style.color = '#000'; // Selected option color
            }
        });

        // Initial check to set the color correctly on page load
        window.addEventListener('load', function() {
            if (selectElement.value === "") {
                selectElement.style.color = '#999'; // Placeholder color
            } else {
                selectElement.style.color = '#000'; // Selected option color
            }
        });
      
        window.addEventListener("scroll", function() {
          const navbar = document.querySelector(".navbar");
          if (window.scrollY > 100) { // setelah di-scroll 100px
            navbar.classList.add("scroll-navbar");
          } else {
            navbar.classList.remove("scroll-navbar");
          }
        });
        
        document.querySelectorAll('.navba li').forEach((li) => {
          li.addEventListener('mouseover', () => {
            li.classList.add('hover');
          });
    
          li.addEventListener('mouseout', () => {
            li.classList.remove('hover');
          });
        });

        $(document).ready(function () {
          $('.carousel').carousel({
              padding: 200
          });
          autoplay()
          function autoplay() {
              $('.carousel').carousel('next');
              setTimeout(autoplay, 4500);
          }
      });