// main thingy
import HomePage from "./pages/HomePage";
import TodoForm from "./pages/TodoForm";

// import React routers
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// set up routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-todo" element={<TodoForm />} />
    </Route>
  )
)

// there will be a button that, upon clicking, sends a GET request to the form. (at http://localhost:3000/create-todo). This form has a SUBMIT button, which when clicked, will send a POST request to http://localhost:8000/api/todo
function App() {
  return <RouterProvider router={router} />
}

export default App;