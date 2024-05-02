// script.js

document.getElementById('my-account-btn').addEventListener('click', function() {
    // Redirect to my account page
    window.location.href = 'my_account.html';
});

document.getElementById('my-purchase-btn').addEventListener('click', function() {
    // Redirect to my purchases page
    window.location.href = 'my_purchases.html';
});

document.getElementById('logout-btn').addEventListener('click', function() {
    // Redirect to logout action
    window.location.href = 'logout.html';
});
