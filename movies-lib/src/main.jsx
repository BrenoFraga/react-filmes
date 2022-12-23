import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'

import App from './App'
import './index.css'
import Home from './pages/home/Home'
import Movie from './pages/movie/Movie'
import Search from './pages/search/Search'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='movie/:id' element={<Movie/>}/>
              <Route path='search' element = {<Search/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
