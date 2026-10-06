let cart = [];


/* ADD TO CART */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart! 🛒");
}


/* UPDATE CART */

function updateCart() {

    document.getElementById("cartCount").innerText = cart.length;

    let cartItems = document.getElementById("cartItems");

    let total = 0;

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cart.forEach(function(item, index) {

        total = total + item.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <span>
                    ${item.name}
                    <br>
                    ₹${item.price}
                </span>

                <button
                    class="remove-button"
                    onclick="removeItem(${index})"
                >
                    Remove
                </button>

            </div>

        `;

    });


    document.getElementById("cartTotal").innerText = total;

}


/* REMOVE ITEM */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* OPEN CART */

function openCart() {

    document.getElementById("cartBox").style.display = "flex";

}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cartBox").style.display = "none";

}


/* OPEN CHECKOUT */

function openCheckout() {

    if (cart.length === 0) {

        alert("Please add a toy to your cart first.");

        return;
    }

    closeCart();

    document.getElementById("checkoutBox").style.display = "flex";

}


/* CLOSE CHECKOUT */

function closeCheckout() {

    document.getElementById("checkoutBox").style.display = "none";

}


/* SHOP NOW */

function goToToys() {

    document.getElementById("toys").scrollIntoView({
        behavior: "smooth"
    });

}


/* PLACE ORDER */

function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let name =
        document.getElementById("customerName").value;

    let phone =
        document.getElementById("customerPhone").value;

    let address =
        document.getElementById("customerAddress").value;


    let payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    let paymentText;


    if (payment === "cod") {

        paymentText = "Cash on Delivery";

    } else {

        paymentText = "Online Payment";

    }


    let total = 0;

    cart.forEach(function(item) {

        total += item.price;

    });


    alert(
        "🎉 ORDER PLACED!\n\n" +

        "Customer: " + name + "\n" +

        "Phone: " + phone + "\n\n" +

        "Address: " + address + "\n\n" +

        "Payment: " + paymentText + "\n" +

        "Total: ₹" + total + "\n\n" +

        "Thank you for shopping at SURAJ TOY! 🧸"
    );


    cart = [];

    updateCart();

    closeCheckout();

    document.querySelector("form").reset();

}