// Récupérer les éléments HTML
const champMotDePasse = document.getElementById("input");
const boutonCopier = document.getElementById("copy__psw");
const elementLongueurMotDePasse = document.getElementById("charCount");
const plageLongueurMotDePasse = document.getElementById("length__psw");
const boutonGenerer = document.getElementById("genere__psw");

copyPSW = () => {
  // Sélectionner tout le texte dans le champ de texte du mot de passe
  champMotDePasse.select();

  // Plage de sélection pour les appareils mobiles
  champMotDePasse.setSelectionRange(0, 99999);

  // Copie le texte dans le presse-papiers
  navigator.clipboard.writeText(champMotDePasse.value);
};

// Fonction qui génère un mot de passe aléatoire en fonction de la longueur sélectionnée
genererMotDePasse = () => {
  // Obtenir la longueur du mot de passe sélectionnée à partir de la plage de sélection
  const longueurMotDePasse = plageLongueurMotDePasse.value;

  const caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  // Initialisation d'une chaîne vide pour le mot de passe généré
  let motDePasse = "";

  // Générer le mot de passe caractère par caractère
  for (let i = 0; i < longueurMotDePasse; i++) {
    // Générer un nombre aléatoire pour choisir un caractère
    const nombreAleatoire = Math.floor(Math.random() * caracteres.length);

    // Ajouter le caractère sélectionné au mot de passe
    motDePasse = motDePasse + caracteres[nombreAleatoire];
  }

  // Afficher le mot de passe généré dans le champ de texte du mot de passe
  champMotDePasse.value = motDePasse;
};
// Fonction qui met à jour l'affichage de la longueur du mot de passe
const mettreAJourLongueurMotDePasse = (valeur) => {
  // Afficher la longueur du mot de passe sélectionnée
  elementLongueurMotDePasse.textContent = valeur;
  genererMotDePasse();
};

// Ajout d'un gestionnaire d'événements "input" à la plage de sélection
plageLongueurMotDePasse.addEventListener("input", (e) => {
  const longueurSelectionnee = e.target.value;
  mettreAJourLongueurMotDePasse(longueurSelectionnee);
});

boutonCopier.addEventListener("click", () => {
  event.preventDefault();
  copyPSW();
});

boutonGenerer.addEventListener("click", () => {
  event.preventDefault();
  genererMotDePasse();
});
