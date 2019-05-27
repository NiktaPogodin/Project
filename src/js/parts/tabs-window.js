function tabsWindow() {
    let slideIndex = 1,
        slider = document.querySelector('.glazing_slider'),
        container = document.querySelectorAll('.container')[2],
        links = slider.getElementsByTagName('a'),
        content = container.getElementsByClassName('row');
  
    showSlides(slideIndex);

    /*    ф-я показа слайдов    */
  
    function showSlides() {
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = 'none';
        }
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
        }

        content[slideIndex - 1].style.display = 'block';
        links[slideIndex -1].classList.add('active');
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

module.exports = tabsWindow;