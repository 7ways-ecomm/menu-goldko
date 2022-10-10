import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Header from './Header'

function Detail({ match }) {

    const [product, setProduct] = useState([])
    const [modal, setModal] = useState(false)

    useLayoutEffect(() => {
        fetch("https://goldko1.websiteseguro.com/blog/wp-json/wp/v2/cardapio?categoria=" + match.params.id + "&_embed&per_page=50").then(response => {
            response.json().then(response => {
                setProduct(response)
                console.log(response)
            })
        })
    }, []);

    useEffect(() => {
        console.log("testesklçafnmdlkçasnlka")
    }, [modal])

    return (
        <div>
            <Header />
            <div className="fx">
                <Link className="back" to="/"> {"< voltar"} </Link>
                <Link className="blends" to="/blends">Conheça nossos blends</Link>
            </div>
            <div id="inner-content">
                <div className={modal ? "modal display-block" : "modal display-none"}>
                    <section className="modal-main">
                        <div className="modal-content">
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

                    </section>
                    <button className="wdt-close" type="button" onClick={() => setModal(false)}>
                        fechar
                    </button>
                </div>
                <ul className="detail-list">
                    {product.length > 0 ?
                        product.map(item => {
                            console.log("linha Item")
                            console.log(item)
                            return (
                                <li style={{ order: item.acf.ordenacao ? item.acf.ordenacao : null }}>
                                    <Link to={"/product/" + item.id}>
                                        <div className="image"><img src={item._embedded["wp:featuredmedia"][0].media_details.sizes["full"].source_url} alt={item.title.rendered} /></div>
                                        <div className="text">
                                            <span>
                                                <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                                                <span className="price">{item.acf.preco}</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                        : null}
                </ul>
            </div>
        </div>
    )
}

export default Detail;

//<div dangerouslySetInnerHTML={{ __html: item.content.rendered.replace("<p>&nbsp;</p>", "") }} />