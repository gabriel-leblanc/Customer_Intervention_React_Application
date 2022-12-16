import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = (props) => {
    const navigate = useNavigate();

    (
        <button
            onClick={() => {
                navigate("/login");
            }}
        >
            go to login
        </button>
    ),
        (
            <button
                onClick={() => {
                    navigate("/home");
                }}
            >
                go to home
            </button>
        ),
        (
            <button
                onClick={() => {
                    navigate("/form");
                }}
            >
                go to form
            </button>
        );
};

export default Nav;
