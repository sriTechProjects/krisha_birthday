document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.getElementById('birthday-greeting');
    const message = document.getElementById('message');
    const name = document.getElementById('name');
    const yourName = document.getElementById('your-name');

    // Personalize message dynamically
    name.textContent = "Krisha"; // Replace with your friend's name
    yourName.textContent = "Srivaths"; // Names displayed at the end

    // Fade-in effect for the birthday message
    setTimeout(() => {
        message.style.opacity = 1;
        message.style.transition = 'opacity 2s ease-in-out';
    }, 500);

    // Add hover effect to images
    const images = document.querySelectorAll('.image-item');
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});
