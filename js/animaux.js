let userRole = "veterinaire"; // Modifier cette valeur pour "admin", "employe" ou "veterinaire" pour tester
let viewCounts = {
  lion: 0,
  tigre: 0,
  crocodile: 0,
  elephant: 0,
  loutre: 0,
  gorille: 0,
};

const descriptions_animaux = {
  lion: "William, le majestueux lion, est sans conteste l’une des stars du parc. Avec sa crinière dorée et son regard perçant, il incarne toute la puissance et la noblesse de son espèce. Arrivé à Arcadia après avoir été secouru d’un environnement menaçant, il profite désormais d’un vaste enclos recréant les plaines africaines, où il peut se prélasser au soleil ou rugir pour affirmer sa présence. Symbole de force et de résilience, William est aussi un ambassadeur de la conservation animale, sensibilisant les visiteurs à la protection des grands félins à travers le monde.",
  tigre:
    "Jonesy est un tigre majestueux, dont la fourrure rayée d'orange vif et de noir contraste magnifiquement avec son regard perçant. Avec ses muscles puissants et son agilité féline, il est un maître dans l'art de l'observation et du camouflage, se fondant parfaitement dans son environnement lorsqu'il se repose ou chasse. Jonesy est un tigre solitaire, mais son charisme naturel attire toujours les regards des visiteurs qui sont captivés par sa prestance et sa grâce. Il n'hésite pas à montrer sa force et son intelligence lorsqu'il interagit avec les soigneurs qui le connaissent bien. Jonesy est l'un des animaux les plus emblématiques du zoo, symbolisant à la fois la beauté sauvage et la puissance silencieuse.",
  crocodile:
    "Xeno est un crocodile impressionnant, avec une peau épaisse et écailleuse de couleur vert olive qui se fond parfaitement dans les eaux sombres de son enclos. Sa gueule massive, équipée de dents acérées, lui permet de capturer sa proie avec une précision redoutable. Xeno est un maître de la patience, attendant des heures sous l'eau dans une parfaite immobilité avant de surgir avec une rapidité surprenante. Son regard perçant et calme en fait une créature fascinante pour les visiteurs. C'est un animal intelligent, réagissant à son environnement avec une sensibilité qui va au-delà de son apparence de prédateur.",
  elephant:
    "Dwayne est un éléphant majestueux d'Arcadia. Avec sa peau grise et sa stature imposante, il incarne la sagesse et la tranquillité. Ses grandes oreilles battent doucement sous les rayons du soleil, tandis qu'il se déplace avec une élégance surprenante pour un animal de sa taille. Dwayne est connu pour sa personnalité calme et bienveillante, et il est souvent vu en train de se balader dans son enclos ou de se rafraîchir dans une baignoire d'eau, appréciant les moments de sérénité. En tant que matriarche du groupe, il est un guide respecté pour les autres éléphants du zoo et est très aimé par les visiteurs qui viennent admirer sa beauté imposante et sa douceur exceptionnelle.",
  loutre:
    "Newt est une loutre vive et malicieuse qui réside au zoo. Avec son pelage soyeux et d'un brun profond, elle est une créature pleine d'énergie, toujours en mouvement, que ce soit pour jouer dans l'eau ou se prélasser sur les rives de son enclos. Elle aime plonger, éclabousser, et se lancer dans des jeux aquatiques avec ses jouets, impressionnant par son agilité et sa capacité à nager avec une grâce surprenante. Newt est également connue pour sa grande intelligence, utilisant des pierres et des outils pour ouvrir des coquilles de noix, prouvant ainsi son ingéniosité naturelle. Elle incarne la joie de vivre et l'esprit ludique, captivant tous ceux qui croisent son chemin à Arcadia.",
  gorille:
    "Carter est un gorille imposant et charismatique d'Arcadia, avec une silhouette massive et une fourrure noire d’un éclat profond. Bien que puissant, Carter est un animal calme et réfléchi, souvent vu en train de se détendre dans son enclos ou de jouer avec des objets qu'il manipule avec une étonnante délicatesse pour un primate de sa taille. Leader naturel du groupe, il veille sur ses compagnons avec une bienveillance silencieuse, et les visiteurs sont fascinés par sa présence, ressentant une étrange connexion avec cet être majestueux. Carter est également très attaché à ses soigneurs, avec qui il entretient une relation de confiance. Sa force physique et son esprit sage en font l'un des habitants les plus respectés du zoo",
};

function enableEditing(cardId) {
  document
    .querySelectorAll(`#${cardId} input, #${cardId} textarea`)
    .forEach((el) => el.removeAttribute("disabled"));
}

function saveChanges(cardId) {
  document
    .querySelectorAll(`#${cardId} input, #${cardId} textarea`)
    .forEach((el) => el.setAttribute("disabled", "true"));
  alert("Modifications enregistrées !");
}

function showImagePopup(animal) {
  const animalDescription = descriptions_animaux[animal];
  viewCounts[animal]++;
  document.getElementById("popup-image").src = document.getElementById(
    `${animal}-img`
  ).src;
  document.getElementById(
    "popup-description"
  ).innerText = `${animalDescription}`;
  document.getElementById("image-popup").style.display = "block";
  document.getElementById(
    "viewCounter"
  ).innerText = `${viewCounts[animal]} Vues`;
}

function closePopup() {
  document.getElementById("image-popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  if (
    userRole === "admin" ||
    userRole === "employe" ||
    userRole === "veterinaire"
  ) {
    document.getElementById("admin-controls-lion").style.display = "block";
  }
});
