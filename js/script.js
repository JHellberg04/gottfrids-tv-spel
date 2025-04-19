// Array for all the games that are for sale
const games = [
    {
        id: 0,
        name: "Avatar: Frontiers of Pandora",
        price: 349,
        category: "Action RPG",
        rating: 3.5,
        amount: 0,
        img: {
            url: 'img/avatar.webp',
            width: 1520,
            height: 1902,
            alt: "Spelfodralet till 'Avatar: Frontiers of Pandora' där en Na'vi rider en Ikran högt upp i luften.",
        },
    },
    {
        id: 1,
        name: "Star Wars: Outlaws",
        price: 449,
        category: "Action RPG",
        rating: 4,
        amount: 0,
        img: {
            url: 'img/star-wars-outlaws.jpg',
            width: 800,
            height: 1019,
            alt: "Spelfodralet till 'Star Wars: Outlaws' där huvudpersonen och en druid går framför en episk bakgrund.",
        },
    },
    {
        id: 2,
        name: "EA FC 25",
        price: 599,
        category: "Sports",
        rating: 3,
        amount: 0,
        img: {
            url: 'img/ea-sports-fc-25.avif',
            width: 1525,
            height: 1863,
            alt: "Spelfodralet till 'EA FC 25' där fotbollsspelaren Jude Bellingham gör en målgest.",
        },
    },
    {
        id: 3,
        name: "NBA 2k25",
        price: 599,
        category: "Sports",
        rating: 4.5,
        amount: 0,
        img: {
            url: 'img/nba-2k25.jpg',
            width: 799,
            height: 1000,
            alt: "Spelfodralet till 'NBA 2k25' där en basketspelare vrålar med publiken ljublandes i bakgrunden.",
        },
    },
    {
        id: 4,
        name: "Dragon Ball: Sparking! Zero",
        price: 849,
        category: "Fighting",
        rating: 4,
        amount: 0,
        img: {
            url: 'img/dragon-ball-sparking-zero.jpg',
            width: 800,
            height: 1019,
            alt: "Spelfodralet till 'Dragon Ball: Sparking! Zero' där flera karaktärer använder olika förmågor framför en sjärnklar himmel.",
        },
    },
    {
        id: 5,
        name: "Life Is Strange: Double Exposure",
        price: 999,
        category: "Adventure",
        rating: 3,
        amount: 0,
        img: {
            url: 'img/life-is-strange.jpg',
            width: 782,
            height: 1000,
            alt: "Spelfodralet till 'Life Is Strange: Double Exposure' där huvudkaraktären visas framför en mysterisk bakgrund.",
        },
    },
    {
        id: 6,
        name: "Harry Potter: Quidditch Champions",
        price: 329,
        category: "Sports",
        rating: 3.5,
        amount: 0,
        img: {
            url: 'img/quidditch-champions.jpg',
            width: 779,
            height: 1000,
            alt: "Spelfodralet till 'Harry Potter: Quidditch Champions' där vi ser en tavla med spelare från två olika lag som flyger på kvastar och spelar Quidditch.",
        },
    },

    {
        id: 7,
        name: "Black Myth: Wukong",
        price: 699,
        category: "Action RPG",
        rating: 5,
        amount: 0,
        img: {
            url: 'img/black-myth-wukong.avif',
            width: 828,
            height: 970,
            alt: "Spelfodralet till 'Black Myth: Wukong' där huvudkaraktären, en apa med människodrag, mediterar med stängda ögon.",
        },
    },

    {
        id: 8,
        name: "Battlefield 2042",
        price: 499,
        category: "FPS",
        rating: 2.5,
        amount: 0,
        img: {
            url: 'img/battlefield-2042.jpg',
            width: 1525,
            height: 1900,
            alt: "Spelfodralet till 'Battlefield 2042' där en soldat med en stor gevär kollar bakåt med ett stort slagfält i bakgrunden.",
        },
    },

    {
        id: 9,
        name: "EA Sports College Football 25",
        price: 699,
        category: "Sports",
        rating: 4.5,
        amount: 0,
        img: {
            url: 'img/ea-sports-college-football.jpg',
            width: 1584,
            height: 1994,
            alt: "Spelfodralet till 'EA Sports College Football 25' där tre spelare från olika lag står i en tom arena och gör gester mot kameran.",
        },
    },



];

