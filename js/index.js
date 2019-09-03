// Your code goes here
// MOUSEOVER
let destination = document.querySelectorAll('.destination');

function mouseOver (dest) {
    dest.addEventListener('mouseover', () => dest.style.color = 'blue');
}

destination.forEach((dest) => mouseOver(dest));

document.querySelector('.content-pick').stopPropagation();

// KEYDOWN
document.addEventListener('keydown', ()=> console.log('Well done!'));

// WHEEL
let imageContent = document.querySelector('.img-content');
function zoom(event) {
    event.preventDefault();
    
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    imageContent.style.transform = `scale(${scale})`;
}

let scale = 1;
imageContent.onwheel = zoom;

// DRAG/DROP
// function drag() {
//     document.style.background = "green";
// }
// function drop() {
//     document.style.background = "pink";
// }

// document.addEventListener('drag', drag);
// document.addEventListener('drop', drop);

// OFFLINE
window.addEventListener('offline', ()=> console.log('You are now offline'));

// ONLINE
window.addEventListener('online', ()=> console.log('You are online!'));

// LOAD
window.addEventListener('load', ()=>console.log('welcome to Fun Bus!'));

// FOCUS
window.addEventListener('focus', ()=> console.log('focus done'))

// RESIZE
window.addEventListener('resize', ()=> console.log('Page has been resized!'));

// RESET
window.addEventListener('scroll', ()=> console.log('You have just scrolled up or down the page'))

// DBLCLICK
let button = document.querySelector('.btn');
button.addEventListener('dblclick', ()=>button.style.display = 'none' );

document.querySelector('nav a').preventDefault();