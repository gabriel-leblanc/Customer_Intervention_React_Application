import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../components/Logo";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const authenticateUser = async (navigate) => {
    try {
        const res = await axios.post(
            "/authenticate?email=customer1@business.com&password=password123"
        );
        console.log("res is:", res.data.access_token);
        localStorage.setItem("token", res.data.access_token);
        navigate("/home");
    } catch (error) {
        console.warn("[authenticateUser] error:", error);
    }
};

const Login = (props) => {
    const navigate = useNavigate();
    const [inputValue, setValue] = useState("Please enter your Email");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("e", e);

        authenticateUser(navigate);
    };

    console.log(inputValue);
    return (
        <>
            <Logo />

            <Title>Login</Title>
            <Form className="login-page" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="emailInput">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordInput">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <br />
                <Button style={{ bsBtnHoverBg: "steelblue" }} type="submit">
                    Login
                </Button>
            </Form>
        </>
    );
    <button href="Form.js"></button>;
};

export default Login;
