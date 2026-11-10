const express = require("express");
const app = express();
const PORT = 3000;

const axios=require("axios");

//pocetna ruta
app.get("/",(req,res)=>
{
    res.send("doborodisli na API za viceve")
});

app.get ("/vicevi",async(req,res)=>
{
    try
    {
        //dohvat sale sa vanjskog servera
        const odgovor=await axios.get("https://v2.jokeapi.dev/joke/Any?format=json");

        res.json({sala:odgovor.data.setup+" "+odgovor.data.delivery});

    }
    catch(error)
    {
        res.status(500).json({error:"dogodila se greska"});
    }
});

app.listen(PORT, ()=>
{
    console.log(`server radi na portu ${PORT}`)
})