import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesData";

import "./index.css";

export default class App extends React.Component {

  constructor(){
    super();
    this.state = { 
        movies : movies,
        cartCount: 0       
    }
    //Binding the event handler in the constructor if event handler is not an arrow function
    //this.addStars = this.addStars.bind(this);
     
  }

  handleIncStars = (movie)=>{
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      if(movies[movieId].stars <5){
          movies[movieId].stars += 0.5
      }

      this.setState({
          movies//yhis rhs movies is the one which is changed(4line above)
      });
  }

  handleDecStars = (movie)=>{
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      if(movies[movieId].stars > 0){
          movies[movieId].stars -= 0.5;
      }

      this.setState({
          movies
      })
  
  }

  handleToggleFav = (movie)=> {
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      movies[movieId].fav = !movies[movieId].fav;

      this.setState({
          movies
      })
  }

  handleToggleCart = (movie)=> {
      let {movies, cartCount} = this.state;
      const movieId = movies.indexOf(movie);

      movies[movieId].isInCart = !movies[movieId].isInCart;

      if(movies[movieId].isInCart){
        cartCount = cartCount+1;
      }
      else{
        cartCount -=1;
      }
      this.setState({
          movies,
          cartCount
      })
  }

  render(){
    const {movies, cartCount} = this.state;
    return (
      <>
      <Navbar cartCount={cartCount}/>
      <MovieList movies = {movies} 
                  addStars = {this.handleIncStars}
                  decStars = {this.handleDecStars}
                  toggleFav = {this.handleToggleFav}
                  toggleCart = {this.handleToggleCart}/>
      </>
    );
  }
}