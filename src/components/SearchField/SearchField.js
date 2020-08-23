import React from "react";
import PropTypes from 'prop-types';

export default class SearchField extends React.Component {
    render() {
        return (
            <input className={this.props.className}
                   type={this.props.title}
                   title={this.props.title}
                   onChange={this.props.handleChange}
                   value={this.props.value}
                   />
        )
    }
}

SearchField.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}
