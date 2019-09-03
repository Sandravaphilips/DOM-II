// Your code goes here
// MOUSEOVER
let destination = document.querySelectorAll('.destination');

function mouseOver (dest) {
    dest.addEventListener('mouseover', () => dest.style.color = 'blue');
}

destination.forEach((dest) => mouseOver(dest));

// KEYDOWN
function keyDown (text) {
    text.style[font-family] = '150%';
}

let textContent = document.querySelector('.text-content');
textContent.addEventListener('keydown', keyDown);