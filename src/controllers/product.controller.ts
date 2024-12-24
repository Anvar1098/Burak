import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import  { Request, Response } from "express";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};

productController.getAllproducts =  async (req: Request, res: Response) => {
    try {
        console.log('getAllproducts');
        res.render('products');
    } catch (err) {
        console.log('Error, getAllproducts:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    } 
};

productController.createNewProduct =  async (req: Request, res: Response) => {
    try {
        console.log('createNewProduct');
        res.send("DONE!");
    } catch (err) {
        console.log('Error, createNewProduct:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    } 
};

productController.updateChosenProduct =  async (req: Request, res: Response) => {
    try {
        console.log('updateChosenProduct');
       
    } catch (err) {
        console.log('Error, updateChosenProduct:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    } 
};

export default productController;