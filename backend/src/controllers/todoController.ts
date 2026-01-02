import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title and author id are required" });

    const authorId = req.user?.id;

    if(!authorId) return res.status(400).json({error:"Author id is required."});

    const todo = await prisma.todo.create({
      data: {
        title,
        authorId
      },
    });

    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to created Todo." });
  }
};

export const getTodos = async (req: Request, res: Response) => {
  
  try {
    const todos = await prisma.todo.findMany({
       where: {
        authorId: req.user?.id, 
      },
      orderBy: { createdAt: "desc" },
      select:{
         id:true,
         title:true, 
         completed:true,
      }
    });

    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch Todo." });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const todoId = Number(req.params.id);


  try {
    const { title, completed } = req.body;

    const todo  = await prisma.todo.findUnique({where:{id:todoId}, select:{authorId:true}})

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (todo.authorId !== req.user?.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const updated = await prisma.todo.update({
      where: { id:todoId },
      data: { title, completed },
    });

    res.status(200).json(updated);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update Todo." });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const todo = await prisma.todo.findUnique({ where: { id }, select:{authorId:true} });

    if (!todo) return res.status(404).json({ error: "Todo not found." });

     if (todo.authorId !== req.user?.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await prisma.todo.delete({ where: { id } });

    res.status(200).json({ message: "Todo deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
