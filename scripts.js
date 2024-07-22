function toggleSideBox() {
    const sideBox = document.getElementById('sideBox');
    const toggleButton = document.getElementById('toggleButton');
    sideBox.classList.toggle('open');
    if (sideBox.classList.contains('open')) {
        toggleButton.textContent = '<';
        toggleButton.style.left = '200px';
    } else {
        toggleButton.textContent = '>';
        toggleButton.style.left = '10px';
    }
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-container img');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); 
}

showSlides();

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  console.log('Toggle accordion for', this);
  const currentlyExpandedItem = document.querySelector('.accordion .accordion-item button[aria-expanded="true"]');
  
  if(currentlyExpandedItem && currentlyExpandedItem !== this) {
    currentlyExpandedItem.setAttribute('aria-expanded', 'false');
    const content = currentlyExpandedItem.nextElementSibling;
    content.style.maxHeight = null;
    content.style.opacity = '0';
  }

  const content = this.nextElementSibling;
  if(this.getAttribute('aria-expanded') === 'false') {
    this.setAttribute('aria-expanded', 'true');
    content.style.maxHeight = `${content.scrollHeight}px`;
    content.style.opacity = '1';
  } else {
    this.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = null;
    content.style.opacity = '0';
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
