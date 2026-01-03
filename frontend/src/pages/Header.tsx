import CreateTodoModal from "@/components/custom/CreateTodoModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { apiUrl } from "@/constant";
import { useAuth } from "@/context/UserContext";

import { addTodo } from "@/redux/todoSlice";
import axios from "axios";
import { useDispatch} from "react-redux";
import { toast } from "sonner";

const Header = () => {
  const dispatch = useDispatch();

  const {user, onLogout} = useAuth()

  const createTodo = async (title: string) => {
    const res = await axios.post(
      `${apiUrl}/api/todos`,
      { title },
      { withCredentials: true }
    );
    dispatch(addTodo(res.data));
    toast.success("Todo created successfully.");
  };

  

  return (
    <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
      <CreateTodoModal onAdd={createTodo} />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{user?.name}</DropdownMenuItem>
          <DropdownMenuItem>{user?.email}</DropdownMenuItem>
          <DropdownMenuItem>Role : {user?.role}</DropdownMenuItem>
           <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
