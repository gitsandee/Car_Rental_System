import './App.css';
import CounterFunction from './components/CounterFunction';
import Header from './components/header';

import Images from './components/image';
import AllVehicles from './components/AllVehicles';
import ViewVehicle from './components/ViewVehicle';

import Footter from './components/footer';
import {BrowserRouter as Router, Route} from "react-router-dom"
import EditVehicle from './components/EditVehicle';
import AddVehicle from './components/AddVehicle';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Images/>
       
        <Route path="/add" exact component={AddVehicle} />      
        <Route path="/" exact component={AllVehicles} /> 
        <Route path="/viewvehicle/:id" exact component={ViewVehicle} /> 
        <Route path="/update/:id" exact component={EditVehicle} />
          
        <Footter/> 
      </div>
    </Router>
  );
}

export default App;

