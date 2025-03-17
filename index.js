let dropdown = document.querySelector('.dropdown');
let bars = document.getElementById('bars');

bars.addEventListener('click',()=>{
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'grid';
    } else {
        dropdown.style.display = 'none';
    }
});


// Cart

let cart = document.getElementById('cart');
let container = document.getElementById('cart-container');
let xmark = document.getElementById('xmark');

cart.addEventListener('click',()=>{
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'grid';
        
    } else {
        
        container.style.display = 'none';
    }
});
xmark.addEventListener('click',() =>{
container.style.display = 'none';
});

// dropdown2

let down = document.getElementById('down');
let dropdown2 =document.querySelector('.dropdown2');

down.addEventListener('click',()=>{
    if (dropdown2.style.display === 'none' || dropdown2.style.display === '') {
        dropdown2.style.display = 'grid';
    } else {
        dropdown2.style.display = 'none';
    }
});

// dropdown3

let down2 = document.getElementById('down2');
let dropdown3 =document.querySelector('.dropdown3');

down.addEventListener('click',()=>{
    if (dropdown3.style.display === 'none' || dropdown3.style.display === '') {
        dropdown3.style.display = 'grid';
    } else {
        dropdown3.style.display = 'none';
    }
});
