import { Router } from "express";

import { adminOnly, protect } from "../middlewares/isAuth";
import { getAllUsers, updateUserRole } from "../controllers/adminController";

const router = Router()

router.post("/users", protect, adminOnly, getAllUsers)
router.put("/update-user-role", protect, adminOnly, updateUserRole)

export default router