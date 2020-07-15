import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './components/Book';
import { update, getAll } from './BooksAPI';

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
    showSearchPage: false
  }

  componentDidMount() {
    getAll()
      .then(books => {
        this.setState({
          isLoading: false,
          books
        })
      });
  }

  updateShelf = (book, shelf) => {
    if (shelf === 'none') 
      return;
    
    this.setState({
      isLoading: true
    }, () => {
      update(book, shelf)
      .then(_ => {
        getAll()
          .then(books => {
            this.setState({
              isLoading: false,
              books
            })
          });
      })
    })
    // console.log(event.currentTarget.value);
  }

  render() {
    const currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = this.state.books.filter(book => book.shelf === 'wantToRead');
    const read = this.state.books.filter(book => book.shelf === 'read');

    // console.log(currentlyReading)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        this.state.isLoading ?
                          'Loading ...'
                          :
                          currentlyReading.map(book => {
                            return (
                              <li>
                                {/* TODO: Display all authors name */}
                                <Book bookCoverURL={book.imageLinks.smallThumbnail} title={book.title} authorName={book.authors[0]} updateShelf={(shelf) => this.updateShelf(book, shelf)} currentShelf={book.shelf}/>
                              </li>
                            )
                          })
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        this.state.isLoading ?
                          'Loading ...'
                          :
                          wantToRead.map(book => {
                            return (
                              <li>
                                {/* TODO: Display all authors name */}
                                <Book bookCoverURL={book.imageLinks.smallThumbnail} title={book.title} authorName={book.authors[0]} updateShelf={(shelf) => this.updateShelf(book, shelf)}  currentShelf={book.shelf}/>
                              </li>
                            )
                          })
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        this.state.isLoading ?
                          'Loading ...'
                          :
                          read.map(book => {
                            return (
                              <li>
                                {/* TODO: Display all authors name */}
                                <Book bookCoverURL={book.imageLinks.smallThumbnail} title={book.title} authorName={book.authors[0]} updateShelf={(shelf) => this.updateShelf(book, shelf)} currentShelf={book.shelf}/>
                              </li>
                            )
                          })
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
