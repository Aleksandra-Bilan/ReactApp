import React from "react";
import PropTypes from 'prop-types';

export default class ArtistItem extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.link}>{this.props.title}</a>
                <p>{this.props.genre}</p>
                <img src={this.props.imgLink[0]} alt={this.props.title}/>
            </li>
        )
    }
}
ArtistItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.string),
    imgLink: PropTypes.array
}
