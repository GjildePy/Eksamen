const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/rapporter', (req, res) => {
    const melding = req.body.problemMelding;

    console.log("‼️ NY RAPPORT MOTTAT:");
    console.log(melding);
    console.log("----------------------")

    res.sendStatus(200);

});

app.listen(3000, () => {
    console.log("Serveren kjører!")
})