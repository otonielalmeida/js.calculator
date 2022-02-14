const textArea = document.querySelector('.display');


document.addEventListener('click', function (e) {
    e.preventDefault();
    const el = e.target;
    if (el.classList.contains('btn')) {
        textArea.innerHTML += el.innerText;
    };
    if (el.classList.contains('btnC')) {
        textArea.innerHTML = ' ';
    };
    if (el.classList.contains('btn<<')) {
        textArea.innerHTML = textArea.innerHTML.slice(0, -1);
    };
    if (el.classList.contains('btnEqual')) {
        textArea.innerHTML = eval(textArea.innerHTML);
        console.log(e);
    };
});

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        textArea.innerHTML += keyName;
        return;
    };
    if (keyName === '-') {
        textArea.innerHTML += keyName;
        return;
    };
    if (keyName === '+') {
        textArea.innerHTML += keyName;
        return;
    };
    if (keyName === '/') {
        textArea.innerHTML += keyName;
        return;
    };
    if (keyName === '*') {
        textArea.innerHTML += keyName;
        return;
    };
    if (keyName === '.') {
        textArea.innerHTML += keyName;
        return;
    };
    if (keyName === '(') {
        textArea.innerHTML += keyName;
        return;
    };
    if (keyName === ')') {
        textArea.innerHTML += keyName;
        return;
    };
    if (keyName === 'Enter') {
        textArea.innerHTML = eval(textArea.innerHTML);
        return;
    };
    if (keyName === 'Backspace') {
        textArea.innerHTML = textArea.innerHTML.slice(0, -1);
        return;
    };
    if (keyName === 'Delete') {
        textArea.innerHTML = '';
        return;
    };
});
