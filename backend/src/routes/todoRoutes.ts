import { Router } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todoController";
import { protect } from "../middlewares/isAuth";
const router = Router()

router.post("/", protect , createTodo)
router.get("/", protect, getTodos)
router.put("/:id",protect, updateTodo)
router.delete("/:id" , protect,deleteTodo)


export default router