// Get the current time and day
let now = new Date();
const currentTime = now.getHours(); 
const currentDay = now.getDay();

// Function to update `now` every second and display it (I know this is probably not best practise and that it's better to include the date in the function that needs it and keep all price reductions in one place. This is a last minute fix)
function updateDate() {
    now = new Date();  // Update `now` to the current date
  }

  // Update `now` every second (1000 milliseconds)
  setInterval(updateDate, 1000);

// If it's Friday after 15:00, Saturday, Sunday or Monday before 03:00, increase the price of the games by 15%
if ((currentDay === 5 && currentTime >= 15) || currentDay === 6 || currentDay === 0 || (currentDay === 1 && currentTime < 3) ) { 
    for(let i = 0; i < games.length; i++) {
        games[i].price = games[i].price * 1.15;
        games[i].price = parseFloat(games[i].price.toFixed(2)); // Round the price to two decimals
    };
};


const gamesListDiv = document.querySelector('#gamesContainer'); // The div where the games will be printed

function printGamesList() { // Function to print the games in the gamesListDiv
    gamesListDiv.innerHTML = '';
    games.forEach(game => {
        gamesListDiv.innerHTML += `
            <article class="game">
                <img class="game-img" loading="lazy" src="${game.img.url}" alt="${game.img.alt}" width="${game.img.width}" height="${game.img.height}">
                <h3>${game.name}</h3>
                <p>Pris: ${game.price} kr</p>
                <p>Kategori: ${game.category}</p>
                <p>Rating: ${game.rating}</p>
                <div class="amount-container">
                    <button class="decrease" id="decrease-${game.id}">-</button>
                    <input type="number" min="0" value="${game.amount}" id="input-${game.id}">
                    <button class="increase" id="increase-${game.id}">+</button>
                </div>
                <button class="add-to-cart" id="add-to-cart-${game.id}">Lägg till i varukorgen</button>
            </article>
        `;
    });
    attachEventListeners(); // Reattach event listeners after printing the games
};

printGamesList();

/*
 * This section contains functions to handle the increase and decrease of the game amount
 * and event listeners to trigger these functions when the corresponding buttons are clicked.
 * The attachEventListeners function is used to reattach the event listeners after the games have been printed.
 */
function increaseAmount(id) {
    const input = document.querySelector(`#input-${id}`); // Get the input field for the game
    games[id].amount++;
    input.value = games[id].amount;
};

// Function to handle the decrease of the game amount
function decreaseAmount(id) {
    const input = document.querySelector(`#input-${id}`);
    if (games[id].amount > 0) {
        games[id].amount--;
        input.value = games[id].amount;
    };
};
// Function to attach event listeners to the increase and decrease buttons
function attachEventListeners() {
    const increaseBtns = document.querySelectorAll('button.increase');
    const decreaseBtns = document.querySelectorAll('button.decrease');

    // Increase button
    increaseBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.id.split('-')[1];
            increaseAmount(id);
        });
    });

    // Decrease button
    decreaseBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.id.split('-')[1];
            decreaseAmount(id);
        });
    });

    // Event listener for the add to cart buttons
// When the user clicks the add to cart button, the game is added to the cart array
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const id = event.target.id.split('-')[3]; // Get the id of the game
        const game = games.find(game => game.id == id); // Find the game in the games array
        if (cart.includes(game)) { // If the game is already in the cart, update the amount
            cart.amount = game.amount;
        } else {    // If the game is not in the cart, add it to the cart
        cart.push(game);
        };

        updateCartDisplay();
    });
});

    // / Event listener for the input fields, making sure that the amount in the array is updated when the user types in the input field without using the buttons
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', handleInputChange);
    });
};

// Function to handle the input change
function handleInputChange(event) {
    const id = event.target.id.split('-')[1];
    games[id].amount = parseInt(event.target.value, 10) || 0; // Transform the input value to an integer and update the amount in the array. If the input is not a number, set the amount to 0.
};

/*
 * This section contains functions to sort the games array by different criteria
 * and event listeners to trigger these sorting functions when the corresponding
 * buttons are clicked.
 */

// Fuction to sort the games by price
function sortGamesByPrice() {
    games.sort((a, b) => a.price - b.price);
    printGamesList();
};

