
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let body = document.querySelector('body');
let isDarkMode = false; 

btn1.addEventListener('click', () => {
    let inp1 = document.querySelector('input');
    if (inp1.value === '') {
        alert('Text kirit bomasa chiqmid');
    } else {
        let ol = document.querySelector('ol');
        let li = document.createElement('li');
        ol.appendChild(li);
        li.innerHTML = inp1.value;
    }
    inp1.value = '';
});

btn2.addEventListener('click', () => {
    if (isDarkMode) {
        body.style.background = 'white';
        body.style.color = 'black';
        btn2.textContent = 'Dark '; 
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        btn2.textContent = 'Light '; 
    }
    isDarkMode = !isDarkMode; 
});
