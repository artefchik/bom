const buttonInfo = document.querySelector('.button-info');
if (buttonInfo) {
    buttonInfo.addEventListener('click', function () {
        const textInfo = `${navigator.appCodeName}\n${navigator.appName}\n ${navigator.appVersion}`;
        document.querySelector('#textarea-1').value = textInfo;
    });
}

// const buttonScreen = document.querySelector('.button-screen');
const formScreen = document.querySelector('.form__screen');
if (formScreen) {
    formScreen.addEventListener('submit', (event) => {
        event.preventDefault();
        document.querySelector('#width').value = screen.width;
        document.querySelector('#height').value = screen.height;
        document.querySelector('#availHeight').value = screen.availHeight;
        document.querySelector('#availWidth').value = screen.availWidth;
    });
}

const back = document.querySelector('.back');
if (back) {
    back.addEventListener('click', function (e) {
        history.back();
    });
}

const linkFeik = document.querySelector('.link-feik');
if (linkFeik) {
    linkFeik.addEventListener('click', function (event) {
        event.preventDefault();
    });
}

const formCalculation = document.querySelector('.form__calculation');
if (formCalculation) {
    formCalculation.addEventListener('submit', (event) => {
        event.preventDefault();
        const dep = Number(document.querySelector('#dep').value);
        const percent = Number(document.querySelector('#percent').value);
        const result = document.querySelector('#result');
        result.value = dep - percent;
    });
    document.querySelector('.button__reset').addEventListener('click', function (event) {
        event.preventDefault();
        formCalculation.reset();
    });
}
