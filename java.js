const shareIcon = document.querySelector('.share-icon');
const socialIcons = document.querySelector('.footer');

shareIcon.addEventListener('click', () => {
    shareIcon.classList.toggle("active");
    socialIcons.classList.toggle("active");
})