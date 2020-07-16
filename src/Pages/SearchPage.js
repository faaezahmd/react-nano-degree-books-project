import React from "react";
import { Link } from 'react-router-dom';
import { debounce } from 'debounce';
import Book from "../components/Book";

class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-page">
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input 
                type="text" 
                placeholder="Search by title or author"
                defaultValue={this.props.search.query}
                onChange={(event) => this.props.setSearchQuery(event)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                (this.props.search.books.length > 0) ?
                  this.props.search.books.map((book, index) => {
                    return (
                      <li key={index}>
                        {/* TODO: Display all authors name */}
                        <Book
                          bookCoverURL={book.imageLinks.smallThumbnail}
                          title={book.title}
                          authorName={book.authors && book.authors.join(', ')}
                          updateShelf={(shelf) =>
                            this.props.updateShelf(book, shelf)
                          }
                          currentShelf={book.shelf}
                        />
                      </li>
                    );
                  })
                  :
                  null
              }
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
