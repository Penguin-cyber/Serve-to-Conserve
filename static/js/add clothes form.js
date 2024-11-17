// Store form data in local storage
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("clothing_form");
  const nameInput = document.getElementById("name");
  const clothing_typeInput = document.getElementsByName("type of clothing");
  const fileInput = document.getElementById("file");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name_value = nameInput.value;

    let clothingType = "";
    for (let radio of clothing_typeInput) {
      if (radio.checked) {
        clothingType = radio.value;
        break;
      }
    }

    const entry = {
      name: name_value,
      clothing_type: clothingType,
    };
    // Retrieve existing entries from localStorage, or initialize an empty array
    let entries = JSON.parse(localStorage.getItem("entries")) || [];

    console.log(entry);

    // Add the new entry to the list
    entries.push(entry);

    // Save the updated list back to localStorage
    localStorage.setItem("entries", JSON.stringify(entries));

    form.reset();
    imagePreview.style.display = "none";
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];

    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      // Set up a callback once the file is read
      reader.onload = function (e) {
        imagePreview.src = e.target.result; // Set the image src to the file's data URL
        imagePreview.style.display = "block"; // Show the image preview
      };

      reader.readAsDataURL(file); // Read the file as a Data URL
    } else {
      // Hide the preview if the selected file is not an image
      imagePreview.src = "";
      imagePreview.style.display = "none";
    }
  });
});
