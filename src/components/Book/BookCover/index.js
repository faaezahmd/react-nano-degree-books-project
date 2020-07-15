import React from 'react';
import PropTypes from 'prop-types';

function BookCover(props) {
    return(
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.imageURL}")` }}></div>
    )
}

BookCover.propTypes = {
    imageURL: PropTypes.string
}

export default BookCover;