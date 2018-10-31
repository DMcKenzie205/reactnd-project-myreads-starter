import React, { Component } from 'react';

class BookShelfChanger extends Component {

    state = {
       shelf: ''
    }

    render() {

        return (
            <div className="book-shelf-changer">
                <select 
                    onChange={this.props.handleChange} 
                    value={this.props.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                </select>
            </div>
        )
    }


}

export default BookShelfChanger