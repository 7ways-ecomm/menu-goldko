import React, { useEffect, useLayoutEffect, useState }from 'react';
import { useHistory } from "react-router-dom";

import Header from './Header'

function Blends({ match }) {

    const [product, setProduct] = useState([])

    const history = useHistory();

    useLayoutEffect(() => {
        fetch("https://goldko1.websiteseguro.com/blog/wp-json/wp/v2/cardapio/" + match.params.id + "?_embed").then(response => {
            response.json().then(response => {
                setProduct(response)
            })
        })
    },[]);

    useEffect(() => {
        console.log(product)
    }, [product])

    return(
        <div>
            <Header />
            <div className="fx">
                <button className="back" onClick={ () => history.goBack()}> { "< voltar" } </button>
            </div>
            <div id="inner-content">
                <div id="blends">
                    <div>
                        <img src="https://goldko1.websiteseguro.com/blog/wp-content/uploads/2021/04/Cafe-Notas-Aromaticas-Florais.jpg" alt="CAFÉ COM NOTAS AROMÁTICAS FLORAL" />
                        <div>
                            <h2>CAFÉ COM NOTAS AROMÁTICAS FLORAL</h2>
                            <p>É a escolha perfeita pra quem gosta de um café suave.</p>
                        </div> 
                    </div> 

                    <div>
                        <img src="https://goldko1.websiteseguro.com/blog/wp-content/uploads/2021/04/Cafe-com-Notas-de-Caramelo-e-Chocolate-1.jpg" alt="CAFÉ COM NOTAS DE CACAU INTENSO" />
                        <div>
                            <h2>CAFÉ COM NOTAS DE CACAU INTENSO</h2>
                            <p>Traz uma sensação amanteigada e sedosa, feito para quem gosta do equilíbrio perfeito.</p>
                        </div> 
                    </div> 
                    
                    <div>
                        <img src="https://goldko1.websiteseguro.com/blog/wp-content/uploads/2021/04/Cafe-com-Notas-de-Cacau-Intenso-1.jpg" alt="CAFÉ COM NOTAS DE CARAMELO E CHOCOLATE" />
                        <div>
                            <h2>CAFÉ COM NOTAS DE CARAMELO E CHOCOLATE</h2>
                            <p>Para quem prefere um sabor mais intenso que vai muuuito bem a qualquer hora do dia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blends;