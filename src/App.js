import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from "./Search";
import Bookshelves from './Bookshelves';
import ShelfKeys from './ShelfKeys';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        books: []
    };

    includeNewBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() =>
            BooksAPI.getAll().then(books => this.setState({books}))
        );
    };

    handleMove = (book, shelf) => {
        // Update book internally
        this.setState((prevState) => {
            const bookState = prevState.books.map(b => b.id !== book.id ? b : Object.assign({}, book, {shelf}));
            return {books: bookState};
        });
        // Update book on backend
        BooksAPI.update(book, shelf);
    };

    search = (query) => {
        return BooksAPI.search(query).then(response => response.map(b => {
            const shelvedBook = this.state.books.find(book => book.id === b.id);
            return shelvedBook ? Object.assign({}, b, {shelf: shelvedBook.shelf}) : b;
        }));
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books}));
    };

    render() {
        return (
            <div className="app">
                <Route path='/create' render={() => (
                    <Search search={this.search} handleMove={this.includeNewBook}/>
                )}/>

                <Route exact path="/" render={() => (
                    <Bookshelves books={this.state.books} handleMove={this.handleMove}
                                 shelves={ShelfKeys}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp;
