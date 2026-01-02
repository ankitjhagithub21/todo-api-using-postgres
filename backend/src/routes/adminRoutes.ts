import { Router } from "express";

import { adminOnly, protect } from "../middlewares/isAuth";
import { getAllTodos, getAllUsers, updateUserRole } from "../controllers/adminController";

const router = Router()

router.get("/users", protect, adminOnly, getAllUsers)
router.put("/update-user-role", protect, adminOnly, updateUserRole)
router.get("/todos", protect, adminOnly, getAllTodos)

export default router