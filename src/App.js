import React from 'react';

import * as BooksAPI from './BooksAPI';
import BookCase from './components/BookCase';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router'
import Search from './components/search';

import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        showSearchPage: false
    }

    // Check that component has rendered before retrieving books
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    // Helper function for changing the shelf a book is assigned to
    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(res => {
            // Loop through the updated shelves and filter the 'shelf'
            // that includes the selected book id
            const newShelf = Object.keys(res).filter(shelf => res[shelf].includes(book.id))[0];
            const newBooks = this.state.books.map(b => {
                if (b.id === book.id) {
                    b.shelf = newShelf;
                }

                return b;
            })

            this.setState({ books: newBooks });
        })
    }

    render() {

        return (
            <div className="app">
                <Switch>
                    <Route exact path='/' render={() => (
                        <BookCase 
                            books={this.state.books} 
                            changeShelf={this.changeShelf}
                        />
                    )}/>
                    <Route path='/search' render={() => (
                        <Search 
                            books={this.state.books} 
                            changeShelf={this.changeShelf}
                        />
                    )}/> 
                </Switch> 
            </div>

        )
    }
}

export default BooksApp
