import React, {Component} from 'react'
import Changer from "./Changer";

class Book extends Component {
  state = {
    shelfSelection: this.props.book.shelf || "none"
  }

  render() {

    const authors = this.props.book.authors && this
      .props
      .book
      .authors
      .join(' | ');

    let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: url
              }}>
            </div>
            <Changer/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;
