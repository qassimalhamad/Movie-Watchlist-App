
import './App.css'

function App() {
  const movies = [
    { name: 'intersteller', watched: true },
    { name: 'Batman', watched: true },
    { name: 'Deadpool', watched: false },
  ];

// const moviesList = movies.map((movie , index) => (
//   <ul>
//     <li key={index} className={movie.watched ? 'watched' : 'not-watched'}></li>
//     {movie.name}
//   </ul>
// ))

  const moviesList = movies.map((movie, index) => (
    <li key={index} className={movie.watched ? 'watched' : 'not-watched'}>
      {movie.name}
    </li>
  ))
      
    return (
      <>
        <h1>Movies List</h1>
        {/* <ul>
          {movies.map((movie, index) => (
            <li key={index} className={movie.watched ? 'watched' : 'not-watched'}>
              {movie.name}
            </li>
          ))}
        </ul> */}
        {moviesList}
      </>
    );
  }

export default App
