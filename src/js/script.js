window.addEventListener('DOMContentLoaded', function() {
    
    "use strict";
    let modalVisit = require('./parts/modal-visit.js'),
        modalPopup = require('./parts/modal-popup.js'),
        modalCall = require('./parts/modal-call.js'),
        calc = require('./parts/calc.js'),
        tabsWindow = require('./parts/tabs-window.js'),
        modalForm = require('./parts/modal-form.js'),
        tabsFasing = require('./parts/tabs-facing.js'),
        form = require('./parts/form.js'),
        timer = require('./parts/timer.js'),
        clickImg = require('./parts/click-img.js');

    modalVisit();
    modalPopup();
    modalCall();
    calc(); 
    tabsWindow();
    modalForm();
    tabsFasing();
    form();
    timer();
    clickImg();
});