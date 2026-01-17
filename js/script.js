document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('registrationForm');

    // Section 3 : checkboxes applications
    const officeCheckboxes = document.querySelectorAll(
        'input[name="applications"]'
    );

    // Options de formation
    const optionRadios = document.querySelectorAll(
        'input[name="formationOption"]'
    );

    // Gestion Option 1 / Option 2
    optionRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'option2') {
                officeCheckboxes.forEach(cb => {
                    cb.checked = true;
                    cb.disabled = true;
                });
            } else {
                officeCheckboxes.forEach(cb => {
                    cb.checked = false;
                    cb.disabled = false;
                });
            }
        });
    });

    // Message de succès
    const successMessage = document.createElement('p');
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.marginTop = '20px';

    form.parentNode.insertBefore(successMessage, form.nextSibling);

    // Soumission du formulaire
    form.addEventListener('submit', function () {

        successMessage.textContent =
            'Inscription réussie ! Redirection en cours...';

        // Désactiver le bouton submit
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        // Redirection après 4 secondes
        setTimeout(() => {
            window.location.href = 'termes.html';
        }, 4000);
    });
});
