document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('registrationForm');

    // Création d'un élément pour le message
    const successMessage = document.createElement('p');
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.marginTop = '20px';

    form.parentNode.insertBefore(successMessage, form.nextSibling); // ajoute après le formulaire

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // empêche le rechargement

        // Vérification simple : on peut garder validation si nécessaire
        let valid = true;
        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const email = document.getElementById('email').value.trim();
        if (nom.length < 2 || prenom.length < 2 || email.length < 5) {
            alert('Veuillez remplir correctement le formulaire');
            valid = false;
        }

        if (!valid) return;

        // Afficher le message de succès
        successMessage.textContent = 'Inscription réussie !';

        // Réinitialiser le formulaire
        form.reset();
    });
});
