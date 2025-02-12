document.addEventListener("DOMContentLoaded", function () {
  const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
  const roleButtons = document.querySelectorAll(".role-btn");
  const roleInput = document.getElementById("role");
  const loginForm = document.getElementById("loginForm");

  // Sélectionner un rôle
  roleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      roleButtons.forEach((btn) => btn.classList.remove("selected-role"));
      this.classList.add("selected-role");
      roleInput.value = this.getAttribute("data-role");
    });
  });

  // Gérer la soumission du formulaire
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const role = roleInput.value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(`Connexion en tant que ${role} avec l'email : ${email}`);
    alert(`Connexion réussie en tant que ${role} !`);
    loginModal.hide();
  });
});
