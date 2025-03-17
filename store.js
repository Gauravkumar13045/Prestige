let dropdown = document.querySelector('.dropdown');
let bars = document.getElementById('bars');

bars.addEventListener('click',()=>{
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'grid';
    } else {
        dropdown.style.display = 'none';
    }
});

function noScroll(){
 document.body.style.overflow = 'hidden';
}
function scroll(){
    document.body.style.overflow = 'auto';
}


// let add = document.querySelector('.cart-increase');
// let subtract = document.querySelector('.cart-decrease');
// let quantity = document.querySelector('.cart-count');

// add.addEventListener('click', () => {
//   quantity.textContent = parseInt(quantity.textContent) + 1;
// });

// subtract.addEventListener('click', () => {
//     quantity.textContent = parseInt(quantity.textContent) - 1;
//   });



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

let shoppingCarts = document.querySelectorAll('.shop-cart');

shoppingCarts.forEach(shoppingCart => {
shoppingCart.addEventListener('click', function() {
    generateDiv(shoppingCart);
});
});



// ____________________________________________________________________________________________

function cartProductQuantity1(cartblock) {
let cartcountElement = document.querySelector('.cart-count');
let cartcount = parseInt(cartcountElement.textContent);
let cartincrease = document.querySelector('.cart-increase');
let cartdecrease = document.querySelector('.cart-decrease');
let productrateElement = cartblock.querySelector('.product-rate');
    let cartTagprice = cartblock.querySelector('.cartTagprice').textContent.trim();
    let cartTagpriceValue = parseFloat(cartTagprice.replace('$', ''));

cartincrease.addEventListener('click', () => {
    cartcount++;
    if (cartcount > 10) {
        alert('You can only purchase 10 items at a time');
        cartcount = 10;
    }
    cartcountElement.textContent = cartcount; // Update the text content in the DOM
    let pricer = cartTagpriceValue * cartcount;
    productrateElement.textContent = pricer.toFixed(2);
});

cartdecrease.addEventListener('click', () => {
    cartcount--;
    if (cartcount < 1) {
        cartcount = 1;
    }
    cartcountElement.textContent = cartcount; // Update the text content in the DOM
    let pricer = cartTagpriceValue * cartcount;
    productrateElement.textContent = pricer.toFixed(2);
});
}


function generateDiv(shoppingCart) {    
let product = shoppingCart.closest('.product');
let cartImageSrc = product.querySelector('.photo').src;
let cartText1 = product.querySelector('.firstpic').textContent;
let cartTagprice = product.querySelector('.tagprice').childNodes[0].textContent.trim();
let cartRing1 = product.querySelector('.ring1').textContent;
    
let cartblock = document.createElement('div');
cartblock.className = `cartblockdiv`;
cartblock.classList.add('cartblock');
cartblock.innerHTML = 
`
 <div class="cart-product" >
        <img src="${cartImageSrc}" id="cartimage" class="cartPhoto" height="100px" width="100px" style = "
    position: relative;
    bottom: 50.4em;
    left: 0.5em;
    border-radius: 5px;
    "
}><br>
        <p class="cartText1" id="text1Id"><span class="cartRing1" id="ring1Id">${cartRing1}</span><br><br><span class="cartFirstpic" id="firstpicId" >${cartText1}</span><br><span class="cartTagprice" id="tagpriceId">${cartTagprice}</span></p>
        <i class="fa-solid fa-xmark fa-sm" style="color: #ffffff;      
    position: relative;
    bottom: 72em;
    left: 36.5em;
    cursor: pointer;
    z-index: 2;
    border: 1px solid rgb(113, 113, 113);
    background-color: rgb(93, 93, 93);
    height: 1.7em;
    width: 1.7em;
    justify-content: center;
    cursor: pointer;
    align-content: center;
    text-align: center;
    border-radius: 1em ;" id="xmark3Id"></i>



     <div id="line2" style="
     height: 51em;
     border-top: 1px solid rgb(255, 255, 255); 
     position: relative;
     bottom: 5em;
     margin-left: 0em;
     width: 303.5%;
    "
     ></div>
     <div class="cart-product-quantity">
        <button class="cart-increase"><b>+</b></button><span class="cart-count">1</span><button class="cart-decrease"><b>-</b></button>
        </div>
      <span class = "cart-product-rate" ><span>$</span><span class="product-rate">00</span></span>

`;
let cartContainer = document.getElementById('cart-container');
    cartContainer.appendChild(cartblock);

    let text8 = document.getElementById('text8');
    text8.style.display = 'none';

    let xmark3 = document.getElementById('xmark3Id');
    xmark3.addEventListener('click', () => {
        cartblock.remove();
        checkCartEmpty();
    });

    // let strikethrough = document.getElementById('strikethrough');
    // if(cartblock.style.display === 'block'){
    //     strikethrough.style.display = 'none';
    // }

    let cartcounthack = parseInt(cartblock.querySelector('.cart-count').textContent);
    let productrate = cartblock.querySelector('.product-rate');
    let cartTagpriceValueone = parseFloat(cartTagprice.replace('$', ''));

    let pricer = cartTagpriceValueone  * cartcounthack;
    productrate.textContent = pricer.toFixed(2);

    cartProductQuantity1(cartblock);
    

    // function productRateMaker(){
    //     let pricer = cartTagprice * cartcounthack;
        
    // }


}

