import React, { Component } from 'react';

import BookShelfChanger from './BookShelfChanger';

class Books extends Component {

    handleChange(ev) {
        if (ev.target) {
            this.props.changeShelf(this.props, ev.target.value);
        }
    }

    render() {
        const {imageLinks, title, authors} = this.props

        const thumbnail=imageLinks ? imageLinks.thumbnail : ''

        return (
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                            <BookShelfChanger shelf={this.props.shelf} handleChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className='book-title'>{title}</div>
                        <div className='book-authors'>{authors}</div>
                    </div>
        )
    }
}

export default Books

