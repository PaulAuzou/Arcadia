const habitats = {
  savane: {
    title: "Bienvenue au coeur de la Savane",
    images: [
      "/Images/savannah.jpg",
      "/images/savannah lion.jpg",
      "/images/elephant-4006712_1920.jpg",
    ],
    description:
      "Au cœur d'Arcadia, l’habitat Savane vous plonge dans l’immensité dorée des plaines africaines, où règnent en maîtres les emblématiques lions, éléphants et girafes. Sous le regard perçant du roi des animaux, les lions paressent à l’ombre des acacias ou se regroupent pour surveiller leur territoire. Non loin de là, les éléphants, majestueux et imposants, traversent les herbes hautes en famille, leurs trompes balayant le sol à la recherche de nourriture. Plus haut encore, les élégantes girafes tendent leur long cou vers la cime des arbres, broutant les feuilles avec une grâce fascinante. Ce décor vivant et immersif vous invite à observer ces créatures fascinantes dans un environnement soigneusement reconstitué, pour une expérience inoubliable au cœur de la savane.",
  },
  jungle: {
    title: "La Jungle",
    images: [
      "/images/elephant-4006712_1920.jpg",
      "/images/chameleon-384964_1920.jpg",
      "/images/animal-4458133_1920.jpg",
    ],
    description:
      "L’habitat Jungle du zoo vous entraîne au cœur d’une forêt tropicale luxuriante, où la nature foisonne et les créatures règnent en maîtres. Parmi les feuillages denses et les lianes entrelacées, les tigres arpentent leur territoire avec une grâce silencieuse, leur pelage flamboyant contrastant avec l’ombre des sous-bois. Plus haut, dans la canopée bruissante, les gorilles veillent sur leur famille, scrutant les visiteurs avec une intelligence saisissante. Au sol comme dans l’eau, une incroyable diversité de reptiles évolue discrètement : serpents aux couleurs éclatantes, crocodiles immobiles à l’affût, et lézards furtifs se fondent dans le décor verdoyant. Cet écosystème fascinant vous plonge dans l’atmosphère mystérieuse et envoûtante de la jungle, où chaque recoin révèle un nouveau secret de la vie sauvage.",
  },
  marais: {
    title: "Le Marais",
    images: [
      "/Images/nile-crocodile-245013_1920.jpg",
      "/images/otter-7953030_1920.jpg",
      "/images/frog-1335022_1920.jpg",
    ],
    description:
      "L’habitat Marais du zoo vous transporte dans un univers aquatique fascinant, où l’eau et la terre se confondent en un écosystème grouillant de vie. Silencieux et imposants, les crocodiles règnent en maîtres des eaux troubles, immobiles à la surface ou surgissant d’un bond pour capturer leur proie. Plus joueurs et agiles, les loutres évoluent avec grâce entre les rochers et les cours d’eau, s’amusant à plonger et à nager avec une énergie débordante. Tout autour, une symphonie naturelle résonne : les batraciens, grenouilles et crapauds, coassent à l’unisson, dissimulés dans les roseaux ou perchés sur des nénuphars. Cet habitat mystérieux et captivant vous plonge au cœur des zones humides, où chaque recoin révèle une faune surprenante et essentielle à l’équilibre de la nature.",
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
