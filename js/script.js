const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");

function getRole() {
  return getCookie(RoleCookieName);
}

function signout() {
  eraseCookie(tokenCookieName);
  eraseCookie(RoleCookieName);
  window.location.reload();
}
function setToken(token) {
  setCookie(tokenCookieName, token, 7);
}

function getToken() {
  return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}

/* 
Disconnected
Connected (admin ou client)
    - admin
    - client
*/
function showAndHideElementsForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show]");

  allElementsToEdit.forEach((element) => {
    switch (element.dataset.show) {
      case "disconnected":
        if (userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "connected":
        if (!userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "admin":
        if (!userConnected || role != "admin") {
          element.classList.add("d-none");
        }
        break;
      case "client":
        if (!userConnected || role != "client") {
          element.classList.add("d-none");
        }
        break;
    }
  });
}

// Sélectionner toutes les étoiles
const stars = document.querySelectorAll("#starRating i");
const ratingInput = document.getElementById("rating");

// Ajouter l'événement de survol des étoiles pour changer leur couleur
stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const value = star.getAttribute("data-value");
    highlightStars(value);
  });

  star.addEventListener("mouseout", () => {
    const value = ratingInput.value;
    highlightStars(value);
  });

  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");
    ratingInput.value = value;
    highlightStars(value);
  });
});

// Fonction pour surligner les étoiles selon la note choisie
function highlightStars(value) {
  stars.forEach((star) => {
    if (star.getAttribute("data-value") <= value) {
      star.style.color = "#f39c12"; // Couleur dorée pour les étoiles sélectionnées
    } else {
      star.style.color = "#ccc"; // Couleur grise pour les étoiles non sélectionnées
    }
  });
}

// Gérer la soumission du formulaire
document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupérer les valeurs
    const rating = ratingInput.value;
    const comment = document.getElementById("comment").value;

    // Vérifier que le formulaire est correctement rempli
    if (rating == 0 || comment.trim() === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Afficher un message de confirmation
    alert(
      `Merci pour votre avis !\nNote: ${rating} étoiles\nCommentaire: ${comment}`
    );

    // Réinitialiser le formulaire
    document.getElementById("reviewForm").reset();
    ratingInput.value = 0;
    highlightStars(0);
  });