function checkCartEmpty(){
 let cartContainer = document.getElementById('cart-container');
    let text8 = document.getElementById('text8');
    let cartItems = cartContainer.querySelectorAll('.cartblockdiv');

    if(cartItems.length === 0){
        text8.style.display = 'block';
    }
}



// ____________________________________________________________________________________________
















// Slider 

   let imgbox = document.querySelector('.imgbox');
   let imgbox2 = document.querySelector('.imgbox2');
   let firstarrow = document.getElementById('firstarrow');
   let secondarrow = document.getElementById('secondarrow');
   let first = document.getElementById('first');
   let second = document.getElementById('second');
   let third = document.getElementById('third');

   first.addEventListener('click',()=>{
    imgbox.style.display = 'flex';
    imgbox2.style.display = 'none';
   });
   second.addEventListener('click',()=>{
    imgbox.style.display = 'none';
    imgbox2.style.display = 'flex';
   });
   firstarrow.addEventListener('click',()=>{
    imgbox.style.display = 'none';
    imgbox2.style.display = 'flex';
   });
   secondarrow.addEventListener('click',()=>{
    imgbox.style.display = 'flex';
    imgbox2.style.display = 'none';
   });

//    DROPDOWN FILTER 

document.addEventListener('DOMContentLoaded', () => {
    let filter = document.getElementById('filter');
    let dropdown2 = document.querySelector('.dropdown2');
    let filterarrow = document.getElementById('filter-arrow');
    let content2 = document.querySelector('.content2');
    let productsContainer = document.querySelector('.products-container');

    dropdown2.style.display = 'none';

    filterarrow.addEventListener('click', () => {
        if (dropdown2.style.display === 'none' || dropdown2.style.display === '') {
            dropdown2.style.display = 'grid';
            
        } else {
            dropdown2.style.display = 'none';
            
        }
    });

    content2.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            filter.textContent = event.target.textContent;

            let links = document.querySelectorAll('.content2 a');
            links.forEach(link => {
                link.style.backgroundColor = '';
            });
            event.target.style.backgroundColor = 'rgb(155, 155, 155)';
            dropdown2.style.display = 'none';

            if (event.target.textContent.includes('low to high')) {
                sortProductsByPrice('asc');
            } else if (event.target.textContent.includes('high to low')) {
                sortProductsByPrice('desc');
            }
        }
    });

    function sortProductsByPrice(order) {
        let products = Array.from(document.querySelectorAll('.product'));
        products.sort((a, b) => {
            let priceA = parseFloat(a.getAttribute('data-price'));
            let priceB = parseFloat(b.getAttribute('data-price'));
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });

        products.forEach(product => {
            productsContainer.appendChild(product);
        });
    }
});


