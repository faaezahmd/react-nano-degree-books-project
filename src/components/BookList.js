import React from "react";
import { Link } from 'react-router-dom';
import BookShelf from "./BookShelf";
import PropTypes from 'prop-types';

class BookList extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-header">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          
        </div>
        <div className="list-books-content">
          <BookShelf
            isLoading={this.props.isLoading}
            shelfTitle="Currently Reading"
            books={this.props.currentlyReading}
            updateShelf={this.props.updateShelf}
          />
          <BookShelf
            isLoading={this.props.isLoading}
            shelfTitle="Want to Read"
            books={this.props.wantToRead}
            updateShelf={this.props.updateShelf}
          />
          <BookShelf
            isLoading={this.props.isLoading}
            shelfTitle="Read"
            books={this.props.read}
            updateShelf={this.props.updateShelf}
          />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>
              Add a book
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array,
  shelfTitle: PropTypes.string,
  updateShelf: PropTypes.func,
  isLoading: PropTypes.bool
}

export default BookList;
