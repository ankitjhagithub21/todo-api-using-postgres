import { Router } from "express";
import { getCurrentUser, loginUser, logout, registerUser } from "../controllers/userController";
import { adminOnly, protect } from "../middlewares/isAuth";

const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/current", protect,getCurrentUser)
router.post("/logout", logout)


export default router