import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Post from './pages/Post';
import Notfound from './pages/Notfound';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;