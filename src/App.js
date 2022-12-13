import axios from "axios";
import "./App.css";

function App() {
    const handleAxios = () => {
        axios
            .get("https://java-api.codeboxxtest.xyz/users", {
                headers: {
                    token:
                        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo",
                },
            })
            .then(function(response) {
                console.log(response);
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src="img/logos/logo-rocket-elevators.png" alt="logo" />
                <button onClick={handleAxios}>Call Axios API</button>
            </header>
        </div>
    );
}

export default App;
