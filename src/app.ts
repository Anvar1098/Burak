import express from "express";
import path from 'path';
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from 'morgan';
import { MORGAN_FORMAT } from './libs/config';

/**1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended:true })); // Traditional API
app.use(express.json());                        // REST API
app.use(morgan(MORGAN_FORMAT));


/**2-SESSIONS **/

/**3-VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**4-ROUTERS **/

app.use("/admin", routerAdmin); // BSSR : EJS bu adminka uchun
app.use("/", router);           // SPA: REACT bu user frontend uchun
// Endpointdan keladigan req larni routerga yuboradi (use) 

export default app;