// Produtos.jsx
import React, { useState, useEffect } from "react";
import Main from "../Basic/NavBar";
import "./Produtos.css";
import axios from "axios";

function Produtos() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/products")
            .then((response) => {
                setLista(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Main />
            <div className="container">
                <h1>Lista de Produtos</h1>
                <ul className="product-list" id="productList">
                    {lista.map((produto) => (
                        <li key={produto.id}>
                            <img
                                src={produto.imgUrl || "caminho/para/imagem-padrao.jpg"}
                                alt={produto.name}
                                className="product-img"
                            />
                            <div className="product-details">
                                <h2 className="product-title">{produto.name}</h2>
                                <p className="product-description">{produto.description}</p>
                                <p className="product-price">Preço: R$ {produto.price.toFixed(2)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Produtos;
