import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

routerAdmin.get("/", restaurantController.goHome);         

/*  Restaurant */
routerAdmin
 .get("/login", restaurantController.getLogin)
 .post("/login", restaurantController.processLogin);
routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);

routerAdmin
.get('/check-me', restaurantController.checkAuthSession)
.get('/logout', restaurantController.logout)


/*  Product */
routerAdmin.get(
    '/product/all', 
    restaurantController.verifyRestaurant,
    productController.getAllproducts
    );
routerAdmin.post('/product/create', productController.createNewProduct);
routerAdmin.post('/product/:id', productController.updateChosenProduct);


/*  User */

export default routerAdmin;  