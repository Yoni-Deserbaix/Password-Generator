// Récupérer les éléments HTML
const inputField = document.getElementById("psw__input");
const copyBtn = document.getElementById("psw__copy");
const count = document.getElementById("Count");
const pswLength = document.getElementById("psw__length");
const generateBtn = document.getElementById("psw__btn");

copyPSW = () => {
  // Sélectionner tout le texte dans le champ de texte du mot de passe
  inputField.select();

  // Plage de sélection pour les appareils mobiles
  inputField.setSelectionRange(0, 99999);

  // Copie le texte dans le presse-papiers
  navigator.clipboard.writeText(inputField.value);
};

// Fonction qui génère un mot de passe aléatoire en fonction de la longueur sélectionnée
generatePSW = () => {

  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  // Initialisation d'une chaîne vide pour le mot de passe généré
  let password = "";

  // Générer le mot de passe caractère par caractère
  for (let i = 0; i < pswLength.value; i++) {
    // Générer un nombre aléatoire pour choisir un caractère
    const randomNumber = Math.floor(Math.random() * characters.length);

    // Ajouter le caractère sélectionné au mot de passe
    password = password + characters[randomNumber];
  }

  // Afficher le mot de passe généré dans le champ de texte du mot de passe
  inputField.value = password;
};
// Fonction qui met à jour l'affichage de la longueur du mot de passe
const updatePswLength = (value) => {
  // Afficher la longueur du mot de passe sélectionnée
  count.textContent = value;
  generatePSW();
};

// Ajout d'un gestionnaire d'événements "input" à la plage de sélection
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
