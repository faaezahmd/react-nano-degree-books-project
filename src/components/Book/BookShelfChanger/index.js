import React from 'react';
import PropTypes from 'prop-types';

function BookShelfChanger(props) {
    return (
        <div className="book-shelf-changer">
            <select defaultValue={props.currentShelf} onChange={(event) => props.updateShelf(event.currentTarget.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookShelfChanger.propTypes = {
    currentShelf: PropTypes.string,
    updateShelf: PropTypes.func
}

export default BookShelfChanger;