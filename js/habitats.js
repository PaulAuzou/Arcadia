const habitats = {
  savane: {
    title: "La Savane",
    images: [
      "/Images/savannah.jpg",
      "/images/savannah lion.jpg",
      "/images/elephant-4006712_1920.jpg",
    ],
    description: "Explorez l'habitat des lions, éléphants et girafes.",
  },
  jungle: {
    title: "La Jungle",
    images: [
      "/images/elephant-4006712_1920.jpg",
      "/images/chameleon-384964_1920.jpg",
      "/images/animal-4458133_1920.jpg",
    ],
    description: "Découvrez les singes, jaguars et oiseaux exotiques.",
  },
  marais: {
    title: "Le Marais",
    images: [
      "/Images/nile-crocodile-245013_1920.jpg",
      "/images/otter-7953030_1920.jpg",
      "/images/frog-1335022_1920.jpg",
    ],
    description: "Observez les crocodiles, grenouilles et tortues.",
  },
};

function openModal(habitat) {
  document.getElementById("modalTitle").textContent = habitats[habitat].title;

  let carouselInner = document.getElementById("carouselContent");
  carouselInner.innerHTML = "";
  habitats[habitat].images.forEach((img, index) => {
    let activeClass = index === 0 ? "active" : "";
    carouselInner.innerHTML += `<div class="carousel-item ${activeClass}"><img src="${img}" alt="${habitat}"></div>`;
  });

  document.getElementById(
    "modalDescription"
  ).innerHTML = `<h5>${habitats[habitat].title}</h5><p>${habitats[habitat].description}</p>`;

  let myModal = new bootstrap.Modal(document.getElementById("habitatModal"));
  myModal.show();
}
