import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Title from "./components/Title ";
import Form from "./pages/Form";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { Routes, Route, Outlet, Link } from "react-router-dom";
// token -> page login

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route path="home" element={<Home />} />
                    <Route index element={<Login />} />
                </Route>
                <Route path="/login">
                    <Route path="home" element={<Login />} />
                    <Route index element={<Login />} />
                </Route>
                <Route path="/form">
                    <Route path="form" element={<Form />} />
                    <Route index element={<Form />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
