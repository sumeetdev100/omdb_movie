import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import MovieDetails from './components/movieDetails';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Navbar setMovies={setMovies} setIsLoading={setIsLoading} setSearchTerm={setSearchTerm}/>,
//     children:[
//       {}
//     ]
//   }
// ]);


function App() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  const [movieId, setMovieId] = useState('');


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setMovies={setMovies} setIsLoading={setIsLoading} setSearchTerm={setSearchTerm}/>}>
          <Route index element={<HomePage movies={movies} searchTerm={searchTerm} isLoading={isLoading} movieId={movieId} setMovieId={setMovieId}/>} />
          <Route path="/description/:id" element={<MovieDetails/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


{/* <div className='overflow-x-hidden'>
<Navbar setMovies={setMovies} setIsLoading={setIsLoading} setSearchTerm={setSearchTerm}/>

<HomePage movies={movies} isLoading={isLoading} searchTerm={searchTerm} movieId={movieId} setMovieId={setMovieId}/>
</div> */}