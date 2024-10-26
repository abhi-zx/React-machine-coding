import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Blog from './pages/Blog';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
     
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
