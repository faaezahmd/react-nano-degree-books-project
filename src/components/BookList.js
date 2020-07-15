import React from "react";
import Book from "./Book";
import BookShelf from "./BookShelf";

class BookList extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
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
