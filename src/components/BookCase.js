import React, { Component } from 'react';

import BookShelf from './bookshelf'
import { Link } from 'react-router-dom';

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
        return this.getBooksByStatus('read')
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
                    <BookShelf 
                        title='Books I am Reading' 
                        books={this.booksCurrentlyReading} 
                        changeShelf={this.props.changeShelf}
                    />
                    <BookShelf 
                        title='Books I Want to Read' 
                        books={this.booksToRead} 
                        changeShelf={this.props.changeShelf}
                    />
                    <BookShelf 
                        title='Books I have Read' 
                        books={this.booksHaveRead} 
                        changeShelf={this.props.changeShelf}
                    />
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookCase