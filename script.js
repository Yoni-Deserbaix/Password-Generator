// Get HTML elements
const inputField = document.getElementById("psw__input");
const copyBtn = document.getElementById("psw__copy");
const count = document.getElementById("Count");
const pswLength = document.getElementById("psw__length");
const generateBtn = document.getElementById("psw__btn");

copyPSW = () => {
  // Select all text in the password text field
  inputField.select();

  // Selection range for mobile devices
  inputField.setSelectionRange(0, 99999);

  // Copy the text to the clipboard
  navigator.clipboard.writeText(inputField.value);
};

// Function to generate a random password based on the selected length
generatePSW = () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  // Initialize an empty string for the generated password
  let password = "";

  // Generate the password character by character
  for (let i = 0; i < pswLength.value; i++) {
    // Generate a random number to choose a character
    const randomNumber = Math.floor(Math.random() * characters.length);

    // Add the selected character to the password
    password = password + characters[randomNumber];
  }

  // Display the generated password in the password text field
  inputField.value = password;
};

// Function to update the password length display
const updatePswLength = (value) => {
  // Display the selected password length
  count.textContent = value;
  generatePSW();
};

// Add an "input" event listener to the length selection field
pswLength.addEventListener("input", (e) => {
  const selectedLength = e.target.value;
  updatePswLength(selectedLength);
});

copyBtn.addEventListener("click", () => {
  event.preventDefault();
  copyPSW();
});

generateBtn.addEventListener("click", () => {
  event.preventDefault();
  generatePSW();
});
