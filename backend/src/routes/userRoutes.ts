import { Router } from "express";
import { getAllUsers, getCurrentUser, loginUser, logout, registerUser, updateUserRole } from "../controllers/userController";
import { adminOnly, protect } from "../middlewares/isAuth";

const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/", protect, adminOnly ,getAllUsers)
router.put("/:id",protect , adminOnly, updateUserRole)
router.get("/current", protect,getCurrentUser)
router.post("/logout", logout)


export default router