import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Book from "./components/Book";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { update, getAll } from "./BooksAPI";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";

class BooksApp extends React.Component {
  state = {
    isLoading: true,
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  componentDidMount() {
    getAll().then((books) => {
      this.setState({
        isLoading: false,
        books,
      });
    });
  }

  updateShelf = (book, shelf) => {
    if (shelf === "none") return;

    this.setState(
      {
        isLoading: true,
      },
      () => {
        update(book, shelf).then((_) => {
          getAll().then((books) => {
            this.setState({
              isLoading: false,
              books,
            });
          });
        });
      }
    );
    // console.log(event.currentTarget.value);
  };

  render() {
    const currentlyReading = this.state.books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = this.state.books.filter(
      (book) => book.shelf === "wantToRead"
    );
    const read = this.state.books.filter((book) => book.shelf === "read");

    // console.log(currentlyReading)
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/search" render={() => <SearchPage />} />
            <Route
              exact
              path="/"
              render={() => (
                <MainPage
                  isLoading={this.state.isLoading}
                  updateShelf={this.updateShelf}
                  currentlyReading={currentlyReading}
                  wantToRead={wantToRead}
                  read={read}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BooksApp;
