function tabsFasing() {
    let slideIndex = 1,
        slider = document.querySelector('.decoration_slider'),
        tabContent = document.querySelectorAll('.decoration_content_tab'),
        links = slider.getElementsByTagName('a'),
        noClick = slider.getElementsByClassName('no_click');

    showSlides(slideIndex);

    /*    ф-я показа слайдов    */

    function showSlides() {
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = 'none';
        }
        for (let i = 0; i < noClick.length; i++) {
            noClick[i].classList.remove('after_click');
        }
        
        tabContent[slideIndex - 1].style.display = 'block';
        noClick[slideIndex - 1].classList.add('after_click');
    }

    // Определяет текущий слайд, и устанавливает его
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Переход между слайдерами, при нажатии на ссылку
    slider.addEventListener('click',  (event) => {
        for (let i = 0; i < links.length + 1; i++) {
            if (event.target.classList.contains('links') && event.target == links[i - 1]) {
            currentSlide(i);
            }
        }
    });
}

module.exports = tabsFasing;