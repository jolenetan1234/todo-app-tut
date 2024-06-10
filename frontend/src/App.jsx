// main thingy
import HomePage from "./pages/HomePage";

// set up routes

// there will be a button that, upon clicking, sends a GET request to the form. (at http://localhost:3000/create-todo). This form has a SUBMIT button, which when clicked, will send a POST request to http://localhost:8000/api/todo
function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App;