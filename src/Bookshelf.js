import React from 'react'
import Book from "./Book";

function Bookshelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) =>
                        <li key={book.id}><Book handleMove={props.handleMove} book={book}/></li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf;
