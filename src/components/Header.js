import React from "react";

function Header(props) {
    console.log(props)
    return (
        <h1>Hello from {props.name}, the color is {props.color}
        </h1>
    );
};

export default Header;