import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

function BookShelves(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {Object.keys(props.shelves).filter(shelfKey => shelfKey !== 'none').map((shelfKey) =>
                        <Bookshelf key={shelfKey}
                                   shelf={props.shelves[shelfKey]}
                                   handleMove={props.handleMove}
                                   books={props.books.filter(book => book.shelf === shelfKey)}/>
                    )}
                </div>
            </div>
            <div className="open-search">
                <Link to='/create'>Add a book</Link>
            </div>
        </div>
    )
}

export default BookShelves;