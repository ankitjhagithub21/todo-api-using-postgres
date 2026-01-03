"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { apiUrl } from "@/constant";
import type { Todo } from "@/types/todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const LIMIT = 5;

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTodos = async (pageNumber: number) => {
      try {
        const res = await axios.get(
          `${apiUrl}/api/admin/todos?page=${pageNumber}&limit=${LIMIT}`,
          {
            withCredentials: true,
          }
        );
        setTodos(res.data.data);
        setTotalPages(res.data.pagination.totalPages)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos(page);
  }, [page]);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Table>

        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {todos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No todos found
              </TableCell>
            </TableRow>
          ) : (
            todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.author?.name || "—"}</TableCell>
                <TableCell>
                  <Badge variant={todo.completed ? "default" : "secondary"}>
                    {todo.completed ? "Completed" : "Pending"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(todo.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {/* ✅ Pagination Controls */}
      <div className="flex justify-end gap-2 mt-5">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>

        <span className="flex items-center px-2">
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Todos;
