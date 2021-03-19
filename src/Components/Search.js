import React, { Component } from 'react';
import BookRow from './BookRow';
import $ from 'jquery';

require('dotenv').config()

export class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {}

        this.performSearch()
    }

    performSearch(searchTerm) {
        console.log("Perform search using spoonacular")
        // searchTerm.replace(/\s/g, '+')
        const urlString = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&key=" + process.env.REACT_APP_API_KEY;
        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log("Fetched data Google Book API")
            console.log(searchResults.items)
            const results = searchResults
            // const pairings = searchResults.pairings
            // const text = searchResults.text
            // console.log(results)
    
            var bookRows = []

            const bookRow = <BookRow key={results} />
            bookRows.push(bookRow)
    
            this.setState({rows: bookRows})
          },
          error: (xhr, status, err) => {
            console.log("Failed to fetch data")
          }
        })
      }
    
      searchChangeHandler(event) {
        // console.log(event.target.value);
        const boundObject = this
        const searchTerm = event.target.value;
        boundObject.performSearch(searchTerm);
      }
    
      render() {
      return (
        <div>
    
          <input style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            fontSize: 24,
            display: 'block',
            width: '94%',
            margin: '1% 3% 1% 2%',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: '1%',
            borderRadius: 10
          }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />
    
          {this.state.rows}
            
    
        </div>
      );
      }

}