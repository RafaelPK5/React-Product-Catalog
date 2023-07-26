import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './NavBar.css'

function Main() {
    const nome = localStorage.getItem('name').toString();
    const nomeUsuario = nome.split(' ')[0];
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log(nome)
        localStorage.removeItem('name')
        localStorage.removeItem('email')

        navigate('/')
    };

    return (
        <div className="in">
            <nav class="navbar">
                <div className="user-info">
                    Bem-vindo, {nomeUsuario}!
                </div>
                <ul class="nav-list">
                    <li class="nav-item"><Link className="link" to={'/produtos'}>Catálogo</Link></li>
                    <li class="nav-item"><Link className="link" to={'/cadProduto'}>Cad.Produtos</Link></li>
                    <li class="nav-item"><Link className="link" to={'/pedidos'}>Pedidos</Link></li>
                </ul>
                <button className="logout-button" onClick={handleLogout}>Sair</button>
            </nav>
        </div>
    )
}

export default Main;
