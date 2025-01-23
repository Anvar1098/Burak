import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// SPA UCHUN
/** Members */
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.get("/member/detail", memberController.verifyAuth);

/** Orders */

export default router;  