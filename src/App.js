import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes ,BrowserRouter } from 'react-router-dom';
import { Inicio } from './Paginas/Inicio';
import Destacados from './Paginas/Destacados';
import Contacto from './Paginas/Contacto';
import Info from './Paginas/Info';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/'element={<Inicio/>}/>
        <Route path='/Destacados'element={<Destacados/>}/>
        <Route path='/Contacto'element={<Contacto/>}/>
        <Route path='/Info'element={<Info/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
    
  );
}

export default App; 