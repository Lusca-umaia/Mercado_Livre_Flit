import './App.scss'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Templetes/Home'
import RegisterProducts from './Templetes/RegisterProducts';

import NavBar from './Organisms/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<RegisterProducts />} path='/RegisterProducts'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
