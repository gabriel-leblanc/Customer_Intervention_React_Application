import React from "react";

const Title = (props) => (
    <h1 style={{ backgroundColor: "steelblue", color: "white" }}>
        {props.children}
    </h1>
);

export default Title;
