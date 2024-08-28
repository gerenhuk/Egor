// Отримуємо трек слайдера та всі слайди
const heroTrack = document.querySelector('.hero-slider-track'); 
const heroSlides = Array.from(document.querySelectorAll('.hero-slide')); 

// Встановлюємо ширину слайду разом з відстанню між слайдами
const heroSlideWidth = 490 + 40; 

// Ініціалізуємо поточний індекс слайда та стан руху слайдера
let heroCurrentIndex = 0;
let heroIsMoving = false;

// Клонування першого і останнього слайдів для створення безкінечного ефекту
const heroFirstClone = heroSlides[0].cloneNode(true);
const heroLastClone = heroSlides[heroSlides.length - 1].cloneNode(true);

// Додаємо клоновані слайди на початок та кінець треку
heroTrack.appendChild(heroFirstClone);
heroTrack.insertBefore(heroLastClone, heroSlides[0]);

// Функція оновлення позиції слайдера
function updateHeroSliderPosition() {
    // Додаємо анімацію для плавного переходу
    heroTrack.style.transition = 'transform 0.5s ease-in-out';
    
    // Розраховуємо зсув для поточного слайда
    const heroOffset = -heroSlideWidth * (heroCurrentIndex + 1);
    
    // Застосовуємо зсув до треку
    heroTrack.style.transform = `translateX(${heroOffset}px)`;
}

// Функція для переходу до наступного слайда
function nextHeroSlide() {
    if (heroIsMoving) return; // Перевіряємо, чи слайдер не в русі
    heroIsMoving = true; // Встановлюємо стан руху
    heroCurrentIndex++; // Збільшуємо індекс поточного слайда
    updateHeroSliderPosition(); // Оновлюємо позицію слайдера

    // Перевірка, якщо слайд останній, повертаємось до початку
    if (heroCurrentIndex === heroSlides.length) {
        setTimeout(() => {
            heroTrack.style.transition = 'none'; // Вимикаємо анімацію
            heroCurrentIndex = 0; // Скидаємо індекс
            heroTrack.style.transform = `translateX(${
                -heroSlideWidth * (heroCurrentIndex + 1)
            }px)`; // Повертаємося до першого слайда
            heroIsMoving = false; // Встановлюємо стан нерухомості
        }, 500);
    } else {
        heroIsMoving = false; // Якщо не останній, просто знімаємо стан руху
    }
}

// Автоматична зміна слайдів кожні 3 секунди
setInterval(nextHeroSlide, 3000);

// Ініціалізація позиції слайдера на першому клонованому слайді
heroTrack.style.transform = `translateX(${
    -heroSlideWidth * (heroCurrentIndex + 1)
}px)`;

// Подібний код для іншого слайдера
const track = document.querySelector('.slider-track'); 
const slides = Array.from(document.querySelectorAll('.slide')); 
const slideWidth = 616 + 40; 
let currentIndex = 0;
let isMoving = false;

// Клонування першого і останнього слайдів для безкінечного ефекту
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// Додаємо клоновані слайди на початок та кінець треку
track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

// Функція оновлення позиції слайдера
function updateSliderPosition() {
    track.style.transition = 'transform 0.5s ease-in-out';
    const offset = -slideWidth * (currentIndex + 1);
    track.style.transform = `translateX(${offset}px)`;
}

// Функція для переходу до наступного слайда
function nextSlide() {
    if (isMoving) return;
    isMoving = true;
    currentIndex++;
    updateSliderPosition();

    // Перевірка, якщо слайд останній, повертаємось до початку
    if (currentIndex === slides.length) {
        setTimeout(() => {
            track.style.transition = 'none';
            currentIndex = 0;
            track.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;
            isMoving = false;
        }, 500);
    } else {
        isMoving = false;
    }
}

// Функція для переходу до попереднього слайда
function prevSlide() {
    if (isMoving) return;
    isMoving = true;
    currentIndex--;
    updateSliderPosition();

    // Перевірка, якщо слайд перший, повертаємось до кінця
    if (currentIndex === -1) {
        setTimeout(() => {
            track.style.transition = 'none';
            currentIndex = slides.length - 1;
            track.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;
            isMoving = false;
        }, 500);
    } else {
        isMoving = false;
    }
}

// Автоматична зміна слайдів кожні 3 секунди
setInterval(nextSlide, 3000);

// Ініціалізація позиції слайдера на першому клонованому слайді
track.style.transform = `translateX(${-slideWidth * (currentIndex + 1)}px)`;
