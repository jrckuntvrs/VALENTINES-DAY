// loading screen delay
window.addEventListener("load", function () {
  const overlayLoader = document.getElementById("loader");
  setTimeout(() => {
    overlayLoader.classList.add("hidden");
  }, 2000);
});
//
function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
}
function resetEnvelope() {
  document.getElementById("envelope").classList.remove("open");
}
//
function openModal(event) {
  event.preventDefault(); // Prevents default link action
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
