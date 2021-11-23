import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import BookingCar from './pages/BookingCar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import 'antd/dist/antd.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/bookingcar" exact component={BookingCar} />
            </BrowserRouter>
        </div>
    )
}

export default App
