// Your code goes here
// MOUSEOVER
let destination = document.querySelectorAll('.destination');

function mouseOver (dest) {
    dest.addEventListener('mouseover', () => dest.style.color = 'blue');
}

destination.forEach((dest) => mouseOver(dest));

// KEYDOWN
document.addEventListener('keydown', ()=> console.log('Well done!'));

// WHEEL
function zoom(event) {
    event.preventDefault();
    
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    imageContent.style.transform = `scale(${scale})`;
}
let imageContent = document.querySelector('.img-content');
let scale = 1;
imageContent.onwheel = zoom;