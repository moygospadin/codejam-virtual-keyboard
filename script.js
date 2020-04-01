import { keyboardKeys, engKeys, engKeysUpperCase, engKeysShift /*, rusKeys, rusKeysUpperCase, rusKeysShift, specialKeys, specialKeysWidth*/ } from './keyboard.js';
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

        let element = document.querySelector('div[data="' + `${event.keyCode}` + '"]');

        element.classList.add('active');

        switch (event.key) {
            case 'ArrowDown':
                document.getElementById('text').value += '↓';
                break;
            case 'ArrowUp':
                document.getElementById('text').value += '↑';
                break;
            case 'ArrowLeft':
                document.getElementById('text').value += '←';
                break;
            case 'ArrowRight':
                document.getElementById('text').value += '→';
                break;
            case 'Backspace':

                backSpace();
                break;
            case 'CapsLock':
                CapsLock(element);

                break;
            case 'Shift':

                Shift(engKeysShift);
                break;
            default:
                console.log(element);
                document.getElementById('text').value += element.innerHTML;
                break;
        }

    });
    document.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'ArrowDown':
                document.getElementById('text').value += '';
                break;
            case 'ArrowUp':
                document.getElementById('text').value += '';
                break;
            case 'ArrowLeft':
                document.getElementById('text').value += '';
                break;
            case 'ArrowRight':
                document.getElementById('text').value += '';
                break;
            case 'Backspace':
                break;

            case 'Shift':

                Shift(engKeys);
                break;
            default:
                console.log(event.key);

                break;
        }

        let element = document.querySelector('div[data="' + `${event.keyCode}` + '"]');
        console.log(element);
        element.classList.remove('active');
    });


    /*-------------------------------Mouse------------------------------------------------ */

    document.addEventListener('mousedown', (event) => {


        if (event.target.classList.value == "key-def" || event.target.classList.value == "key-def activeShift") {

            console.log(event.target.innerHTML);

            switch (event.target.innerHTML) {

                case 'Backspace':
                    backSpace();
                    break;

                case 'Shift':

                    Shift(engKeysShift);
                    event.target.classList.add('active');
                    break;

                case 'Caps Lock':
                    console.log("dawdwa");

                    CapsLock(event.target);
                    event.target.classList.add('active');

                    break;
                default:
                    console.log(event.target);
                    document.getElementById('text').value += (event.target.innerHTML);
                    event.target.classList.add('active');
                    break;
            }




        }

    });

    event.target.addEventListener('mouseout', (event) => {

        switch (event.target.innerHTML) {

            case 'Shift':

                Shift(engKeys);

                break;
            default:

                break;
        }

        event.target.classList.remove('active');
    });

    event.target.addEventListener('mouseup', (event) => {

        switch (event.target.innerHTML) {

            case 'Shift':

                Shift(engKeys);
                break;
            default:

                break;
        }

        event.target.classList.remove('active');
    });






    /*Функции*/
    function backSpace() {

        document.getElementById('text').value = document.getElementById('text').value.slice(0, -1);

    }


    function CapsLock(element) {
        const word = document.querySelector('div[data="65"]');
        console.log("word", word);

        if (word.innerHTML == "A") {
            keysContent(engKeys);
            element.classList.remove('activeShift');
        } else {
            keysContent(engKeysUpperCase);
            element.classList.add('activeShift');
        }
    }

    function Shift(Keys) {

        keysContent(Keys);
    }


    const keys = document.querySelectorAll('#keyboard div');
    const keysContent = (langKeys) => {
        let i = 0;
        keys.forEach((el) => {
            el.innerText = langKeys[i];
            i++;
        });
    }


}