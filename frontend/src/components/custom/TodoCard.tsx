import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Todo } from "@/types/todo";
import { Trash } from "lucide-react";

interface TodoCardProps {
  todo: Todo;
}

const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {new Date(todo.createdAt).toLocaleDateString()} lorem
        </CardTitle>

        <CardAction>
          <Trash className="cursor-pointer" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{todo.title}</p>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
