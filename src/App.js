import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Title from "./components/Title ";
// import Form from "./pages/Form";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { Routes, Route, Outlet, Link } from "react-router-dom";
// token -> page login

function App() {
    return (
        <div className="App">
            {/*             <header className="App-header">
                <img src="img/logos/logo-rocket-elevators.png" alt="logo" />
            </header> */}
            <Routes>
                <Route path="/">
                    <Route path="home" element={<Home />} />
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
