import { Switch, BrowserRouter as Router, Route,useParams } from "react-router-dom";
import './App.css';
import Home from './Components/payroll-form/payroll-form'
import Add from './Components/Add-Employee-form/add-employee'
import Header from './Header'


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
            <Route path="/home"><Home /></Route>
            <Route path="/add"><Add /></Route>
            <Route exact path="/add-employee/:id"><Add /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

