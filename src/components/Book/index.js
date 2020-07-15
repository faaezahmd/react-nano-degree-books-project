import React from 'react';
import BookTop from './BookTop';

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

export default Book;