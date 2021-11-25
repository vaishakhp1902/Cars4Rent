import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BookingCar from "./pages/BookingCar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Redirect } from "react-router";

import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProtectedRoute path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <ProtectedRoute path="/bookingcar" exact component={BookingCar} />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if(localStorage.getItem('user')) {
    return(<Route {...props}/>)
  }
  else{
    return <Redirect to='/login'/>
  }
}