// Function to sort the games by rating
function sortGamesByRating() {
    games.sort((a, b) => b.rating - a.rating);
    printGamesList();
};

// Function to filter the games by category
function sortGamesByCategory() {
    games.sort((a, b) => a.category.localeCompare(b.category));
    printGamesList();
};

// Function to sort the games by name
function sortGamesByName() {
    games.sort((a, b) => a.name.localeCompare(b.name));
    printGamesList();
};

// Event listener for the sort by price button
document.querySelector('#sort-price').addEventListener('click', sortGamesByPrice);

// Event listener for the sort by rating button
document.querySelector('#sort-rating').addEventListener('click', sortGamesByRating);

// Event listener for the sort by category button
document.querySelector('#sort-category').addEventListener('click', sortGamesByCategory);

// Event listener for the sort by name button
document.querySelector('#sort-name').addEventListener('click', sortGamesByName);


/*
*
* This section below contains the code for the shopping cart.
* The cart is an array that stores the games that the user has added to the cart.
* 
*/


let cart = []; // Array to store the games in the cart

function emptyCart() {
    //If cart is empty, add a message to the cart container
    if (cart.length === 0) {
    cartContainer.innerHTML = '<p class="empty-cart">Din varukorg är tom.</p>';
    };
}

// Function to toggle the visibility of the checkout button
// The checkout button should only be visible if there are games in the cart
function toggleCheckoutButton() {
    if (cart.length < 1) {
        document.querySelector('#checkout').style.display = 'none';
    } else {
        document.querySelector('#checkout').style.display = 'block';
    }
}

emptyCart();
toggleCheckoutButton();

// Function to update and make the cart visible
function updateCartDisplay() {
    const cartContainer = document.querySelector('#cartContainer');
    cartContainer.innerHTML = '';

    cart.forEach(game => {
        if (game.amount === 0) { // This adds the game to the cart with an amount of 1 if the user has not changed the amount but clicked "add to cart"
            game.amount = 1;
        };

        if (game.amount >= 10) {
            game.price = game.price * 0.9; // If the user buys 10 or more of the same game, they get a 10% discount
        };
    
            cartContainer.innerHTML += `
                <article class="game">
                    <h3>${game.name}</h3>
                    <img class="game-img-cart" loading="lazy" src="${game.img.url}" alt="${game.img.alt}" width="${game.img.width}" height="${game.img.height}">
                    <p>Pris: ${game.price} kr</p>
                    <p>Antal: ${game.amount}</p>
                    <button class="delete" id="delete-${game.id}">Ta bort</button>
                </article>
            `;
        
    });

    emptyCart();
    toggleCheckoutButton();
    calculateTotalPrice(); // Update the total price of the games in the cart
};

// function to calculate the total price of the games in the cart
let totalPrice = 0;
let totalAmount = 0;
function calculateTotalPrice() {
    const totalPriceSpan = document.querySelector('#totalPrice');

    // Reset totals
    totalPrice = 0;
    totalAmount = 0;

    // Calculate total price and total amount
    cart.forEach(game => {
        totalPrice += game.price * game.amount;
        totalAmount += game.amount;
    });

    // Handle empty cart case
    if (cart.length === 0) {
        document.querySelector('#shipping').textContent = ``;
        document.querySelector('#discountTotal').textContent = '';
        document.querySelector('#totalPrice').textContent = '';

        return;
    }

    // Apply discounts
    if (currentDay === 1 && currentTime < 10) { // If it's Monday before 10:00, apply a 10% discount
        totalPrice = totalPrice * 0.9;
        document.querySelector('#discountTotal').textContent = 'Måndagsrabatt: 10% på hela beställningen!';
    } else {
        document.querySelector('#discountTotal').textContent = '';
    }

    // Disable invoice option if total price > 800 kr
    if (totalPrice > 800) {
        document.querySelector('#invoice').disabled = true;
    } else {
        document.querySelector('#invoice').disabled = false;
    }

    // Calculate shipping price
    let shippingPrice = 0;
    if (totalAmount > 15) {
        shippingPrice = 0; // Free shipping for more than 15 games
        document.querySelector('#shipping').textContent = 'Fri frakt!';
    } 
    else if (totalAmount >= 1) {
        shippingPrice = 25 + (totalPrice * 0.1); // Shipping cost for 1-15 games
        shippingPrice = parseFloat(shippingPrice.toFixed(2));
        document.querySelector('#shipping').textContent = `Frakt: ${shippingPrice} kr`;
        totalPrice += shippingPrice;
    }

    // Round total price
    totalPrice = parseFloat(totalPrice.toFixed(2));
    totalPriceSpan.textContent = `Totalt pris: ${totalPrice} kr`;

    // Add animation to the total price when it updates
    totalPriceSpan.classList.add('total-price-animation');
    setTimeout(() => {
        totalPriceSpan.classList.remove('total-price-animation');
    }, 500);
    

};

