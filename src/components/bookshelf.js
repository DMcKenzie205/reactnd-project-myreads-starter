import React, { Component } from 'react';

import Books from './book'

class BookShelf extends Component {

    render() {
        const { title, books } = this.props
        
        return (    
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}>
                                <Books {...book } 
                                changeShelf={this.props.changeShelf}
                                currentShelf={book.shelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>                        
        )
    }
}

export default BookShelf