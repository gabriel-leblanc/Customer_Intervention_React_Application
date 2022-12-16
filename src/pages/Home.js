import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";

export const getInterventions = async (setInterventions) => {
    let my_token = localStorage.getItem("token");
    try {
        const res = await axios.get("/interventions", {
            headers: {
                Authorization: "Bearer " + my_token,
            },
        });
        console.log("res= " + res);
        setInterventions(res.data);
    } catch (error) {
        console.warn("[getInterventions] error:", error);
    }
};
const Home = () => {
    const navigate = useNavigate();
    const [interventions, setInterventions] = useState(null);
    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            navigate("/form"); // Omit optional second argument
        } catch (error) {
            navigate("/error", { state: { message: "Failed to submit form" } }); // Pass optional second argument
        }
    };
    useEffect(() => {
        console.log("interventions changed:", interventions);
    }, [interventions]);

    useEffect(() => {
        getInterventions(setInterventions);
    }, []);

    return (
        <>
            <Logo />
            <Title>Interventions</Title>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <div>
                    <button
                        style={{
                            backgroundColor: "steelblue",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        onClick={() => navigate("/form")}
                    >
                        Make an intervention
                    </button>
                </div>
                <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => navigate("/login")}
                >
                    Log out
                </button>
            </div>
            {interventions?.map((el, i) => {
                const { id, customer, building, elevator } = el;
                return (
                    id && (
                        <div
                            style={{
                                backgroundColor: "steelblue",
                                color: "white",
                                margin: 10,
                            }}
                        >
                            <label>
                                Compagny name:{" "}
                                {customer && customer.company_name}
                                <br />
                                Building ID: {building && building}
                                <br />
                                Elevator ID: {el.elevator && el.elevator}
                                <br />
                                {id && "Current ID: " + id}
                                <br />
                                Intervention status: {el.status && el.status}
                                <br />
                                Customer ID: {customer && customer.id}
                                {customer &&
                                    customer.interventions.map((el, i) => {
                                        return (
                                            <p key={i}>
                                                {" "}
                                                {el.building && (
                                                    <span>
                                                        {el.building.address}
                                                    </span>
                                                )}
                                            </p>
                                        );
                                    })}
                            </label>
                        </div>
                    )
                );
            })}
            {/* <Nav /> */}
        </>
    );
};

export default Home;

/*

author
: 
10
battery
: 
2
building
: 
2
column
: 
null
createdAt
: 
1658953339000
customer
: 

elevator
: 
null
employee
: 
null
id
: 
1
intervention_ended
: 
"2022-07-28 18:24:56"
intervention_started
: 
"2022-07-28 18:24:23"
report
: 
"test"
result
: 
"Incomplete"
status
: 
"Completed"
updatedAt
: 
1660244497000

*/
