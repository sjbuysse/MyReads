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
                    {props.shelves.filter(shelf => shelf !== 'none').map((shelf) =>
                        <Bookshelf key={shelf}
                                   shelf={shelf}
                                   handleMove={props.handleMove}
                                   books={props.books.filter(book => book.shelf === shelf)}/>
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