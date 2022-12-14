import React from "react";
import Title from "../components/Title";

const Home = (props) => (
    <div>
        <Title>Home</Title>
        {props.children}
    </div>
);

export default Home;
