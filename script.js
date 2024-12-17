document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add logic to handle the search (filtering listings)
    alert('Searching for: ' + document.getElementById('search-keyword').value);
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Logic for handling login (e.g., validation or authentication)
    alert('Logging in...');
});
