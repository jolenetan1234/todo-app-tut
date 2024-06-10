import TodoCard from "./TodoCard";
import { useEffect, useState } from "react";
import axios from "axios";

const ShowTodoList = () => {
    const [todo, setTodo] = useState([]);

    // DOESN'T WORK. The function u pass into useEffect CANNOT return anything. Doing async () => ... makes it return a promise.
    // useEffect(async () => {
    //     try {
    //         const data = await axios.get("http://localhost:8000/api/todo");
    //         console.log("success");
    //     } catch (err) {
    //         console.log(err);
    //     };
    // });

    useEffect(() => {
        axios.get("http://localhost:8000/api/todo")
        .then((res) => {
            console.log(res.data);
            setTodo(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    });

  return (
    <div className="ShowTodoList">
        {todo.map((data) => (
            <TodoCard key={data._id} data={data} />
        )
        )}
    </div>
  );
};

export default ShowTodoList;