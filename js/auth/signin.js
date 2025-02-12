/* Connexion */
const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));

document.getElementById("openLoginBtn").addEventListener("click", () => {
  loginModal.show();
});

function setRole(role) {
  document.getElementById("role").value = role;
  alert("Rôle sélectionné : " + role);
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(`Connexion en tant que ${role} avec l'email : ${email}`);
    alert(`Connexion réussie en tant que ${role} !`);
    loginModal.hide();
  });
