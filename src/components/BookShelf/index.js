import React from "react";
import Book from '../Book';

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.isLoading
              ? "Loading ..."
              : this.props.books.map((book) => {
                  return (
                    <li>
                      {/* TODO: Display all authors name */}
                      <Book
                        bookCoverURL={book.imageLinks.smallThumbnail}
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

export default BookShelf;
