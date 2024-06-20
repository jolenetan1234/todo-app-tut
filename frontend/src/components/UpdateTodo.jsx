// make it such that when "edit", this page renders. And this has 1 form with 2 inputs. Then use setTodo to update the todo, and onSubmit make a PUT request to server.
// we are gonna make this render WITHOUT redirecting (using states).
// basically same as CreateTodo except we use PUT instead of POST.
import { useEffect, useState } from "react";
import axios from "axios";

const UpdateTodo = ({ _id, handleClose, handleUpdate }) => {
  const [todo, setTodo] = useState({title: "", description: ""});

  // such that initial state of `todo` is what is in the database (instead of empty string)
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/todo/${_id}`);
        setTodo({title: res.data.title, description: res.data.description})
        console.log(todo);
      } catch (err) {
        console.log(err);
      };
    };
    fetchTodo();
  }, []);

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
        const res = await axios.put(`http://localhost:8000/api/todo/${_id}`, todo);
        console.log(`Successfully updated todo id ${_id}`);
        console.log(res);

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
          onChange={handleChange}
          />

          <input 
          placeholder="description" 
          name="description" 
          onChange={handleChange}
          />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodo;