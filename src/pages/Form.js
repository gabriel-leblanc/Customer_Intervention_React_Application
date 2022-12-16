import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Autocomplete, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getInterventions } from "./Home";
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

const Form = () => {
    const navigate = useNavigate();
    const [interventions, setInterventions] = useState(null);
    const [data, setData] = useState([]);
    const [getCounty, setCounty] = useState([]);
    const [getState, setState] = useState([]);

    const [newListCustomer, setListCustomer] = useState([]);

    const country = [...new Set(data.map((item) => item.country))];

    const handleCountry = (event, value) => {
        let states = data.filter((state) => state.country === value);
        states = [...new Set(states.map((item) => item.name))];
        states.sort();

        setState(states);
    };

    useEffect(() => {
        axios
            .get(
                "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
            )
            .then((response) => {
                // console.log(response);
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        getInterventions(setInterventions);
    }, []);

    useEffect(() => {
        let myThings = [];
        interventions &&
            interventions.map((el, i) => {
                el &&
                    el.customer &&
                    el.customer.interventions.map((e, j) => {
                        e.building?.address !== undefined &&
                            console.log(
                                i,
                                j,
                                "interventions building number",
                                e.building?.address
                            );
                    });
            });

        setListCustomer(myThings);
    }, [interventions]);

    useEffect(() => {
        console.warn(newListCustomer);
    }, [newListCustomer]);

    return (
        <Container>
            <Logo />
            <Title>Make an intervention</Title>

            <Autocomplete
                onChange={(event, value) => handleCountry(event, value)}
                id="country"
                getOptionLabel={(country) => `${country}`}
                options={country}
                isOptionEqualToValue={(option, value) =>
                    option.name === value.name
                }
                noOptionsText={"No Available Data"}
                renderOption={(props, country) => (
                    <Box
                        component="li"
                        {...props}
                        key={country}
                        value={getCounty}
                    >
                        {country}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField {...params} label="Search" />
                )}
            />
            <Autocomplete
                id="city"
                getOptionLabel={(getState) => `${getState}`}
                options={getState}
                isOptionEqualToValue={(option, value) =>
                    option.name === value.name
                }
                noOptionsText={"No Available User"}
                renderOption={(props, getState) => (
                    <Box component="li" {...props} key={getState}>
                        {getState}
                    </Box>
                )}
                renderInput={(params) => <TextField {...params} label="City" />}
            />
            {/* <Autocomplete /> */}
        </Container>
    );
};

export default Form;