// Add function which is called when the user presses the checkout button and scrolls down to the form
document.querySelector('#checkout').addEventListener('click', function() {
    const headerOffset = 100; // Adjust this value as needed
    const elementPosition = document.querySelector('#orderForm').offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});




// When the cart button is clicked, scroll to the cart container
// Since the header is fixed, the scroll position is adjusted accordingly
document.querySelector('a[href="#cartContainer"]').addEventListener('click', function(event) {
    event.preventDefault();
    const headerOffset = 200;
    const elementPosition = document.getElementById('cartContainer').offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});

// Event listener for deleting an item from the cart
// When the user clicks the delete button, the game is removed from the cart
document.querySelector('#cartContainer').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const id = event.target.id.split('-')[1]; // Get the id of the game
        cart = cart.filter(game => game.id != id); // Filter out the game with the id from the cart (remove it)
        updateCartDisplay();
    };
});

/*
 * This section below contains the code for the payment method select
 * and the corresponding card and invoice info sections.
 */

const paymentMethodSelect = document.querySelector('#paymentMethod');
const cardInfoSection = document.querySelector('#cardInfo');
const invoiceInfoSection = document.querySelector('#invoiceInfo');


// function to toggle visible payment method
function togglePaymentMethod() {
    if (paymentMethodSelect.value === 'kort') {
        cardInfoSection.style.display = 'block';
        invoiceInfoSection.style.display = 'none';
    } else if (paymentMethodSelect.value === 'faktura') {
        cardInfoSection.style.display = 'none';
        invoiceInfoSection.style.display = 'block';
    } else {
        cardInfoSection.style.display = 'none';
        invoiceInfoSection.style.display = 'none';
    }
};

// Event listener for the payment method select
paymentMethodSelect.addEventListener('change', togglePaymentMethod);

togglePaymentMethod(); // Call the function to set the initial state of the payment method

/*
*
*This section below contains the code for the form validation
*The form is validated when the user tries to submit the form
*If the form is not valid, error messages are displayed to assist the user
*The form is also cleared 15 minutes after the user has clicked the checkout button but not placed an order
*
*/

// Select the submit button
const submitButton = document.querySelector('#submit');

// Function to display an error message
function showError(input, message) {
    clearFieldError(input); // Clear any existing error before showing a new one
    const error = document.createElement('small');
    error.className = 'error-message';
    error.style.color = 'red';
    error.textContent = message; // Set the error message text
    input.parentElement.appendChild(error); // Places the error message after the input field
    input.classList.add('error'); // Add error class to input field
    input.style.border = '1px solid red'; // Add red border to input field
}

// Function to clear error messages for a specific field
function clearFieldError(input) {
    const parent = input.parentElement;
    const error = parent.querySelector('.error-message');
    if (error) { // If an error message exists, remove it
        error.remove();
    }
    input.classList.remove('error');
    input.style.border = '';
}

