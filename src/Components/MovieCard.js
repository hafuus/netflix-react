import { useState } from "react";


function MovieCard({ data}) {
  //  const [name , setName] = useState([])
  //  const [image , setImage ] = useState([])
  // MovieCards = [name , image]
  // name = value.movie.show.name
  // image = value..movie.show.image.medium
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          //  src="https://i.pinimg.com/originals/a2/34/75/a234753b69e3bd27b7f1d448956c38af.jpg"
            // src = MovieCard=>({image})
            src={data.show.image.medium}
          alt="movie"
         
        />
       </div>

      {/* <h3 className="movie-heading">movie.show.name</h3> */} 
      <h3 className="movie-heading"> {data.show.name}</h3>
    </div>
  );
}

export default MovieCard;

// 1. GET the data (fetch)
// 2. Save the data to state