import React, { Component } from 'react';

import Books from './book';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../src/BooksAPI'

class Search extends Component {

    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.updateNewBooks(query)
    }

    updateNewBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    this.setState({ books: [] })
                } else {
                    this.setState({ books: books })
                }
            })
        } else {
            this.setState({ books: [] })
        }
    }

    render() {
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={(ev) => this.updateQuery(ev.target.value)}
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                        {this.state.books.map(book => (
                            <li key={book.id}>
                                <Books { ...book } changeShelf={this.props.changeShelf}/>
                            </li>
                        ))}
                </div>
            </div>
        ) 
    }
}

export default Search