let filbtn = document.getElementById('filbtn');
    let xmark3 = document.getElementById('xmark3');
    let filterbox = document.getElementById('filterbox');
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    filbtn.addEventListener('click', () => {
        filterbox.style.display = 'block';
        overlay.style.display = 'block';
        document.querySelector('main').classList.add('blur');
        document.body.classList.add('no-scroll');

    });

    xmark3.addEventListener('click', () => {
        filterbox.style.display = 'none';
        overlay.style.display = 'none';
        document.querySelector('main').classList.remove('blur');
        document.body.classList.remove('no-scroll');

    });

    overlay.addEventListener('click', () => {
        filterbox.style.display = 'none';
        overlay.style.display = 'none';
        document.querySelector('main').classList.remove('blur');
        document.body.classList.remove('no-scroll');
    });

    let filtertext = document.querySelector('.filter-text');
    let filtertext2 = document.querySelector('.filter-text2');

    first.addEventListener('click', () => {
       filtertext.style.display = 'block';
         filtertext2.style.display = 'none';
    });
    second.addEventListener('click', () => {
        filtertext.style.display = 'none';
        filtertext2.style.display = 'block';
    });
    firstarrow.addEventListener('click', () => {
        filtertext.style.display = 'none';
        filtertext2.style.display = 'block';
    });
    secondarrow.addEventListener('click', () => {
        filtertext.style.display = 'block';
        filtertext2.style.display = 'none';
    });


document.addEventListener('DOMContentLoaded', () => {
    let filterprice = document.getElementById('filterprice');
    let filterinputStart = document.getElementById('filterinput-start');
    let products = document.querySelectorAll('.product');

    filterprice.addEventListener('input', () => {
        filterinputStart.textContent = filterprice.value;
        filterResults();
    });

    const filterResults = () => {
        const filterStartValue = parseInt(filterprice.value);

        products.forEach(product => {
            const productPrice = parseInt(product.getAttribute('data-price'));
            if (productPrice >= filterStartValue) {
                product.style.display = 'flexbox';
            } else {
                product.style.display = 'none';
            }
        });
    };

    filterprice.addEventListener('input', filterResults);
    filterResults();
});



// Star rating system


