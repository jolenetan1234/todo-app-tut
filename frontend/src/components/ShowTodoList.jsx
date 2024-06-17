import TodoCard from "./TodoCard";
import UpdateTodo from "./UpdateTodo";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowTodoList = () => {
    // set states
    const [todo, setTodo] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);

    // DOESN'T WORK. The function u pass into useEffect CANNOT return anything. Doing async () => ... makes it return a promise.
    // useEffect(async () => {
    //     try {
    //         const data = await axios.get("http://localhost:8000/api/todo");
    //         console.log("success");
    //     } catch (err) {
    //         console.log(err);
    //     };
    // });

    // rmb to pass in dependency array!! Otherwise, it will be an infinite loop that keeps triggering a re-render
    
    // fetch data and store it in state `todo`
    useEffect(() => {
        axios.get("http://localhost:8000/api/todo")
        .then((res) => {
            console.log(res.data);
            setTodo(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [update]);

    // handle "edit" button click
    // prop for TodoCard
    const handleEdit = (e) => {
        setId(e.target.name);
        setOpen(true);
    };

    // handle update submission
    const handleUpdate = () => {
        setUpdate(!update);
    };

    // close UpdateTodo component
    const handleClose = () => {
        setId("");
        setOpen(false);
    };

  return (
    <div className="ShowTodoList">
        <Link to="/create-todo">Create new todo</Link>

        <div className="contents">
            {todo.map((data) => (
                <TodoCard key={data._id} data={data} handleEdit={handleEdit} />
            )
            )}
        </div>
        
        {open ? (
            <div className="update-container">
                <div className="update-contents">
                    <p onClick={handleClose}>
                        &times;
                    </p>
                    <UpdateTodo _id={id} handleClose={handleClose} handleUpdate={handleUpdate}/>
                </div>
            </div>
        ) : (
            ""
        )}
       
    </div>


  );
};

export default ShowTodoList;