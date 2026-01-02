import TodoCard from "@/components/custom/TodoCard"
import { apiUrl } from "@/constant"
import type { Todo } from "@/types/todo"
import axios from "axios"
import { useEffect, useState } from "react"


const HomePage = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchTodos = async() => {
      try{
        const res = await axios.get(`${apiUrl}/api/todos`,{withCredentials:true})
        setTodos(res.data)
      }catch(error){
         console.log(error)
      }finally{
        setIsLoading(false)
      }
    }
    fetchTodos()
  },[])

  return (
    <div>
      {
        isLoading ? <>Loading...</> :  <div className="max-w-7xl mx-auto p-5 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {
          todos.map((todo)=>{
            return <TodoCard key={todo.id} todo={todo}/>
          })
        }
      </div>
      }
    </div>
  )
}

export default HomePage