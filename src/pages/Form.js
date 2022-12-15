import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import Logo from "../components/Logo";

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

const getInterventions = async (token, setInterventions) => {
    try {
        const res = await axios.get("/interventions", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });

        setInterventions(res.data);
    } catch (error) {
        console.warn("[getInterventions] error:", error);
    }
};

const Form = () => {
    const [token, setToken] = useState("");
    const [interventions, setInterventions] = useState(null);

    useEffect(() => {
        console.log("token changed:", token);
    }, [token]);

    useEffect(() => {
        console.log("interventions changed:", interventions);
    }, [interventions]);

    return (
        <>
            <Logo />
            <Title>Form</Title>
            <button onClick={() => authenticateUser(setToken)}>
                Submit Axios
            </button>
            <br />
            <button
                onClick={() => {
                    console.log("my token is:", token);
                }}
            >
                Test token
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
        </>
    );
};

export default Form;
