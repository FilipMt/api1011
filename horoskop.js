
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.get("/horoskop", async (req, res) => {
    const znak = req.query.znak;

    try {
        const odgovor = await axios.get(
            `https://freehoroscopeapi.com/api/v1/get-horoscope/daily?sign=${znak}`
        );

        const horoskop = odgovor.data.data.horoscope;

        res.send(horoskop);
    }
    catch (e) {
        res.status(500).send("Horoskop nije dostupan");
    }
});

app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
});
