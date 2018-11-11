import React, {Component} from 'react'
import BookShelf from './BookShelf';

class BookCase extends Component{
  state = {}

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true})}>Add a Book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default BookCase;
