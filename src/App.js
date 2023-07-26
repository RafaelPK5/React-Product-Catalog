import { useState } from 'react';
import './App.css';
import Inicial from './Components/Layouts/Inicial';
import Login from './Components/Layouts/Login'
import Cadastro from './Components/Layouts/Cadastro';
import CadProduto from './Components/Layouts/CadProduto';
import Produtos from './Components/Layouts/Produtos'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div >
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastrar' element={<Cadastro/>}/>
        <Route path='/main' element={<Inicial/>}/>
        <Route path='/cadProduto' element={<CadProduto />}/>
        <Route path='/produtos' element={<Produtos />}/>
      </Routes>
    </div>
  );
}

export default App;
