function sendRapport(event) {

    const tekst = document.getElementById('tekstRapport').value;

    fetch ('/rapporter', {
        method: 'POST',
        headers: {'Content-type': 'application/x-www-form-urlencoded' },
        body: 'problemMelding=' + encodeURIComponent(tekst)
    });

    alert("Takk! Rapporten din er mottatt")

    document.getElementById('tekstRapport').value = "";

}