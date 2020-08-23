import React from "react";
import Button from "../Button/Button";

export default class SearchButton extends React.Component {
    render() {
        return (
            <Button onClick={this.props.onClick} type="submit" title={'Search'} />
        )
    }
}