document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        star.addEventListener('click', () => {
            // Remove 'selected' class from all stars
            stars.forEach(s => s.classList.remove('selected'));
            // Add 'selected' class to the clicked star and all previous stars
            star.classList.add('selected');
            let previousSibling = star.previousElementSibling;
            while (previousSibling) {
                previousSibling.classList.add('selected');
                previousSibling = previousSibling.previousElementSibling;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars2 = document.querySelectorAll('.star2');
      stars2.forEach(star2 => {
        star2.addEventListener('click', () => {
            // Remove 'selected' class from all stars
            stars2.forEach(s => s.classList.remove('selected'));
            // Add 'selected' class to the clicked star and all previous stars
            star2.classList.add('selected');
            let previousSibling = star2.previousElementSibling;
            while (previousSibling) {
                previousSibling.classList.add('selected');
                previousSibling = previousSibling.previousElementSibling;
            }
        });
    });
});

function disableScroll(){
    const filterbox = document.getElementById('filterbox');
    filterbox.style.overflow = 'hidden';
}
function enableScroll(){
    const filterbox = document.getElementById('filterbox');
    filterbox.style.overflow = 'scroll';
}

disableScroll();

// document.addEventListener('DOMContentLoaded', () => {
//     let photos = document.querySelectorAll('.photo');
//     let eyes = document.querySelectorAll('.fa-eye');

//     photos.forEach((photo, index) => {
//         let eye = eyes[index];

//         photo.addEventListener('mouseout', () => {
//             eye.style.display = 'none';
//         });

//         photo.addEventListener('mouseover', () => {
//             eye.style.display = 'block';
//         });
//     });
// });

let shopify = document.querySelectorAll('.shop-cart');
let eyeicon = document.querySelectorAll('.eyeicon');
let products = document.querySelectorAll('.product');


products.forEach(product => {
product.addEventListener('mouseover', function() {

    const productid = this.dataset.productId;

    let shopCart = this.querySelector('.shop-cart');
        if (shopCart && (shopCart.style.display === 'none' || shopCart.style.display === '')) {
            shopCart.style.display = 'block';
        }

        let eye = this.querySelector('.eyeicon');
        if (eye && (eye.style.display === 'none' || eye.style.display === '')) {
            eye.style.display = 'block';
        }
});

product.addEventListener('mouseout', function() {
    let shopCart = this.querySelector('.shop-cart');
    if (shopCart) {
        shopCart.style.display = 'none';
    }
    let eye = this.querySelector('.eyeicon');
    if (eye) {
        eye.style.display = 'none';
    }
    

    
});

});

document.addEventListener('DOMContentLoaded', () => {
    let productImages = document.querySelectorAll('.product .photo');
    let quickviewImage = document.getElementById('quickviewimg');
    let quickview = document.querySelector('.quickview');
    let exit = document.getElementById('exit1');
    let quickviewProductName = document.querySelector('.quickview .product-name');
    let quickviewProductPrice = document.querySelector('.quickview .product-price');
    let quickviewProductCategory = document.querySelector('.quickview .product-category');
    let quickviewProductDescription = document.querySelector('.quickview .about-product');

    // Add event listener to each eyeicon within its product context
    document.querySelectorAll('.product').forEach(product => {
        let eyeicon = product.querySelector('.eyeicon');
        let image = product.querySelector('.photo');
        let productText = product.querySelector('.firstpic'); 
        let productPrice = product.querySelector('.tagprice');
        let productCategory = product.querySelector('.ring1');
        let productdescription = product.querySelector('.product-Description');

        eyeicon.addEventListener('click', function() {
            let imgSrc = image.src;
            quickviewImage.src = imgSrc;
            quickview.style.display = 'block';
            quickviewProductName.innerHTML = productText.innerHTML;
            quickviewProductPrice.innerHTML = productPrice.innerHTML;
            quickviewProductCategory.innerHTML = productCategory.innerHTML;
            quickviewProductDescription.innerHTML = productdescription.innerHTML;   

        });
    });

    exit.addEventListener('click', function() {
        quickview.style.display = 'none';
        // scroll();
    });

    // Hide quickview when clicking outside the image within the quickview
    quickview.addEventListener('click', function(event) {
        if (event.target === quickview) {
            quickview.style.display = 'none';
        }
    });

  
});

// counter
let countElement = document.querySelector('.count');
let count = parseInt(countElement.textContent);
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');

increase.addEventListener('click', () => {
    count++;
    if (count > 10) {
        alert('You can only purchase 10 items at a time');
        count = 10;
    }
    countElement.textContent = count; // Update the text content in the DOM
});

decrease.addEventListener('click', () => {
    count--;
    if (count < 1) {
        count = 1;
    }
    countElement.textContent = count; // Update the text content in the DOM
});


// Cart counter

// let cartcountElement = document.querySelector('.cart-counter');
// let cartcount = parseInt(cartcountElement.textContent);
// let cartShopProductAdd = document.querySelector('.shop-cart');

// cartShopProductAdd.addEventListener('click', () => {
//     cartcount++;
//     cartcountElement.textContent = cartcount;
// });

// Cart counter

// Select all elements with the class 'shop-cart'
let cartShopProductAdds = document.querySelectorAll('.shop-cart');

// Iterate over each 'shop-cart' element and add an event listener
cartShopProductAdds.forEach(cartShopProductAdd => {
    cartShopProductAdd.addEventListener('click', () => {
        // Find the closest cart item and update its count
        let cartblock = cartShopProductAdd.closest('.cartblock');
        let cartcountElement = cartblock.querySelector('.cart-counter');
        let cartcount = parseInt(cartcountElement.textContent);
        cartcount++;
        cartcountElement.textContent = cartcount;
    });
});


