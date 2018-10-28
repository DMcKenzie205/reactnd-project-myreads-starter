import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';




class Books extends Component {

    render() {

        const {backgroundImage, title, authors} = this.props

        return (
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${backgroundImage})` }}></div>
                            <BookShelfChanger/>
                        </div>
                        <div className='book-title'>{title}</div>
                        <div className='book-authors'>{authors}</div>
                    </div>
        )
    }
}

export default Books
