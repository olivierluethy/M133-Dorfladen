// Clientside Validierung
window.addEventListener("load", function () {

    document.querySelector('form').addEventListener('submit', function (evt) {

        var errors = false;
        var warnings = document.querySelectorAll(".warning");
        if (warnings != null) {
            warnings.forEach(element => {
                element.remove();
            });
        }

        if (document.querySelector('#vorname') != null) {
            if (document.querySelector('#vorname').value.trim() === '') {
                document.querySelector('#warningTitel').insertAdjacentHTML("afterend", "<p style='color: red; font-weight: bold;' class=\"warning\"> Bitte geben Sie den Vornamen ein</p>");
                errors = true;
            }
        }

        if (document.querySelector('#nachname') != null) {
            if (document.querySelector('#nachname').value.trim() === '') {
                document.querySelector('#warningAufgabe').insertAdjacentHTML("afterend", "<p style='color: red; font-weight: bold;' class=\"warning\"> Bitte geben Sie den Nachnamen ein</p>");
                errors = true;
            }
        }

        if (document.querySelector('#email') != null) {
            if (document.querySelector('#email').value.trim() === '') {
                document.querySelector('#warningDate').insertAdjacentHTML("afterend", "<p style='color: red; font-weight: bold;' class=\"warning\"> Bitte wählen Sie die Email-Adresse ein</p>");
                errors = true;
            }
        }

        if (errors) {
            evt.preventDefault();
        }

    });
});