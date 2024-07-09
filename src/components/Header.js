import React from "react";

function Header(props) {
    console.log(props)
    return (
        <h1>Hello from Header, {props.name}, {props.color}
        </h1>
    );
};

export default Header;