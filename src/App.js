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

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({ books }));
    }

  render() {
    return (
      <div className="app">
          <Route path='/create' component={Search} />

        <Route exact path="/" render={() => (
            <Bookshelves books={this.state.books} shelves={Object.keys(ShelfKeys).map(key => ShelfKeys[key])}/>
        )} />
      </div>
    )
  }
}

export default BooksApp;
