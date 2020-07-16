import React from "react";
import { Link } from 'react-router-dom';
import Book from "./Book";
import BookShelf from "./BookShelf";

class BookList extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-header">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Link to="/search">
            <svg height="26" viewBox="0 0 515.558 515.558" width="26" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333C418.889 93.963 324.928.002 209.444.002S0 93.963 0 209.447s93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564L378.344 332.78zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/></svg>
          </Link>
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
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BookList;
