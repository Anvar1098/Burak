import express from "express";
import path from 'path';
import router from "./router";
import routerAdmin from "./routerAdmin";

/**1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

/**2-SESSIONS **/

/**3-VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**4-ROUTERS **/

app.use("/admin", routerAdmin); // BSSR : EJS bu adminka uchun
app.use("/", router);           // SPA: REACT bu user frontend uchun
// Mid DP slashdan keladigan req larni routerga yuboradi

export default app;