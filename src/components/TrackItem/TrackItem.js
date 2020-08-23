import React from "react";
import PropTypes from 'prop-types';


export default class TrackItem extends React.Component {
    render() {
        return (
            <li className="trackItem">
                <a href={this.props.link}>{this.props.name}</a>
            </li>
        )
    }

}

TrackItem.propTypes  = {
    name : PropTypes.string,
    link: PropTypes.string,
    duration: PropTypes.number,
    popularity: PropTypes.number,
    albumName : PropTypes.string,
    albumSpotifyLink : PropTypes.string,
    artistName : PropTypes.string,
    artistSpotifyLink: PropTypes.string
}
