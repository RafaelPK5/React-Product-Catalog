import React from "react";
import { Link, Navigate } from "react-router-dom";
import './Main.css'

function Main() {
    const nome = localStorage.getItem('name').toString();
    return (
        <div className="in">
            <nav class="navbar">
                <ul class="nav-list">
                    <li class="nav-item"><Link className="link" to={'/produtos'}>Catálogo</Link></li>
                    <li class="nav-item"><Link className="link" to={'/cadProduto'}>Cad.Produtos</Link></li>
                    <li class="nav-item"><Link className="link" to={'/pedidos'}>Pedidos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Main;