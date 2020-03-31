import { keyboardKeys, engKeys /*, engKeysUpperCase, engKeysShift, rusKeys, rusKeysUpperCase, rusKeysShift, specialKeys, specialKeysWidth*/ } from './keyboard.js';
window.onload = function() {
    const textarea = '<div class="textarea"><textarea id="text" name="name" rows="8" cols="80" readonly></textarea></div>';
    const keyboard = '<div id="keyboard"></div>';
    const languageP = '<p class="language">Eng</p>';
    const body = document.querySelector('body');


    body.insertAdjacentHTML('afterbegin', keyboard);
    body.insertAdjacentHTML('afterbegin', languageP);
    body.insertAdjacentHTML('afterbegin', textarea);

    let initKeyboad = () => {
        // const langKeys = isEng === 1 ? engKeys : rusKeys;
        // languageHtml.innerText = isEng === 1 ? 'Eng' : 'Rus';
        let i = 0;
        let keyValue = '';
        keyboardKeys.forEach((el) => {
            keyValue += `<div class="key-def" data=` + el + `>${engKeys[i]}</div>`;
            i++;
        });
        document.getElementById('keyboard').innerHTML = keyValue;

    }
    initKeyboad();

    document.addEventListener('keydown', (event) => {
        // event.key
        // console.log(event);
        let element = document.querySelector('div[data="' + `${event.keyCode}` + '"]');
        // console.log(element);
        // console.log(event.key);
        element.classList.add('active');
        if (event.key == "Backspace") {
            console.log("21");
            backSpace();
        } else
            document.getElementById('text').value += event.key;
    });
    document.addEventListener('keyup', (event) => {
        let element = document.querySelector('div[data="' + `${event.keyCode}` + '"]');
        element.classList.remove('active');
    });
    const divKey = document.querySelectorAll('.key-def');

    divKey.forEach(elem => {
        elem.addEventListener('click', (event) => {
            // console.log("!", event.target.innerHTML, "!");
            if (event.target.innerHTML == "Backspace") {
                console.log("21");
                backSpace();
            } else
                document.getElementById('text').value += (event.target.innerHTML);

        });
    });


    function backSpace() {
        // console.log("212");
        document.getElementById('text').value = document.getElementById('text').value.slice(0, -1);

    }
}