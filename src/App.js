import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './index.css'


// const API = `https://api.tvmaze.com/search/shows?`
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=60e5d21c'

function App() {
  const [inputValue, setIputValue] = useState('')
  const [movies, setMovies] = useState('')

  const HandleSearch = (e) =>{
    setIputValue(e.target.value)
  }

  const Getmovie = async(query) =>{
    const response = await fetch(`${API_URL}&s=${query}`);
    const data = await response.json()  
     setMovies(data.Search) 
     console.log(data.Search)
   }

  // const Getmovie = async(query) =>{
  //  const response = await fetch(`${API}q=${query}`)
  //  const data = await response.json()  
  //   setMovies(data) 
  //   console.log(data.show) 
  // }

  useEffect(()=>{
    Getmovie()
  }, []);


  return(
    <div className='app'>
      <h1>Movie</h1>
      <div className='search'>
       <form>
          <input type="text"
            placeholder='search'
            value={inputValue}
            onChange={HandleSearch}
          />

          <button onClick={(e)=> {
            e.preventDefault()
            Getmovie(inputValue)
          }}>
              Search
            </button>
       </form>
      </div>

      <div className='container'>
        {
          movies?.length>0
          ? (
            <div className='in'>
              {movies.map((movie) =>(
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : (
            <div>
              <h2>No movies found</h2>
            </div>
          )
        }
          {/* {movies && movies?.map((movie)=>{
            <MovieCard movie={movie}/>
          })} */}
      </div>
    </div>
  )
  
}

export default App;

