const bookNowButton = document.querySelector(".button");

bookNowButton.addEventListener("click", function() {
  window.location.href = "package.html";
});

// slider js for images
$(document).ready(function() {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = $(".slider img");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1500); // Change image every 5 seconds
  }
});

const addTestimonialBtn = document.getElementById('add-testimonial');
addTestimonialBtn.addEventListener('click', function() {
  const testimonialFormWrapper = document.getElementById('testimonial-form-wrapper');
  testimonialFormWrapper.classList.remove('hidden');
});

// testimonial adding section
const testimonialForm = document.querySelector('#testimonial-form');
const testimonialList = document.querySelector('.testimonial-list');

// Get testimonials from local storage
let testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];

// Add saved testimonials to the testimonial list
if (testimonials.length > 0) {
  testimonials.forEach(function(testimonial) {
    const newTestimonial = createTestimonialElement(testimonial.text, testimonial.rating, testimonial.image);
    testimonialList.appendChild(newTestimonial);
  });
}

testimonialForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const testimonialText = document.querySelector('#testimonial-text').value;
  const testimonialRating = document.querySelector('#testimonial-rating').value;
  const testimonialImage = document.querySelector('#testimonial-image').files[0];

  // Create a new testimonial element
  const newTestimonial = createTestimonialElement(testimonialText, testimonialRating, testimonialImage);

  // Add the new testimonial to the testimonial list
  testimonialList.appendChild(newTestimonial);

  // Save the new testimonial to local storage
  testimonials.push({
    text: testimonialText,
    rating: testimonialRating,
    image: testimonialImage ? URL.createObjectURL(testimonialImage) : ''
  });
  localStorage.setItem('testimonials', JSON.stringify(testimonials));

  // Hide the form and show the add testimonial button
  testimonialForm.parentNode.classList.add('hidden');
  document.querySelector('#add-testimonial').classList.remove('hidden');

  // Reset the form
  testimonialForm.reset();
});

function createTestimonialElement(text, rating, image) {
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');
    newTestimonial.innerHTML = `
      <div class="testimonial-content">
        <p>${text}</p>
        <div class="testimonial-rating">
          <span class="star ${rating >= 1 ? 'filled' : ''}">&#9733;</span>
          <span class="star ${rating >= 2 ? 'filled' : ''}">&#9733;</span>
          <span class="star ${rating >= 3 ? 'filled' : ''}">&#9733;</span>
          <span class="star ${rating >= 4 ? 'filled' : ''}">&#9733;</span>
          <span class="star ${rating == 5 ? 'filled' : ''}">&#9733;</span>
        </div>
        ${image ? `<img class="testimonial-image" src="${image}" alt="Testimonial Image">` : ''}
      </div>
    `;
    
    return newTestimonial;
  }

  
//   expand testimonial

// expand testimonial
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialLists = document.querySelector('.testimonial-list');
const expandBtn = document.querySelector('#expand-btn');
const showLessBtn = document.querySelector('#show-less-btn');

// Show limited number of testimonials
let testimonialsToShow = 6;
let displayedTestimonials = [];
if (testimonials.length > 0) {
  displayedTestimonials = testimonials.slice(0, testimonialsToShow);
  displayedTestimonials.forEach(function(testimonial) {
    const newTestimonial = createTestimonialElement(testimonial.text, testimonial.rating, testimonial.image);
    testimonialLists.appendChild(newTestimonial);
  });
}

// Expand container to show all testimonials
expandBtn.addEventListener('click', function() {
  testimonials.slice(testimonialsToShow).forEach(function(testimonial) {
    const newTestimonial = createTestimonialElement(testimonial.text, testimonial.rating, testimonial.image);
    testimonialList.appendChild(newTestimonial);
  });
  testimonialContainer.style.height = 'auto';
  expandBtn.style.display = 'none';
  showLessBtn.style.display = 'block';
});

// Hide expanded testimonials
showLessBtn.addEventListener('click', function() {
  testimonialContainer.style.height = '';
  expandBtn.style.display = 'block';
  showLessBtn.style.display = 'none';
  displayedTestimonials.forEach(function(testimonial) {
    testimonialList.removeChild(testimonial);
  });
});

// Create testimonial element
function createTestimonialElement(text, rating, image) {
  const newTestimonial = document.createElement('div');
  newTestimonial.classList.add('testimonial');
  newTestimonial.innerHTML = `
    <div class="testimonial-content">
      <p>${text}</p>
      <div class="testimonial-rating">
        <span class="star ${rating >= 1 ? 'filled' : ''}">&#9733;</span>
        <span class="star ${rating >= 2 ? 'filled' : ''}">&#9733;</span>
        <span class="star ${rating >= 3 ? 'filled' : ''}">&#9733;</span>
        <span class="star ${rating >= 4 ? 'filled' : ''}">&#9733;</span>
        <span class="star ${rating == 5 ? 'filled' : ''}">&#9733;</span>
      </div>
      ${image ? `<img class="testimonial-image" src="${image}" alt="Testimonial Image">` : ''}
    </div>
  `;
  return newTestimonial;
}

// show less button

// // Show limited number of testimonials
// let testimonialsToShow = 6;
// let displayedTestimonials = [];
// if (testimonials.length > 0) {
//   displayedTestimonials = testimonials.slice(0, testimonialsToShow);
//   displayedTestimonials.forEach(function(testimonial) {
//     const newTestimonial = createTestimonialElement(testimonial.text, testimonial.rating, testimonial.image);
//     testimonialList.appendChild(newTestimonial);
//   });
// }

// // Expand container to show all testimonials
// expandBtn.addEventListener('click', function() {
//   testimonials.slice(testimonialsToShow).forEach(function(testimonial) {
//     const newTestimonial = createTestimonialElement(testimonial.text, testimonial.rating, testimonial.image);
//     testimonialList.appendChild(newTestimonial);
//   });
//   testimonialContainer.style.height = 'auto';
//   expandBtn.style.display = 'none';
//   showLessBtn.style.display = 'block';
// });

// // Hide extra testimonials and show Show More button
// showLessBtn.addEventListener('click', function() {
//   displayedTestimonials.forEach(function(testimonial) {
//     const testimonialElem = testimonialList.querySelector(`[data-id="${testimonial.id}"]`);
//     testimonialList.removeChild(testimonialElem);
//   });
//   testimonialContainer.style.height = `${testimonialList.offsetHeight}px`;
//   expandBtn.style.display = 'block';
//   showLessBtn.style.display = 'none';
// });
