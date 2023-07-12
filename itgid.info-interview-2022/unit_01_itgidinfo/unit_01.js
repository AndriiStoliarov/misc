// document.querySelector('.out-1').onclick = event => {
//     event.stopPropagation();
//     console.log('.out-1');
// }

// document.querySelector('.test').onclick = () => {
//     event.stopPropagation();

//     console.log('.test');
// }

// document.querySelector('.container').onclick = () => {
//     console.log('.container');
// }

// document.querySelector('body').onclick = () => {
//     console.log('body');
// }

// document.querySelector('html').onclick = () => {
//     console.log('html');
// }

// Полезно - всплытие событий

document.querySelector('.test').onclick = event => {
    event.stopPropagation();
    // console.log(event.target);
    if (event.target.classList.contains('out-1')) {
        console.log(1);
    }
    if (event.target.classList.contains('out-2')) {
        console.log(2);
    }
}

document.querySelector('.questions').onclick = event => {
    event.stopPropagation();
    const li = event.target;
    if (li.nodeName !== 'LI') return;
    if (li.getAttribute('data-q') === '1') {
        li.classList.add('bg-lightblue');
    }
    else {
        li.classList.add('bg-lightred');
    }
}