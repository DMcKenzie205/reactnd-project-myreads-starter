import React from 'react';

import * as BooksAPI from './BooksAPI';
import BookCase from './components/BookCase';
import { Route } from 'react-router-dom';
import Search from './components/search';

import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        showSearchPage: false
    }

     componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
     }

     changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books })
        })
    }

    render() {

        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BookCase books={this.state.books} changeShelf={this.changeShelf}/>
                )}/>
                <Route path='/search' render={() => (
                    <Search changeShelf={this.changeShelf}/>
                )}/>  
            </div>

        )
    }
}

export default BooksApp
