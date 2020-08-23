import React from "react";
import Button from "../Button/Button";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <a href="http://localhost:3000">
                    <Button title={'HOME'}/>
                </a>
            </header>
        )
    }
}
