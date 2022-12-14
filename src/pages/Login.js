import React from "react";
import Title from "../components/Title";

const Login = (props) => (
    <div>
        <Title>Login</Title>
        {props.children}
    </div>
);

export default Login;
