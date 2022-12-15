import React, { useState } from "react";
import Logo from "../components/Logo";
import Title from "../components/Title";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = (props) => {
    const [inputValue, setValue] = useState("Please entreer you Email");
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (e) => {
        console.log("e", e);
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

                {/* <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                /> */}

                <br />

                {/* <label htmlFor="password">Password</label>
                <input type="password" value="" id="password" name="password" /> */}

                <Button type="submit">Login</Button>

                {/* <a href="#">Forget password ?</a> */}
            </Form>
        </>
    );
};

export default Login;
