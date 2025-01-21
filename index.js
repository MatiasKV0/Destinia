import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

db.authenticate()
    .then( () => console.log("base conectada"))
    .catch( (error) => console.log(error))

const port = process.env.PORT || 4000;

app.use(express.static('public'));

app.set('view engine', 'pug');

app.use((req, res, next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Destinia";
    next();
});

app.use('/', router);

app.listen(port, () =>{
    console.log(`Servidor ${port}`);
}) 