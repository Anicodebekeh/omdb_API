

const MovieCard = ({movie}) => {
    return (  
        <div className="movie">
            
                <div className="image"><img src={movie.Poster !=='N/A'? movie.Poster : 'http://via.placeholder.com/400'} alt="" /></div>
                
                <div className="details">

                    <div className="title">
                        <h1>{movie.Title}</h1>
                    </div>
                    
                    <div className="year">
                        <p>{movie.Year}</p>
                    </div>
                </div>
           
        </div>
    );
}
 
export default MovieCard;