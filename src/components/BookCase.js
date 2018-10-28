import React, { Component } from 'react';
import BookShelf from './bookshelf'

class BookCase extends Component {

    // Helper Function
    getBooksByStatus(status) {
        const { books } = this.props
        return books.filter(book => book.shelf === status)
    }

    // Book status getters
    get booksToRead() {
        return this.getBooksByStatus('wantToRead')
    }

    get booksHaveRead() {
        return this.getBooksByStatus('Read')
    }

    get booksCurrentlyReading() {
        return this.getBooksByStatus('currentlyReading')
    }    


    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf title='Books I am Reading' books={this.booksCurrentlyReading}/>
                    <BookShelf title='Books I Want to Read' books={this.booksToRead}/>
                    <BookShelf title='Books I have Read' books={this.booksHaveRead}/>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BookCase
