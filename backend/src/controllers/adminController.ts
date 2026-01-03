import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;


    const [users, total]= await Promise.all([
       prisma.user.findMany({
         skip,
         take:limit,
         orderBy:{createdAt:'desc'},
         select:{
            id:true,
            name:true,
            email:true,
            role:true,
            createdAt:true
         }
       }),
       prisma.user.count()
    ])

    res.status(200).json({data:users, pagination:{
      total,
      page,
      limit,
      totalPages:Math.ceil(total/limit)
    }});

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch users." });
  }
};

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const [todos, total] = await Promise.all([
      prisma.todo.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          completed: true,
          createdAt: true,
          author: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }),
      prisma.todo.count(),
    ]);

    res.status(200).json({
      data: todos,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
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
