import React, { Component } from 'react';
import Books from './book'

class BookShelf extends Component {

    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <section key={shelf}>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <Books bookRow={this.props.state.bookRow}/>
                                </ol>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
            
        )
        

    }
}

export default BookShelf