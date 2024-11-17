// unused clothing popup + overlay
const unused_clothing_popup = document.getElementById("unused_clothing_popup");
const unused_clothing_overlay = document.getElementById(
  "unused_clothing_overlay"
);
const unused_clothing_design = document.getElementById("design_button_popup");
const unused_clothing_donate = document.getElementById("donate_button_popup");
const button = document.getElementById("test_button");

var check_unused_clothing = 0;

function unused_clothing() {
  if (check_unused_clothing == 0) {
    check_unused_clothing = 1;
    unused_clothing_popup.style.display = "block";
    unused_clothing_overlay.style.display = "block";
    unused_clothing_donate.style.display = "block";
    unused_clothing_design.style.display = "block";
  } else {
    check_unused_clothing = 0;
    unused_clothing_popup.style.display = "none";
    unused_clothing_overlay.style.display = "none";
    unused_clothing_donate.style.display = "none";
    unused_clothing_design.style.display = "none";
  }
  console.log("HEllo world");
}

// waits for all the html doc to be loaded
document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", unused_clothing);
});
