import  { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        res.send('Home Page');
        // send | json | redirect | end | render
    } catch (err) {
        console.log('Error, goHome', err)
    } 
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.send('SignUp Page');
    } catch (err) {
        console.log('Error, getSignup', err)
    } 
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.send('Login Page');
    } catch (err) {
        console.log('Error, getLogin', err)
    } 
};


restaurantController.processSignup =  async (req: Request, res: Response) => {
    try {
        console.log('processSignup');
       
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);  // (Call qismi) New member Objecti argument sifatida pass boldi
        
        res.send(result);
    } catch (err) {
        console.log('processSignup', err)
        res.send(err);
    } 
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log('processLogin');
       
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);

        res.send(result);
    } catch (err) {
        console.log('processLogin', err)
        res.send(err);
    } 
};


export default restaurantController;  