import React from "react";
import { Link } from "react-router-dom";

function Header(params) {
    const nome = localStorage.getItem('name')
    return (
        <header>
            <span>{nome}</span>
            <Link to={'/'}>Sair</Link>
        </header>
    )
}

export default Header;