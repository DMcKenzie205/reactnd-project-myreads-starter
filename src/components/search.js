import React, { Component } from 'react';

import Books from './book';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../src/BooksAPI'

class Search extends Component {

    state = {
        query: '',
        newBooks: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.updateNewBooks(query)
    }

    // Search query function created with help from Maeva Nap Study Jam
    // https://www.youtube.com/watch?reload=9&v=i6L2jLHV9j8&t=0s&list=PLtm2isCkmjWexKoU0BfX_sxh0Wjtw6iou&index=6
    updateNewBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((newBooks) => {
                if (newBooks.error) {
                    this.setState({ newBooks: [] })
                } else {
                    this.setState({ newBooks: newBooks })
                }
            })
        } else {
            this.setState({ newBooks: [] })
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
                    <ol className="books-grid">
                        {this.state.newBooks.map(book => (
                            <li key={book.id}>
                                <Books { ...book } changeShelf={this.props.changeShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        ) 
    }
}

export default Search