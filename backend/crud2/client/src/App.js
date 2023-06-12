import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  {Books}  from "./pages/Books";
import  {Update}  from "./pages/Update";
import {Add}  from "./pages/Add";
import "./style.css";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
