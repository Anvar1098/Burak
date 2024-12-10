import {T} from "../libs/types/common";
import  { Request, Response } from "express";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send('Home Page');
    } catch (err) {
        console.log('Error, goHome', err)
    } 
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('Login Page');
    } catch (err) {
        console.log('Error, getLogin', err)
    } 
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('SignUp Page');
    } catch (err) {
        console.log('Error, getSignup', err)
    } 
};

export default restaurantController;