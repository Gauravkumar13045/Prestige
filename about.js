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

// Slider    

   