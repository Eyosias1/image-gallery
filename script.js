
// Function to open the lightbox
window.onload = function() {
  var images = document.querySelectorAll('.container > a > img');
  images.forEach((image, index) => {
      image.parentElement.setAttribute('onclick', `openLightbox(${index})`);
  });
};
let currentImageIndex = 0;
function openLightbox() {
  var lightbox =  document.getElementById('lightbox');
  lightbox.classList.add('active');
}

// Function to close the lightbox
function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  currentImageIndex = 0;
}

function openLightbox(index) {
  currentImageIndex = index;
  var images = document.querySelectorAll('.container > a > img');
  var lightboxImage = document.getElementById('lightbox-image');

  lightboxImage.src = images[currentImageIndex].src;
  document.getElementById('lightbox').classList.add('active'); // Assuming this is how you open the lightbox
}

function change(direction) {
  var images = document.querySelectorAll('.image-link > img');
  if (!images.length) {
      console.error("No images found in the container");
      return;
  }
  var lightboxImage = document.getElementById('lightbox-image');
  const totalImages = images.length;
  if (direction === "prev") {
    if (currentImageIndex == 0) {
      currentImageIndex = totalImages - 1;
    }
    else {
      currentImageIndex = (currentImageIndex - 1) % totalImages;
    }
  }
  else {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
  }
  lightboxImage.src =  images[currentImageIndex].src;
}
