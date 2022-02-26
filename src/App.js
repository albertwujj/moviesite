import './App.css';
import React from 'react';

class MovieRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      rating: props.rating,
      boxOffice: props.boxOffice,
    };
    
  }

  render() {
    return (
      <tr>
        <td>{this.state.name}</td>
        <td>{this.state.rating}</td>
        <td>{this.state.boxOffice}</td>
      </tr>
    );
  }
}

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: props.movieList,
    };
  }

  render() {
    return (
      <table style={{width:500}}>
        <thead>
          <tr>
            <td>Movie</td>
            <td>Score</td>
            <td>Box Office12</td>
          </tr>
        </thead>
        <tbody>
          {this.state.movieList.map(movieItem => 
          <MovieRow name={movieItem.name} rating={movieItem.rating} boxOffice={movieItem.boxOffice}></MovieRow>
          )}
        </tbody>

      </table>
    );
    
  }
}

function App() {
  const movieList = [{name: "Matrix", rating: "90%", boxOffice: "$1B"}, {name: "Memento", rating: "95%", boxOffice: '$50M'}];
  return (
    <MovieList movieList={movieList}></MovieList>
  );
}

export default App;
