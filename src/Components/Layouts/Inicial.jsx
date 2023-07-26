import React from "react";
import './Inicial.css'
import NavBar from "../Basic/NavBar";

function Inicial() {
    return (
        <div>
            <NavBar />
            <section id="inicio">
                <div class="welcome-text">
                    <h2>Bem-vindo ao ProCad</h2>
                    <p>O ProCad é um aplicativo de catálogo de produtos web que oferece uma ampla variedade de produtos
                        para você explorar e descobrir. Nossa plataforma oferece uma experiência intuitiva e amigável,
                        permitindo que você navegue por diversas categorias de produtos e encontre exatamente o que está
                        procurando.</p>
                    <p>Com o ProCad, você pode criar uma lista personalizada de favoritos, comparar preços e especificações
                        de produtos e realizar compras com facilidade. Nossa equipe está constantemente atualizando o
                        catálogo para garantir que você tenha acesso às últimas novidades do mercado.</p>
                    <p>Experimente agora mesmo o ProCad e desfrute de uma experiência de compras online mais completa e
                        conveniente.</p>
                </div>
            </section>
        </div>

    )
}

export default Inicial;