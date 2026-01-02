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
} from "@/components/ui/select"
import DeleteConfirmationModal from "./DeleteConfirmationModal";


interface TodoCardProps {
    todo:Todo
}

const TodoCard = ({todo}:TodoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{new Date(todo.createdAt).toLocaleDateString()} lorem</CardTitle>
        <CardDescription>Status : {todo.completed ? 'Completed' : 'Not Completed'}</CardDescription>
        <CardAction>
         <DeleteConfirmationModal/>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{todo.title}</p>
      </CardContent>
      <CardFooter>
       <div>
         <p className="text-sm mb-2">Update Status</p>

        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select status" />
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