// Function to validate a single field
function validateField(input) {
    clearFieldError(input);

    // First Name Validation
    if (input.id === 'firstName' && input.value.length < 2) {
        showError(input, '*Fyll i hela ditt förnamn. (ex. "Kalle")');
    }

    // Last Name Validation
    if (input.id === 'lastName' && input.value.length < 2) {
        showError(input, '*Fyll i hela ditt efternamn. (ex. "Karlsson")');
    }

    // Address Validation
    if (input.id === 'address' && (input.value.length < 5 || !/\d/.test(input.value))) {
        showError(input, '*Fyll i din adress och ditt gatunummer (ex. "Trollstigen 1").');
    }

    // Postal Code Validation
    if (input.id === 'postalCode' && (input.value.length !== 5 || !/^\d+$/.test(input.value))) {
        showError(input, '*Fyll i ett giltigt postnummer med enbart 5 siffror.');
    }

    // Door Code Validation
    if (input.id === 'doorCode' && input.value.length > 0 && (input.value.length < 3 || !/^\d+$/.test(input.value))) {
        showError(input, '*Fyll i ett giltigt portkod med minst 3 siffror. Om du inte har någon, lämna fältet tomt.');
    }

    // City Validation
    if (input.id === 'city' && input.value.length < 2) {
        showError(input, '*Fyll i din postort (ex. "Stockholm").');
    }

    // Phone Number Validation
    if (input.id === 'phone' && (input.value.length !== 10 || !/^\d+$/.test(input.value))) {
        showError(input, '*Fyll i ett giltigt mobilnummer med enbart 10 siffror. (ex. "0701234567")');
    }

    // Email Validation
    if (input.id === 'email' && (!input.value.includes('@') || !input.value.includes('.'))) {
        showError(input, '*Fyll i en giltig e-postadress. (ex. "namn@domän.se")');
    }

    // Card Number Validation
    if (input.id === 'cardNumber' && paymentMethodSelect.value === 'kort' && (input.value.length !== 16 || !/^\d+$/.test(input.value))) {
        showError(input, '*Fyll i ett giltigt kortnummer med enbart 16 siffror.');
    }

    // Expiry Month and Year Validation
    if ((input.id === 'expiryMonth' || input.id === 'expiryYear') && paymentMethodSelect.value === 'kort') {
        if (input.value.length !== 2 || !/^\d+$/.test(input.value)) {
            showError(input, '*Fyll i ett giltigt utgångsdatum (MM/YY).');
        }
    }

    // CVC Validation
    if (input.id === 'cvc' && paymentMethodSelect.value === 'kort' && (input.value.length !== 3 || !/^\d+$/.test(input.value))) {
        showError(input, '*Fyll i ett giltigt CVC-nummer med enbart 3 siffror.');
    }

    // Personal Number Validation
    if (input.id === 'personalNumber' && paymentMethodSelect.value === 'faktura' && (input.value.length !== 12 || !/^\d+$/.test(input.value))) {
        showError(input, '*Fyll i ett giltigt personnummer med enbart 12 siffror. (ex. "YYYYMMDDXXXX")');
    }

    console.log(`Validated field: ${input.id}, Value: "${input.value}", Error status: ${input.classList.contains('error')}`);

    // Check form validity after each field validation
    checkFormValidity();
}

// Function to clear all error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach((el) => el.remove());
    document.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
    document.querySelectorAll('input').forEach((el) => el.style.border = '');
}

// Function to check the overall form validity
function checkFormValidity() {
    const allInputs = document.querySelectorAll('.order-input');
    let isValid = true;

    allInputs.forEach(input => {
        // Trim whitespace and check if the input is empty
        const trimmedValue = input.value.trim();
        const hasError = input.classList.contains('error');

        if (hasError) {
            isValid = false;
        }
    });

    const termsCheckbox = document.querySelector('#acceptTerms');
    if (!termsCheckbox.checked) {
        isValid = false;
    }

    if (cart.length === 0) {
        isValid = false;
    }

    if (!isValid) {
        submitButton.style.backgroundColor = 'grey';
        submitButton.style.cursor = 'not-allowed';
    }else {
        submitButton.style.backgroundColor = '#4CAF50';
        submitButton.style.cursor = 'pointer';
    }


    submitButton.disabled = !isValid;
}

// Attach real-time event listeners to each input field
document.querySelectorAll('.order-input').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
});

// Call the checkFormValidity function initially to set the correct button state
checkFormValidity();

// Clear errors and reset the form when the reset button is clicked
document.querySelector('#reset').addEventListener('click', () => {
    clearErrors();
    checkFormValidity();
});

