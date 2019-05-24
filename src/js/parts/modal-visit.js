function modalVisit() {

    let delayPopup = 60000;

    function show() {
        let popup = document.querySelector('.popup');
            
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // При клике на подложку или крестик форма становится невидимой
        popup.addEventListener('click', (event) => {

            let target = event.target,
                content = document.querySelector('.popup_content'),
                close = document.querySelector('.popup_close');
                
            if (!content.contains(target) || close.contains(target)) {
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