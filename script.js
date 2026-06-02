function sendRapport(event) {
            event.preventDefault();
            
            const tekst = document.getElementById('problemTekst').value;

            fetch('/rapporter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: 'problemMelding=' + encodeURIComponent(tekst)
            });

            alert("Takk! Rapporten din er mottatt.");
            
            document.getElementById('problemTekst').value = "";
        }
