console.clear();
import express from 'express';
import accuontRouter from './routes/account.js';

const PORT = 8080;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());
expressApp.use("/account", accuontRouter);


expressApp.listen(PORT, () =>
    console.log(`Servidor montado en ${PORT}` )
);




/*
expressApp.post("/mi-cuenta", (req, res) => {
    
    console.log(req.query);
    res.send();
    //console.log(req.headers);
    //console.log(req.get("accept"))
   // res.send("Cuenta de usuario");
   /*
    res.status(401).send({
        errorMessage: "no autorizado"
    });
});
*/ 
/*

expressApp.put ("/producto", (req,res) => {
    console.log(req.body);
    res.send();
});




*/
