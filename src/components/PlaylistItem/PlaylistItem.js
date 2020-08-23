import React from "react";
import PropTypes from 'prop-types';

export default class PlaylistItem extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.link}>{this.props.name}</a>
                <p>{this.props.tracksCount}</p>
                <p>{this.props.ownerName}</p>
                <img src={this.props.imgLink[0]} alt={this.props.name}/>
            </li>
        )
    }
}
PlaylistItem.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    ownerName: PropTypes.string,
    tracksCount: PropTypes.number,
    imgLink: PropTypes.array
}
