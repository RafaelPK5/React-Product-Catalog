import React, { useState } from "react"
import Main from "../Basic/NavBar";
import './CadProduto.css'

function CadProduto(params) {
    const [produto, setProduto] = useState({
        name:'',
        description:'',
        price:'',
        ImgUrl:''
    })
    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submit = () =>{

    }

    return (
        <div>
            <Main />
            <div className="req">
                <h1>Cadastro de Produto</h1>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" value={produto.name} name="name" onChange={changeInput} required />
                <br />

                <label htmlFor="description">Descrição:</label>
                <textarea id="description" name="description" value={produto.description} onChange={changeInput} required></textarea>
                <br />

                <label htmlFor="price">Preço:</label>
                <input type="number" id="price" name="price" onChange={changeInput} value={produto.price} step="0.01" required />
                <br />

                <label htmlFor="image">Imagem:</label>
                <input type="text" id="image" name="image" value={produto.ImgUrl} onChange={changeInput} />
                <br />
                <input type="submit" onClick={submit} value="Enviar" />
            </div>
        </div>
    )
}

export default CadProduto;