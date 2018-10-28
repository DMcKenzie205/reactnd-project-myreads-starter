import React, { Component } from 'react';
import BookShelf from './bookshelf'

class BookCase extends React.Component {

    // Helper Function
    getBooksByStatus(status) {
        const { books } = this.props
        return books.filter(book => book.shelf === status)
    }

    // Book status getters
    get booksToRead() {
        return this.getBooksByStatus('toRead')
    }

    get booksHaveRead() {
        return this.getBooksByStatus('Read')
    }

    get booksCurrentlyReading() {
        return this.getBooksByStatus('currentlyReading')
    }    


    render() {
        return (
            <div>
                <BookShelf title='Books I am Reading' books={this.booksCurrentlyReading}/>
                <BookShelf title='Books I Want to Read' books={this.booksToRead}/>
                <BookShelf title='Books I have Read' books={this.booksHaveRead}/>
 
            </div>
        )
    }
}

export default BookCase
