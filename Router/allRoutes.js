import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/home", "Accueil", "/pages/home.html", []),
  "/js/script.js",
  new Route(
    "/habitats",
    "Leurs Habitats",
    "/pages/habitats.html",
    [],
    "/js/habitats.js"
  ),
  new Route(
    "/animaux",
    "Les Animaux",
    "/pages/animaux.html",
    [],
    "/js/animaux.js"
  ),
  new Route(
    "/services",
    "Nos Services",
    "/pages/services.html",
    [],
    "/js/services.js"
  ),
  new Route(
    "/engagement",
    "Notre Engagement",
    "/pages/engagement.html",
    [],
    "/js/engagement.js"
  ),
  new Route(
    "/signin",
    "Connexion",
    "/pages/auth/signin.html",
    [],
    "/js/auth/signin.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    "/pages/auth/signup.html",
    [],
    "/js/auth/signup.js"
  ),
  new Route("/account", "Mon compte", "/pages/auth/account.html", []),
  new Route(
    "/editPassword",
    "Changement de mot de passe",
    "/pages/auth/editPassword.html",
    []
  ),
  new Route(
    "/allResa",
    "Vos réservations",
    "/pages/reservations/allResa.html",
    []
  ),
  new Route("/reserver", "Réserver", "/pages/reserver.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réservé aux utilisateurs déconnecté 
["client"] -> Réservé aux utilisateurs avec le rôle client 
["admin"] -> Réservé aux utilisateurs avec le rôle admin 
["admin", "client"] -> Réservé aux utilisateurs avec le rôle client OU admin
*/
