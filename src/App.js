import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './components/BookCase'
import * as BookUtils from './BookUtils'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount = () => {
    if(this.state.newBook) {
      this.refreshAllBooks();
    }
  }

  refreshAllBooks = () => {
    BooksAPI
      .getAll()
      .then((list) => {
        this.setState({
          books: BookUtils.sortAllBooks(list),
          newBook:false
        });
      });
  }

  render() {
    return (
      <BookCase books={this.state.books} onRefreshAllBooks={this.refreshAllBooks} />
    )
  }
}

export default BooksApp
