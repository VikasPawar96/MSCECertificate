window.onload = function() {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');

    // Show the popup
    popup.style.display = 'block';

    // Close the popup when the close button is clicked
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Close the popup when clicking outside of the popup content
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }
}
