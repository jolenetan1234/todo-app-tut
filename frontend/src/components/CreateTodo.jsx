// this component sends a POST request to our `server` using axios.
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateTodo = () => {
  // declare `data` with `useState` hook
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    // update `data` when input changes
    // `...data` creates a shallow copy of `data`, and updates it with the attributes `[e.target.name]: e.target.value`
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page from reloading when submit button is clicked, allowing us to custom handle form submission 

    // send POST request to server via axios.
    const postData = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/todo", data);
        // reset `data` to initial state
        setData({ title: "", description: "" });
        // redirect back to home page
        console.log(res);
        // NEVER CALL HOOKS INSIDE A NESTED FUNCTION!!
        // const navigate = useNavigate(); 
        navigate("/");
      } catch (err) {
        console.log("Failed to create todo");
        console.log(err);
      };
    };
    
    postData();
  };

  return (
    <div className="CreateTodo">
      {/* back button */}
      <Link to="/" className="back-link">back</Link>

      {/* form */}
      <div className="contents">
        <form onSubmit={handleSubmit} className="form-container">
          {/* title input */}
          <input 
          type="text" 
          placeholder="title" 
          className="input" 
          name="title"
          onChange={handleChange}/>

          {/* description input */}
          <input 
          type="text" 
          placeholder="description" 
          className="input"
          name="description"
          onChange={handleChange}/>

          <button 
          type="submit" className="button">create todo</button>
        </form>
        </div>
    </div>
  );
};

export default CreateTodo;