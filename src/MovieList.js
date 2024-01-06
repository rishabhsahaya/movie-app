import {Component} from "react";
import MovieCard from "./Moviecard";


class MovieList extends Component{

   
    render(){

        const {movies, addStars, decStars, toggleFav, toggleCart} =  this.props;
          
        return(
            <div className="main">
                {movies.map((movie,index) => (<MovieCard movies = {movie}
                                            key = {index}
                                            addStars = {addStars}
                                            decStars = {decStars}
                                            toggleFav = {toggleFav}
                                            toggleCart = {toggleCart}/>

            ))}              
            </div>
        )
        
    }
}

export default MovieList;