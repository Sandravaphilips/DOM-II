// Your code goes here
// MOUSEOVER
let destination = document.querySelectorAll('.destination');

function mouseOver (dest) {
    dest.addEventListener('mouseover', () => dest.style.color = 'blue');
}

destination.forEach((dest) => mouseOver(dest));

// KEYDOWN
document.addEventListener('keydown', ()=> console.log('Well done!'));