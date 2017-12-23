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
    }

    handleMove(book, shelf) {
        BooksAPI.update(book, shelf);
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    render() {
        return (
            <div className="app">
                <Route path='/create' render={() => (
                    <Search search={BooksAPI.search} handleMove={this.handleMove}/>
                    )}/>

                <Route exact path="/" render={() => (
                    <Bookshelves books={this.state.books} handleMove={this.handleMove} shelves={Object.keys(ShelfKeys).map(key => ShelfKeys[key])}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp;
