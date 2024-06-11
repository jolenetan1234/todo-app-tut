import ShowTodoList from "../components/ShowTodoList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <ShowTodoList />
      <Link to="/create-todo">Create new todo</Link>
    </div>
  );
};

export default HomePage;