var store = require('store');

window.addEventListener('load', load);

function osmUrl() {
    var base = 'http://www.openstreetmap.org/';
    if (location.hash) base += location.hash.replace(/^#/, '');
    return base;
}

function devClear() {
    if (location.hash && location.hash === '#noskip') store.set('skip-page', false);
}

function setSkip() {
    store.set('skip-page', this.checked);
}

function setButtons() {
    var buttons = document.getElementsByClassName('start-mapping');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('href', osmUrl());
    }
}

function load() {
    devClear();
    if (store.get('skip-page')) location.href = osmUrl();
    setButtons();
    document.getElementById('skip').onchange = setSkip;
}
