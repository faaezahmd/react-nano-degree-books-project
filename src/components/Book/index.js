import React from 'react';
import BookTop from './BookTop';
import PropTypes from 'prop-types';

class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <BookTop bookCoverURL={this.props.bookCoverURL} updateShelf={this.props.updateShelf} currentShelf={this.props.currentShelf}/>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authorName}</div>
            </div>
        )
    }
}

Book.propTypes = {
    bookCoverURL: PropTypes.string,
    updateShelf: PropTypes.func,
    currentShelf: PropTypes.string,
    title: PropTypes.string,
    authorName: PropTypes.string
}

export default Book;