import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home.jsx"
import Sobre from "./pages/Sobre.jsx"
import Page404 from './pages/Page404.jsx';
import Header from './components/Header.jsx';
import Post from './pages/Post.jsx';
import Categoria from './pages/Categoria.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const location = window.location.pathname;
  console.log(location);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
