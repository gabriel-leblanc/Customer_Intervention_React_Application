import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Title from "./components/Title ";
// import Form from "./pages/Form";
import Login from "./pages/Login";
// token -> page login

function App() {
    return (
        <div className="App">
            {/*             <header className="App-header">
                <img src="img/logos/logo-rocket-elevators.png" alt="logo" />
            </header> */}
            <Login />
        </div>
    );
}

export default App;
