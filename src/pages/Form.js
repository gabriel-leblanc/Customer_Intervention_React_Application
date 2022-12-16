import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";

const authenticateUser = async (setToken) => {
    try {
        const res = await axios.post(
            "/authenticate?email=customer1@business.com&password=password123"
        );

        setToken(res.data.access_token);
    } catch (error) {
        console.warn("[authenticateUser] error:", error);
    }
};

const getInterventions = async (setInterventions) => {
    let my_token = localStorage.getItem("token");
    try {
        const res = await axios.get("/interventions", {
            headers: {
                Authorization: "Bearer " + my_token,
            },
        });

        setInterventions(res.data);
    } catch (error) {
        console.warn("[getInterventions] error:", error);
    }
};
const Form = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [interventions, setInterventions] = useState(null);

    useEffect(() => {
        console.log("token changed:", token);
        localStorage.setItem("token", token);
    }, [token]);

    useEffect(() => {
        console.log("interventions changed:", interventions);
    }, [interventions]);

    useNavigate(() => {});
    return (
        <>
            <Logo />
            <Title>Form</Title>
            <button onClick={() => authenticateUser(setToken)}>
                Submit Axios - set token
            </button>
            <br />
            <button
                onClick={() => {
                    console.log("my token is:", token);
                }}
            >
                Test token - my token is
            </button>
            <br />
            <button
                onClick={() => {
                    console.log("my interventions is:", interventions);
                }}
            >
                Test interventions
            </button>
            <br />
            <button onClick={() => getInterventions(token, setInterventions)}>
                Get interventions test
            </button>
            <br />
            <button
                onClick={() => {
                    navigate("/login");
                }}
            >
                go to Login
            </button>
        </>
    );
};

export default Form;
