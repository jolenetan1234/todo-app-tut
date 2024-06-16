// make it such that when "edit", this page renders. And this has 1 form with 2 inputs. Then use setTodo to update the todo, and onSubmit make a PUT request to server.
// we are gonna make this render WITHOUT redirecting (using states).
// basically same as CreateTodo except we use PUT instead of POST.
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateTodo = ({ _id, handleClose, handleUpdate }) => {
  const [todo, setTodo] = useState({title: "", description: ""});

  const navigate = useNavigate();

  // handle change => set state `data`
  const handleChange = (e) => {
    // e.target.name, e.target.value
    setTodo({...todo, [e.target.name]: e.target.value});
  };

  // handle submit => send PUT request to server
  const handleSubmit = (e) => {
    e.preventDefault();

    // send PUT request to server
    const putData = async () => {
      try {
        const res = await axios.put(`http://localhost:8000/api/todo/${_id}`);
        console.log(`Successfully updated todo id ${_id}`);
        console.log(res);
        navigate("/");

      } catch (err) {
        console.log(err);
      };
    };

    putData();
  };

  return (
    <div className="UpdateTodo">
      <div className="content">
        <form onSubmit={(e) => 
          {
            // sends PUT request to server
            handleSubmit(e);
            // inverts state `update`
            handleUpdate();
            // closes UpdateTodo component on submit
            handleClose();
          }}>
          <input 
          placeholder="title" 
          name="title" 
          value={todo.title} 
          onChange={handleChange}
          />

          <input 
          placeholder="description" 
          name="description" 
          value={todo.description} 
          onChange={handleChange}
          />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodo;