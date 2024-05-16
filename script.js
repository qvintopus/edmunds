document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    const images = [
        '20180815_165609.jpg', 'doors.jpg', 'durvs.jpg',
        'ER_April_005.jpg', 'ER_manekens_01.jpg', 'RITERS_EDMUNDS_WOMANHOOD_UNVEILED_WHM_2024_12.jpg',
        'RITERS_EDMUNDS_WOMANHOOD_UNVEILED_WHM_2024_16.jpg', 'Riters_Edmunds01.jpg', 'Riters_Edmunds06.jpg',
        'SpringScreen27.jpg'
    ];
    const imageGap = '20px'; // Definable image gap, can be adjusted as needed
    const maxHeight = '500px'; // Definable maximum height for images
    const maxWidth = '300px'; // Definable maximum width for images

    // Set the CSS variables for the gap, max height, and max width
    document.documentElement.style.setProperty('--image-gap', imageGap);
    document.documentElement.style.setProperty('--max-height', maxHeight);
    document.documentElement.style.setProperty('--max-width', maxWidth);
    gallery.style.gap = imageGap;

    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imgElement.alt = `Image ${index + 1}`; // Providing alt text for accessibility
        imgElement.style.maxHeight = maxHeight; // Ensuring it does not exceed maximum height
        imgElement.style.maxWidth = maxWidth; // Ensuring it does not exceed maximum width
        imgElement.classList.add('gallery-img'); // Add class for targeting clicks
        gallery.appendChild(imgElement);
    });

    // Modal functionality
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    // Function to open modal with specific image
    function openModal(imgSrc, altText) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        captionText.textContent = altText;
    }

    // Adding click event to gallery images
    document.querySelectorAll('.gallery-img').forEach((img, idx) => {
        img.onclick = () => openModal(img.src, img.alt);
    });

    // Close modal functionality
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // Next and previous slide functionality
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    function changeSlide(n) {
        const currentIndex = images.findIndex(img => img === modalImg.src.split('/').pop());
        let newIndex = currentIndex + n;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        openModal(`images/${images[newIndex]}`, `Art nr.${newIndex + 1}`);
    }

    next.onclick = () => changeSlide(1);
    prev.onclick = () => changeSlide(-1);
});
