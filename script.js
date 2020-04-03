import {
    keyboardKeys,
    engKeys,
    engKeysUpperCase,
    engKeysShift,
    rusKeys,
    rusKeysUpperCase,
    rusKeysShift

} from './keyboard.js';
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




    var timeStamp = 0;


    document.addEventListener('keydown', (event) => {

        console.log("down", event);
        let element = document.querySelector('div[data="' + `${event.keyCode}` + '"]');

        if ((event.key == "Shift" && event.altKey) || (event.key == "Alt" && event.shiftKey)) {
            let slovo = document.querySelector('div[data="81"]').innerHTML;
            if (slovo == "q" || slovo == "Q")
                keysContent(rusKeys);
            else keysContent(engKeys);
        } else {

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
                case 'CapsLock':


                    break;
                case 'Backspace':

                    backSpace();
                    break;

                case 'Shift':
                    Shift();

                    break;
                default:

                    document.getElementById('text').value += element.innerHTML;
                    break;
            }
        }

    });
    document.addEventListener('keyup', (event) => {

        console.log("up", event);

        let element = document.querySelector('div[data="' + `${event.keyCode}` + '"]');
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
            case 'CapsLock':
                CapsLock(element);

                break;
            case 'Shift':
                Shift();

                break;
            default:
                console.log(event.key);

                break;
        }



        element.classList.remove('active');

    });


    /*-------------------------------Mouse------------------------------------------------ */

    document.addEventListener('mousedown', (event) => {


        if (event.target.classList.value == "key-def" || event.target.classList.value == "key-def activeShift") {
            event.target.classList.add('active');
            console.log(event.target.innerHTML);

            switch (event.target.innerHTML) {

                case 'Backspace':
                    backSpace();
                    break;

                case 'Shift':

                    Shift();

                    break;

                case 'Caps Lock':
                    console.log("dawdwa");

                    CapsLock(event.target);


                    break;
                default:
                    console.log(event.target);
                    document.getElementById('text').value += (event.target.innerHTML);

                    break;
            }




        }

    });

    event.target.addEventListener('mouseout', (event) => {

        switch (event.target.innerHTML) {

            case 'Shift':



                break;
            default:

                break;
        }

        event.target.classList.remove('active');
    });

    event.target.addEventListener('mouseup', (event) => {

        switch (event.target.innerHTML) {

            case 'Shift':


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

    function Shift() {

        let slovo = document.querySelector('div[data="81"]').innerHTML;

        switch (slovo) {
            case "q":
                keysContent(engKeysShift);
                break;
            case "Q":
                keysContent(engKeys);
                break;

            case "й":
                keysContent(rusKeysShift);
                break;

            case "Й":
                keysContent(rusKeys);
                break;

            default:
                break;
        }
    }


    const keys = document.querySelectorAll('#keyboard div');
    const keysContent = (langKeys) => {
            let i = 0;
            keys.forEach((el) => {
                el.innerText = langKeys[i];
                i++;
            });
        }
        /*переключение языка*/

    // document.onkeydown = function(e) {
    //     console.log(e.keyCode);



    //     if (e.shiftKey && e.altKey) {
    //         let slovo = document.querySelector('div[data="81"]').innerHTML;
    //         if (slovo == "q" || slovo == "Q")
    //             keysContent(rusKeys);
    //         else keysContent(engKeys);


    //     } else
    //     if (e.shiftKey) {
    //         console.log(e);
    //         Shift();
    //     }
    //     return true;

    // }




    /* ************END*********** */
}