import React, { Component } from 'react';

import Books from './book';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../src/BooksAPI'

class Search extends Component {

    state = {
        query: '',
        searchedBooks: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.updateNewBooks(query)
    }

    updateNewBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchedBooks) => {
            this.setState({ searchedBooks: searchedBooks })
            })
        } else {
            this.setState({ searchedBooks: [] })
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
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                        {this.state.searchedBooks.map(searchedBook => (
                            <li key={searchedBook.id}>
                                <Books book={searchedBook}/>
                            </li>
                        ))}
                </div>
            </div>
        ) 
    }
}

export default Search