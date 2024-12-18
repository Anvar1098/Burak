import {T} from "../libs/types/common";
import  { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";

// SPA UCHUN

const memberService = new MemberService();


const memberController: T = {};

memberController.signup =  async (req: Request, res: Response) => {
    try {
        console.log('signup');
       
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);  // (Call qismi) New member Objecti argument sifatida pass boldi
        
        res.json({ member: result });
    } catch (err) {
        console.log('Error, signup:', err);
        //res.json({});
    } 
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('login');
        const input: LoginInput = req.body,
          result = await memberService.login(input); 

        res.json({ member: result });
    } catch (err) {
        console.log('Error, login:', err);
          //res.json({});
    } 
};


export default memberController;