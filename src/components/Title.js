import React from "react";

const Title = (props) => (
    // <div>
    //     <image href="../../public/img/logos/logo-rocket-elevators"></image>
    // </div>

    <h1 style={{ backgroundColor: "red", color: "white" }}>{props.children}</h1>
);

export default Title;
