const thirdsection=
      document.getElementById("card");
if (thirdsection) {
  thirdsection.innerHTML = '<h3>Certificates of different competitions</h3>';
}
 console.log(thirdsection)
// Function to adjust layout based on screen size
function adjustLayout() {
    var screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Code to adjust layout for smaller screens (e.g., mobile)
        document.querySelector('.menu').classList.add('collapsed');
    } else {
        // Code to adjust layout for larger screens (e.g., desktop)
        document.querySelector('.menu').classList.remove('collapsed');
    }
}

// Event listener to adjust layout when the window is resized
window.addEventListener('resize', adjustLayout);

// Initial adjustment on page load
adjustLayout();



// Function to adjust layout based on screen size
function adjustLayout() {
    var screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Code to adjust layout for smaller screens (e.g., mobile)
        document.querySelector('.menu').classList.add('collapsed');
    } else {
        // Code to adjust layout for larger screens (e.g., desktop)
        document.querySelector('.menu').classList.remove('collapsed');
    }
}

// Event listener to adjust layout when the window is resized
window.addEventListener('resize', adjustLayout);

// Initial adjustment on page load
adjustLayout();
