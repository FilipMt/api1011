
const express = require("express");
const app = express();
const PORT = 3000;

function provjeri(req) {
    const broj1 = Number(req.query.a);
    const broj2 = Number(req.query.b);

    if (
        req.query.a === undefined ||
        req.query.b === undefined ||
        Number.isNaN(broj1) ||
        Number.isNaN(broj2)
    ) {
        return { error: "Parametri nisu brojevi" };
    } 
    else {
        return { broj1, broj2 };
    }
}

// ZBRAJANJE
app.get("/zbroj", (req, res) => {
    const validacija = provjeri(req);

    if (validacija.error) {
        res.json({ greska: "Dogodila se greska" });
    } 
    else {
        let rezultat = validacija.broj1 + validacija.broj2;
        res.json({ zbroj: rezultat });
    }
});

// ODUZIMANJE
app.get("/oduzimanje", (req, res) => {
    const validacija = provjeri(req);

    if (validacija.error) {
        res.json({ greska: "Dogodila se greska" });
    } 
    else {
        let rezultat = validacija.broj1 - validacija.broj2;
        res.json({ oduzimanje: rezultat });
    }
});


app.get("/mnozenje", (req, res) => {
    const validacija = provjeri(req);

    if (validacija.error) {
        res.json({ greska: "Dogodila se greska" });
    } 
    else {
        let rezultat = validacija.broj1 * validacija.broj2;
        res.json({ mnozenje: rezultat });
    }
});

app.get("/djeljenje", (req, res) => {
    const validacija = provjeri(req);

    if (validacija.error) {
        res.json({ greska: "Dogodila se greska" });
    } 
    else if (validacija.broj2 === 0) {
        res.json({ greska: "Dijeljenje s nulom nije dozvoljeno" });
    }
    else {
        let rezultat = validacija.broj1 / validacija.broj2;
        res.json({ djeljenje: rezultat });
    }
});

app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
});
