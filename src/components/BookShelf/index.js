import React from "react";
import Book from '../Book';
import PropTypes from 'prop-types';

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.isLoading
              ? "Loading ..."
              : this.props.books.map((book, index) => {
                  return (
                    <li key={index}>
                      {/* TODO: Display all authors name */}
                      <Book
                        bookCoverURL={book.imageLinks}
                        title={book.title}
                        authorName={book.authors[0]}
                        updateShelf={(shelf) =>
                          this.props.updateShelf(book, shelf)
                        }
                        currentShelf={book.shelf}
                      />
                    </li>
                  );
                })}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  books: PropTypes.array,
  shelfTitle: PropTypes.string,
  updateShelf: PropTypes.func,
  isLoading: PropTypes.bool
}

export default BookShelf;
