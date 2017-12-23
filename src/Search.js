import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Book from "./Book";

class Search extends Component {
    state = {
        books: []
    }

    handleChange = (query) => {
        this.props.search(query).then(books => this.setState({books}));
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={(e) => this.handleChange(e.target.value)} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book) =>
                            <li key={book.id}><Book book={book} onMove={this.props.handleMove}/></li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;
