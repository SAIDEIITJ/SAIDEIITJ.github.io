const themes = document.querySelectorAll('.theme');
let currentIndex = 0;

// Get popup elements
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDiv = document.getElementById('popup-div');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const carouselInner = document.getElementById('carousel-inner');
const carouselDots = document.getElementById('carousel-dots');

function openPopup(index) {
    const theme = themes[index];
    const title = theme.querySelector('#h3title').textContent;
    const hiddenContent = theme.querySelector('.hidden');
    const bgImage = theme.getAttribute('data-bg-image');
    const dataEquipment = theme.getAttribute('data-equipment'); // Get the data-equipment attribute

    currentIndex = index;
    popupTitle.textContent = title;
    popupDiv.innerHTML = hiddenContent.innerHTML; 
    popup.style.display = 'block';
    popup.style.backgroundImage = bgImage;

    // Clear previous carousel content
    carouselInner.innerHTML = '';
    carouselDots.innerHTML = ''; // Clear previous dots

    let equipmentArray = [];
    if (dataEquipment) {
        try {
            equipmentArray = JSON.parse(dataEquipment); // Try to parse equipment if dataEquipment is not empty
        } catch (error) {
            console.error("Failed to parse equipment data:", error);
        }
    }

    // Add heading for associated faculty
    const equipHeading = document.createElement('h3');
    equipHeading.id = 'lab-title';
    equipHeading.textContent = "Equipment";
    carouselInner.appendChild(equipHeading); // Add the heading before the carousel images

    if (equipmentArray.length === 0) {
        // If no equipment is available, display a message
        const noEquipmentMessage = document.createElement('p');
        noEquipmentMessage.textContent = "Coming up soon...";
        carouselInner.appendChild(noEquipmentMessage);
    } else {
        // Populate carousel with equipment details
        equipmentArray.forEach((equip, imgIndex) => {
            if (equip.hidden === 0) { // Only include equipment that is not hidden
                const imgDiv = document.createElement('div');
                imgDiv.className = imgIndex === 0 ? 'carousel-item active' : 'carousel-item';
                imgDiv.innerHTML = `
                <div class="carousel-content">
                <img src="${equip.imageSrc}" alt="${equip.name}">
                <div class="carousel-description">
                  <div class="equip-heading">${equip.name}</div>
                  <p>${equip.description}</p>
                </div>
              </div>
                `;
                carouselInner.appendChild(imgDiv);

                // Create dot for each equipment
                const dot = document.createElement('span');
                dot.className = imgIndex === 0 ? 'dot active' : 'dot';
                dot.addEventListener('click', () => {
                    currentIndex = imgIndex; // Update currentIndex to the clicked dot index
                    showSlides(currentIndex); // Show the corresponding slide
                });
                carouselDots.appendChild(dot);
            }
        });
    }

    nextButton.style.display = (currentIndex < themes.length - 1) ? 'block' : 'none';
    prevButton.style.display = (currentIndex > 0) ? 'block' : 'none';

    // Show the first slide or message
   // showSlides(currentIndex);
}


// Function to show slides based on index
function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) { currentIndex = 0; }
    if (index < 0) { currentIndex = slides.length - 1; }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');

    updateArrowVisibility();
}

// Function to close popup
function closePopup() {
    popup.style.display = 'none';
}

// Function to show next theme
function showNextTheme() {
    if (currentIndex < themes.length - 1) {
        openPopup(currentIndex + 1);
    }
}

// Function to show previous theme
function showPrevTheme() {
    if (currentIndex > 0) {
        openPopup(currentIndex - 1);
    }
}

// Attach click event listener to each theme
themes.forEach((theme, index) => {
    theme.addEventListener('click', () => {
        openPopup(index);
    });
});

// Attach click event listener to close button
document.querySelector('.close').addEventListener('click', closePopup);

// Attach click event listeners to next and prev buttons
nextButton.addEventListener('click', showNextTheme);
prevButton.addEventListener('click', showPrevTheme);

// Close popup on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    } else if (event.key === 'ArrowRight') {
        showNextTheme();
    } else if (event.key === 'ArrowLeft') {
        showPrevTheme();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('.lazyload');

    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove('lazyload');
                imageObserver.unobserve(image);
            }
        });
    });

    lazyImages.forEach(function(image) {
        imageObserver.observe(image);
    });
});

  
