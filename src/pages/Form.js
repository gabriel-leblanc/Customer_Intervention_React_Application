import React from "react";
import axios from "axios";

import Title from "../components/Title";

const Form = () => {
    const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lcjFAYnVzaW5lc3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9qYXZhLWFwaS5jb2RlYm94eHRlc3QueHl6L2F1dGhlbnRpY2F0ZSJ9.QbJsJ-MZXWieFf_fcAkNWI3S9Skqd-yFVF3S2h-uhfo";
    const handleAxios = () => {
        axios
            // .get(
            //     "https://java-api.codeboxxtest.xyz/authenticate?email=customer1@business.com&password=password123",
            //     {
            //         headers: {
            //             Authorization: "Bearer " + token,
            //         },
            //     }
            // )
            .post(
                "https://java-api.codeboxxtest.xyz/authenticate?email=customer1%40business.com&password=password123",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <>
            <Title>Form</Title>
            <button onClick={handleAxios}>Submit Axios</button>
        </>
    );
};

export default Form;
