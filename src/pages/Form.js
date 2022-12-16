import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Autocomplete,
    Container,
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";
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

const getCurrentBuildings = async (setBuildings) => {
    let my_token = localStorage.getItem("token");

    try {
        const res = await axios.get("/buildings/current", {
            headers: {
                Authorization: "Bearer " + my_token,
            },
        });
        console.log("res.data:", res.data);

        setBuildings(res.data);
    } catch (error) {
        console.log("[getCurrentBuildings] error:", error);
    }
};

const Form = () => {
    const getCurrentBatteries = async (setBatteries) => {
        let my_token = localStorage.getItem("token");
        try {
            const res = await axios.get("/buildings/1/batteries", {
                headers: {
                    Authorization: "Bearer " + my_token,
                },
            });
            console.log("res.data:", res.data);

            setBatteries(res.data);
        } catch (error) {
            console.warn("[getCurrentBatteries] error:", error);
        }
    };
    const navigate = useNavigate();
    const [interventions, setInterventions] = useState(null);

    const [buildings, setBuildings] = useState(null);
    const [buildingID, setBuildingID] = useState(null);

    const [batteries, setBatteries] = useState(null);
    const [batteryID, setBatteryID] = useState(null);

    const [data, setData] = useState([]);
    const [getCounty, setCounty] = useState([]);
    const [getState, setState] = useState([]);

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        console.log("TEST MARIE =============================");
        setBuildingID(event.target.value);

        getCurrentBatteries();
    };
    const handleChangeBattery = (event) => {
        setBatteryID(event.target.value);
    };

    const [newListCustomer, setListCustomer] = useState([]);

    const country = [...new Set(data.map((item) => item.country))];

    const handleCountry = (event, value) => {
        let states = data.filter((state) => state.country === value);
        states = [...new Set(states.map((item) => item.name))];
        states.sort();

        setState(states);
    };

    useEffect(() => {
        console.log("in here");
        getCurrentBuildings(setBuildings);
    }, []);
    useEffect(() => {
        console.log("buildings:", buildings);
    }, [buildings]);
    useEffect(() => {
        console.log("buildingID:", buildingID);
    }, [buildingID]);

    useEffect(() => {
        getInterventions(setInterventions);
    }, []);

    useEffect(() => {
        console.log("in here");
        getCurrentBatteries(setBuildings);
    }, []);
    useEffect(() => {
        console.log("batteries:", batteries);
    }, [batteries]);
    useEffect(() => {
        console.log("batteryID:", batteryID);
    }, [batteryID]);

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

    const array = [10, 20, 30];

    return (
        <Container>
            <Logo />
            <Title>Make an intervention</Title>
            {/* <Typography>Dependent Select Field</Typography> */}
            <br />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    Building ID
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={buildingID}
                    label="Age"
                    onChange={handleChange}
                >
                    {buildings &&
                        buildings.map((building) => {
                            console.log("building is:", building);

                            return (
                                <MenuItem value={building.id}>
                                    Building ID #{building.id}
                                </MenuItem>
                            );
                        })}
                </Select>
                <br />
                {/* <InputLabel id="battery-label">Battery ID</InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={batteryID}
                    label="Age"
                    onChange={handleChangeBattery}
                >
                    {batteries &&
                        batteries.map((battery) => {
                            console.log(
                                "handleChangeBattery",
                                handleChangeBattery
                            );
                            console.log("battery is:", battery);

                            return (
                                <MenuItem value={battery.id}>
                                    battery is: {battery.id}
                                </MenuItem>
                            );
                        })}
                </Select>
            </FormControl>

            {/* <Autocomplete
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
            /> */}
            {/* <Autocomplete /> */}
        </Container>
    );
};

export default Form;
