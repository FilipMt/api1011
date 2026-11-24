const express = require("express");
const app = express();
const PORT = 3000;

const axios=require("axios");

//pocetna ruta
app.get("/",(req,res)=>
{
    res.send("doborodisli na API za chuck noris sale")
});

app.get ("/chuck",async(req,res)=>
{
    try
    {
        //dohvat sale sa vanjskog servera
        const odgovor=await axios.get("https://api.chucknorris.io/jokes/random");

        res.json({sala:odgovor.data.value});

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