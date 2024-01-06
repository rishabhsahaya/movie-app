//here i am using function component because there is no use of states
//because state can be declared inside the state component
//and when we use functional component write just 'props' instead of 'this.props'
function MovieCard(props) {
    
    // addStars = () => {
    //     //setState updates the value as well render the updated value
    //     //1st form of setState() 
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5
    //     // })

    //     //2nd form of setState()
    //     if(this.state.stars >= 5){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             stars: prevState.stars+0.5
    //         }
    //     });
        
    //     //this.state.stars += 0.5;(because it is not rerendering the updated vlue on the screen)
    //     //that's why we are using this.state

    // }
    // //in arrow function there is no need to bind 'this'
    // decStars = () => {
    //     //1st form of setState
    //     if(this.state.stars <= 0){
    //         return;
    //     }
    //     this.setState({
    //         stars: this.state.stars - 0.5
    //     });
    // }

    // handleFav = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     })
    // }

    // handleAddToCart = () => {
    //     this.setState({
    //         isIncart: !this.state.isIncart
    //     })
    // }


   
        //Destructing the state object in render function
        const {movies, addStars, toggleFav, toggleCart, decStars} =  props;
        const {title, plot, poster, price, rating,stars,fav,isInCart} =  props.movies;

        return(
          
                <div className="movie-card">
                    <div className="left">
                    <img alt="poster" src={poster} />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                                onClick ={() => decStars(movies)}
                                />

                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />   

                                <img className="str-btn" alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                onClick ={() => addStars(movies)} 
                                />

                                <span className="starCount">{stars}</span>
                            </div>
                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> :
                            <button className="favourite-btn" onClick={this.handleFav} >Favourite</button>} 
                            
                            below code for button is also corect it is just that in  below one we are 
                            using only one button*/}
                            
                            <button className= {fav?"unfavourite-btn":"favourite-btn"} 
                            onClick={() => toggleFav(movies)}>{fav?"unfavourite":"favourite"}</button>

                            
                            {isInCart ? <button className="unfavourite-btn" onClick={() => toggleCart(movies)}>Remove from cart</button> :
                            <button className="favourite-btn" onClick={() => toggleCart(movies)} >Add to cart</button>}
                        </div>
                    </div>

                </div>

            
        )
        
    
}

export default MovieCard;