import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        id: { not: req.user?.id},
  
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch users." });
  }
};

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        completed: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.status(201).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users." });
  }
};

export const updateUserRole = async (req: Request, res: Response) => {
  try {
    const { role, authorId } = req.body;

    const updated = await prisma.user.update({
      where: { id: authorId },
      data: {
        role: role,
      },
      select: {
        id: true,
        email: true,
        role: true,
        name: true,
      },
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users." });
  }
};
