// script.js



/*function homes(){
    mainPage.style.display="flex";
     about.style.display="none"

document.getElementById("home").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";
}




 function addToCart() {
    
    console.log("Add to Cart");
    updateCartUI();
}

function deletetoCart() { 
    console.log("Delete from Cart"); 
    updateCartUI();
}*/



/*let cart = [];

function addCart() {
    const itemName = document.querySelector('.food-name').innerText;
    const itemPrice = document.querySelector('.food-price').innerText;

    const item = {
        name: itemName,
        price: itemPrice
    };

    cart.push(item);
    console.log(`Added to cart: ${itemName}`);
    console.log(cart);
}

function deleteCart() {
    const itemName = document.querySelector('.food-name').innerText;

    // Find the index of the item to be removed
    const itemIndex = cart.findIndex(item => item.name === itemName);

    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        console.log(`Deleted from cart: ${itemName}`);
    } else {
        console.log(`Item not found in cart: ${itemName}`);
    }

    console.log(cart);
}*/



document.addEventListener('DOMContentLoaded', ()=> {
    const addButtons = document.querySelectorAll('.add-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    addButtons.forEach(button => {
        button.addEventListener( 'click', () =>{
            alert('Added to cart');
        }

        )
    })

}

)


deleteButtons.forEach(button =>{
    button.addEventListener('click',(event) =>{
        const foodItem = event.target.closest('.food-item');
        foodIte.remove();
    });


    });