import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard"; 
import React from "react";
import {useState} from "react";


function App() {
   const[input , setInput] = useState([
        // {name  , image}
     
   ])
  //  console.log("Component rendered")

        
  //   useEffect(() => {
  //     getApi()
  // } , [])

   
  function searchFun (value){
    console.log(value);
   fetch (`https://api.tvmaze.com/search/shows?q=${value}` )
   .then ((responce) =>{return responce.json() })
   .then ((data) => {
    console.log(data)
    setInput(data)
})

  }
  
  // function MovieCardFun(name , image){
  //   name = value.movie.show.name
  //   movie = value.tvshow.show.image.medium
  //   setInput(name , image)

  // }
  return (
    <div classNameName="App">
      <Header />
      <div className="main">
       {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
        <Search search = {searchFun} />
        {/* <Search/> */}
        <div className="movies-section">
          {/* <!-- one card --> */}
            {/* <MovieCard   MovieCards = {MovieCardFun} /> */}
            <ul>
               {input.map((oneinput) => (
                 <MovieCard  data={oneinput}/>
                //  <input oneinput = {oneinput} />
                //  <li> {onedata.movie.show.name}</li>
                //  <li> {onedata.movie.show.image.medium}</li>

            
              ))}
            </ul>
         </div>
      </div>
    </div>

           
  );
}

export default App;