// function to clear the form 15 minutes after the checkout button has been pressed
// This is to make sure the user can't leave the page and come back to see their personal information
function clearForm() {

    const inputs = form.querySelectorAll('input, textarea'); // Select all inputs and textareas
    
    // Clear all input fields
    inputs.forEach(input => {
            input.value = ''; // Clear text, number, and other input fields
    });
    submit.value = 'Slutför order'; // Reset the submit button text
    reset.value = 'Rensa'; // Reset the reset button text
    clearErrors();
    togglePaymentMethod();

    //error message at the start of the form section to inform the user that they took too long
    const error = document.createElement('p');
    error.className = 'error-message';
    error.style.color = 'red';
    error.textContent = 'Din information har rensats eftersom du tog för lång tid att slutföra din beställning. Vänligen fyll i formuläret igen.';
    
    // display the error message at the top of the form
    form.insertBefore(error, form.firstChild);
}

let formSubmitted = false; // Flag to check if the form has been submitted
let formTimeout // Variable to store the timeout

// Event listener for the checkout button
document.querySelector('#checkout').addEventListener('click', () => {

    formSubmitted = false; // Set the flag to false

    if (formTimeout) { // Clear the previous timeout if it exists
        clearTimeout(formTimeout);
    }


    // Start a timer to clear the form after 15 minutes (900000 ms)
    formTimeout = setTimeout(() => {
        if (!formSubmitted) { // Only clear the form if it hasn't been submitted
            clearForm();
        }
    }, 900000); // 15 minutes
});

// Event listener for the submit button
document.querySelector('#submit').addEventListener('click', (event) => {
    formSubmitted = true; // Set the flag to true
    clearTimeout(formTimeout); // Clear the timeout
});

/*
* This section below contains the code for the order summary
* The order summary is displayed after the user has successfully placed an order
*/

// function to display the order summary after a successful order

function displayOrderSummary() {
    const summaryContainer = document.createElement('div');
    summaryContainer.id = 'orderSummary';
    summaryContainer.classList.add('order-summary-container');

    // Start building the order summary
    summaryContainer.innerHTML = `
        <h2 class="order-summary-title">Tack för din beställning!</h2>
        <p class="order-summary-item"><strong class="order-summary-label">Förnamn:</strong> ${firstName.value}</p>
        <p class="order-summary-item"><strong class="order-summary-label">Efternamn:</strong> ${lastName.value}</p>
        <p class="order-summary-item"><strong class="order-summary-label">Adress:</strong> ${address.value}, ${postalCode.value} ${city.value}</p>
        <p class="order-summary-item"><strong class="order-summary-label">Telefon:</strong> ${phone.value}</p>
        <p class="order-summary-item"><strong class="order-summary-label">Betalsätt:</strong> ${paymentMethodSelect.value === 'kort' ? 'Kort' : 'Faktura'}</p>
        <p class="order-summary-card-number card-number" id="cardNumberSummary"></p>
        <h3 class="order-summary-subtitle">Din beställning:</h3>
    `;

    // If card payment, show card number
    const cardNumberSummary = summaryContainer.querySelector('#cardNumberSummary');
    if (paymentMethodSelect.value === 'kort') {
        cardNumberSummary.innerHTML += `
            <strong class="order-summary-label">Kortnummer (sista 4 siffror):</strong> **** **** **** ${cardNumber.value.slice(-4)}
        `;
    }

    // Add the purchased games
    let gamesSummary = '<ul class="order-summary-games">';
    cart.forEach(game => {
        gamesSummary += `
            <li class="order-summary-game-item">
                ${game.name} | Antal: ${game.amount} | Pris per styck: ${game.price} kr
            </li>
        `;
    });
    gamesSummary += '</ul>';

    // Calculate and display the total price
    gamesSummary += `
        <p class="order-summary-item total-price"><strong class="order-summary-label">Totalt pris:</strong> ${totalPrice} kr</p>
        <p class="order-summary-item shipping">${document.querySelector('#shipping').textContent}</p>
        <p class="order-summary-item delivery-time">Leveranstid: 3-5 arbetsdagar</p>
    `;

    // Append the game details to the summary container
    summaryContainer.innerHTML += gamesSummary;

    // Append the summary to the page
    const mainContainer = document.querySelector('main');
    mainContainer.appendChild(summaryContainer);

    // Scroll to the summary section
    summaryContainer.scrollIntoView({ behavior: 'smooth' });
}

const form = document.querySelector('form');

// Event listener for the form submit
// When the user submits the form, the order summary is displayed
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from being submitted
    displayOrderSummary(); // Display the order summary
    clearForm(); // Clear the form
    cart = []; // Empty the cart
    updateCartDisplay(); // Update the cart display
});


