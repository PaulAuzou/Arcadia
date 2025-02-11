import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/home", "Accueil", "/pages/home.html", []),
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
    "/js/habitats.js"
  ),
  new Route(
    "/services",
    "Nos Services",
    "/pages/services.html",
    [],
    "/js/habitats.js"
  ),
  new Route(
    "/signin",
    "Connexion",
    "/pages/auth/signin.html",
    ["disconnected"],
    "/js/auth/signin.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    "/pages/auth/signup.html",
    ["disconnected"],
    "/js/auth/signup.js"
  ),
  new Route("/account", "Mon compte", "/pages/auth/account.html", [
    "client",
    "admin",
  ]),
  new Route(
    "/editPassword",
    "Changement de mot de passe",
    "/pages/auth/editPassword.html",
    ["client", "admin"]
  ),
  new Route(
    "/allResa",
    "Vos réservations",
    "/pages/reservations/allResa.html",
    ["client"]
  ),
  new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", [
    "client",
  ]),
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
