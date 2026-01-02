import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Todo } from "@/types/todo";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { apiUrl } from "@/constant";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "@/redux/todoSlice";

interface TodoCardProps {
  todo: Todo;
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const [status, setStatus] = useState(
    todo.completed ? "completed" : "not-completed"
  );

  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/api/todos/${todo.id}`, {
        withCredentials: true,
      });
      dispatch(deleteTodo(todo.id));
      toast.success("Todo deleted successfully");
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Delete failed");
    }
  };

  const handleUpdateStatus = async (status: boolean) => {
    try {
      const res = await axios.put(
        `${apiUrl}/api/todos/${todo.id}`,
        { completed: status },
        {
          withCredentials: true,
        }
      );
      dispatch(updateTodo(res.data));
      toast.success("Todo status updated successfully");
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Update failed");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{new Date(todo.createdAt).toLocaleDateString()}</CardTitle>
        <CardDescription>
          Status : {todo.completed ? "Completed" : "Not Completed"}
        </CardDescription>
        <CardAction>
          <DeleteConfirmationModal onConfirm={handleDelete} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{todo.title}</p>
      </CardContent>
      <CardFooter>
        <div>
          <p className="text-sm mb-2">Update Status</p>

          <Select
            value={status}
            onValueChange={(value) => {
              setStatus(value);
              handleUpdateStatus(value === "completed");
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="not-completed">Not Completed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
