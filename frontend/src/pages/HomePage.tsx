import TodoCard from "@/components/custom/TodoCard";
import { apiUrl } from "@/constant";
import type { RootState } from "@/redux/store";
import { setIsLoading, setTodos } from "@/redux/todoSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";


const HomePage = () => {

  
  const {todos, isLoading} = useSelector((state:RootState)=>state.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/todos`, {
          withCredentials: true,
        });
       dispatch(setTodos(res.data))
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchTodos();
  }, []);

 
  return (
    <div>
      <Header/>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="max-w-7xl mx-auto p-5 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {todos.map((todo) => {
            return <TodoCard key={todo.id} todo={todo} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
