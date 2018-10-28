import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';




class Books extends Component {

    render() {

        return (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.backgroundImage})` }}></div>
                            <BookShelfChanger/>
                        </div>
                        <div className='book-title'>{book.title}</div>
                        <div className='book-authors'>{book.authors}</div>
                    </div>
                </li>
        )
    }
}

export default Books

