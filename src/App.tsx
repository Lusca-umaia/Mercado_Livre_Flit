import './App.scss'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Templetes/Home'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path='/'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
