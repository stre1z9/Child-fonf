let slides = document.querySelectorAll('.slide');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let currentSlide = 0;


function transitionSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

prevButton.addEventListener('click', () => {
    transitionSlide((currentSlide - 1 + slides.length) % slides.length);
});

nextButton.addEventListener('click', () => {
    transitionSlide((currentSlide + 1) % slides.length);
});


setInterval(() => {
    transitionSlide((currentSlide + 1) % slides.length);
}, 5000); 

function toggleCard(card) {
    const allCards = document.querySelectorAll('.facefond .fac');

    allCards.forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('open');
        }
    });
    card.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function() {
    const pockets = document.querySelectorAll('.pocket');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalImage = document.getElementById('modal-image');
    const modalChildName = document.getElementById('modal-child-name');
    const donateButton = document.getElementById('donate-button');
    const donateBlock = document.getElementById('donate-block');

    pockets.forEach(pocket => {
        pocket.addEventListener('click', function() {
            const childName = this.dataset.childName;
            const imageSrc = this.querySelector('img').src;

            modalImage.src = imageSrc;
            modalImage.alt = childName;
            modalChildName.textContent = childName;

            modal.classList.add('open');
        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.remove('open');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('open');
        }
    });

    donateButton.addEventListener('click', function() {
        modal.classList.remove('open');
        // Прокрутка страницы до блока пожертвований
        donateBlock.scrollIntoView({ behavior: 'smooth' });
    });
});