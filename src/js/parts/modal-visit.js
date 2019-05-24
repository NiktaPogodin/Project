function modalVisit() {

    let delayPopup = 3000;

    function show() {
        let popup = document.querySelector('.popup'),
            close = document.querySelector('.popup_close');
            
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // При клике на крестик форма становится невидимой
        close.addEventListener('click', () => {
            popup.style.display = 'none';             
            document.body.style.overflow = '';
        });

        // При клике на подложку форма становится невидимой
        popup.addEventListener('click', (event) => {

            let target = event.target,
                content = document.querySelector('.popup_content');
                
            if (!content.contains(target)) {
                popup.style.display = 'none';
                document.body.style.overflow = '';
            } else {
                popup.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    setTimeout(show, delayPopup);
}

module.exports = modalVisit;