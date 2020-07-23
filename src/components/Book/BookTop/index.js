import React from "react";
import BookCover from '../BookCover';
import BookShelfChanger from '../BookShelfChanger';
import PropTypes from 'prop-types';

function BookTop(props) {
    return (
        <div className="book-top">
            <BookCover imageURL={props.bookCoverURL}/>
            <BookShelfChanger updateShelf={props.updateShelf} currentShelf={props.currentShelf}/>
        </div>
    )
}

BookTop.propTypes = {
    bookCoverURL: PropTypes.object,
    updateShelf: PropTypes.func,
    currentShelf: PropTypes.string
}

export default BookTop;