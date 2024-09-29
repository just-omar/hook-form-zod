import "./App.css";
import Form from "./components/Form";
import fetchUsers from "./lib/fetchUsers";

fetchUsers();

function App() {
  return (
    <>
      <Form />
    </>
  );
}

export default App;
