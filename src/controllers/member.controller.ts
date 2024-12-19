import {T} from "../libs/types/common";
import  { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

// SPA UCHUN

const memberService = new MemberService();


const memberController: T = {};

memberController.signup =  async (req: Request, res: Response) => {
    try {
        console.log('signup');
       
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);  // (Call qismi) New member Objecti argument sifatida pass boldi
             // TODO: TOKENS AUTHENTICATION 
            
        res.json({ member: result });
    } catch (err) {
        console.log('Error, signup:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({});
    } 
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('login');
        const input: LoginInput = req.body,
          result = await memberService.login(input); 
            // TODO: TOKENS AUTHENTICATION 


        res.json({ member: result });
    } catch (err) {
        console.log('Error, login:', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
          //res.json({});
    } 
};


export default memberController;