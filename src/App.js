import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Catalogo from './Catalogo/Catalogo';
import Layout from './layout/layout';
import NotFound from './Notfound/Notfound';
import Home from './Home/Home';
import Noticias from './Noticias/Noticias';
import Contato from './Contato/Contato';
import Categorias from './Categorias/Categorias';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='catalogo' element={<Catalogo />} />
          <Route path='noticias' element={<Noticias />} />
          <Route path='contato' element={<Contato />} />
          <Route path='categorias' element={<Categorias />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
