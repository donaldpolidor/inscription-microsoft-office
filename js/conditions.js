document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');
    const checkboxes = document.querySelectorAll('.agreement-point input[type="checkbox"]');
    
    // Vérifier si toutes les cases sont cochées
    function checkAllChecked() {
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        acceptBtn.disabled = !allChecked;
        return allChecked;
    }
    
    // Écouter les changements sur les cases à cocher
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkAllChecked);
    });
    
    // Bouton Accepter
    acceptBtn.addEventListener('click', function() {
        if (checkAllChecked()) {
            // Rediriger vers le formulaire d'inscription
            window.location.href = 'formulaire.html';
        } else {
            alert('Veuillez accepter toutes les conditions en cochant toutes la case.');
        }
    });
    
    // Bouton Refuser
    declineBtn.addEventListener('click', function() {
        if (confirm('Êtes-vous sûr de refuser les conditions ? Vous ne pourrez pas vous inscrire à la formation.')) {
            // Rediriger vers une page d'accueil ou fermer
            window.location.href = 'termes.html'; // retour sur la page d'accueil
        }
    });
    
    // Vérification initiale
    checkAllChecked();
    
    // Animation des étapes
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(20px)';
            step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
});