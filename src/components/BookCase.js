import React, {Component} from 'react'
import BookShelf from './BookShelf';
import {Link} from "react-router-dom";

class BookCase extends Component{
  state = {}

  componentDidMount = () => {
    this
      .props
      .onRefreshAllBooks();
  }

  updateShelves = () => {
    //Updates shelf state to contain books in each
    const newCurrent = {
      name: "Currently Reading",
      books: this
        .props
        .books
        .filter(book => book.shelf === "currentlyReading")
    };

    const newWantToRead = {
      name: "Want to Read",
      books: this
        .props
        .books
        .filter(book => book.shelf === "wantToRead")
    };

    const newRead = {
      name: "Read",
      books: this
        .props
        .books
        .filter(book => book.shelf === "read")
    };

    return ([newCurrent, newWantToRead, newRead]);
  }

  render() {
    let shelves = [];
    if(this.props.books && this.props.books.length) {
      shelves = this.updateShelves();
    }

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {shelves && shelves.map((shelf) => (<BookShelf
                key={shelf.name}
                shelf={shelf}
                onChangeShelf={this.props.onChangeShelf}
              />))}
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a Book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BookCase;
