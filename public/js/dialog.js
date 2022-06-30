var rootModal = document.getElementById("root");
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("showDialog");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  console.log("here");
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}