import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home.jsx"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404';
import Header from './components/Header';
import Post from './pages/Post';

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
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
