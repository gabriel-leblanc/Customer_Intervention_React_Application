import React, { useEffect } from "react";
import Title from "../components/Title";

const Home = (props) => {
    useEffect(() => {
        console.log(
            "Inside home page, token is:",
            localStorage.getItem("token")
        );
    }, []);

    return (
        <div>
            <Title>Home</Title>
            {props.children}
        </div>
    );
};

export default Home;
