import ShowTodoList from "../components/ShowTodoList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <ShowTodoList />
    </div>
  );
};

export default HomePage;