import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/payroll-form/payroll-form'
import Add from './Components/Add-Employee-form/add-employee'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
