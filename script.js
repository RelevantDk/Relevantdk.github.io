function openFullScreen(img) {
    var modal = document.getElementById("fullScreenModal");
    var modalImg = document.getElementById("fullScreenImage");
    modal.style.display = "flex";
    modalImg.src = img.src; // Set the source of the modal image to the clicked image
}

function closeFullScreen() {
    var modal = document.getElementById("fullScreenModal");
    modal.style.display = "none";
}



// Get the modal
var modal = document.getElementById("fullScreenModal");

// When the user clicks anywhere outside of the modal content, close it
modal.onclick = function(event) {
    if (event.target == modal) { // Check if the clicked element is the modal background
        modal.style.display = "none";
    }
}









function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Show the button after scrolling down 100px
window.onscroll = function() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};



