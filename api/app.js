import express from "express";
import cors from "cors";

// //import db
import db from "./database/db.js";
import router from "./routes/routes.js";

const app = express();

app.use (cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/API', router);

try {
    await db.authenticate();
    console.log('Conexión exitosa a la DB');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.listen(8010, ()=>{
    console.log('Server UP running');
})