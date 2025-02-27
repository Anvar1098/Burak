// Backend API server
import express from "express";
import path from 'path';
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from "cors";
import { MORGAN_FORMAT } from './libs/config';

// TCP 2 => Authentication uchun fakat
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore ({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",  // TCP shu uchun qurildi
});

/**1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended:true })); // Traditional API
app.use(express.json());                        // REST API
app.use(cookieParser());                        // parses (break down) cookies from incoming requests in Express.js
app.use(cors({ credentials: true, origin: true })); // if the frontend tries to fetch data from the backend, the browser blocks it unless CORS is enabled. (This allows your frontend to talk to your backend safely. )
app.use(morgan(MORGAN_FORMAT));                 // Logging mexanizm 


/**2-SESSIONS **/

// 1)Tamga qurish           2) Tamgani oqish
app.use(
    session({
      secret: String(process.env.SESSION_SECRET), 
      cookie: {
        maxAge: 1000 * 3600 * 6,  // 6h
      },
      store: store,
      resave: true,
      saveUninitialized: true  
    })
);

// req. +session.+member va res.locals ga saqlanadi
// global tarzda data yuborish (ejs ga)
app.use(function(req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/**3-VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**4-ROUTERS **/

app.use("/admin", routerAdmin); // BSSR : EJS bu adminka uchun
app.use("/", router);           // SPA: REACT bu user frontend uchun
// Endpointdan keladigan req larni routerga yuboradi (use) 

export default app;