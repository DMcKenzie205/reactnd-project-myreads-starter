import React, { Component } from 'react';
import Books from './book'

const bookshelves = [
    'Currently Reading', 'Want to Read', 'Read'
]

class BookShelf extends Component {

    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                {bookshelves.map((shelf) => (
                    <section key={shelf}>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <Books/>
                                </ol>
                            </div>
                        </div>
                    </section>
                ))}
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
            
        )
        

    }
}

export default BookShelf