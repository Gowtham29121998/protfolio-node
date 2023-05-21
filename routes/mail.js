import { Router } from "express";
import { senMail } from "../controllers/mailController.js";
const router = Router();

router.route("/mail").post(senMail);

export default router;
