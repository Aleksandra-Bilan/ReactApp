import React from "react";
import PropTypes from 'prop-types';

export default class AlbumItem extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.link}>{this.props.name}</a>
                <p>{this.props.totalTracks}</p>
                <p>{this.props.releaseDate}</p>
                <img src={this.props.imgLink[0]} alt={this.props.name}/>
            </li>
        )
    }
}
AlbumItem.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    releaseDate: PropTypes.string,
    totalTracks: PropTypes.number,
    imgLink: PropTypes.array,
    listOfArtists : PropTypes.array
}
