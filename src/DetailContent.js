import React, { useEffect, useLayoutEffect, useState }from 'react';
import { useHistory } from "react-router-dom";

import Header from './Header'
import vegano from './vegano.svg'
import iconvegano from './icon-vegano.svg'

function Detail({ match }) {

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
                { product.length > 0 || product.title ? 
                <div className="detail">
                    <img src={ product._embedded["wp:featuredmedia"][0].media_details.sizes["full"].source_url } alt={ product.title.rendered } />
                    <div className="content">
                        <h2>
                            <span>{ product.title.rendered }</span>
                            {
                                
                                product.categoria.indexOf(116) !== -1 ?
                                    <div className="flag">
                                        <img src={ vegano } alt="Vegano" />
                                    </div>
                                : null
                            }
                            
                        </h2>
                        <div dangerouslySetInnerHTML={{ __html: product.content.rendered.replace("<p>&nbsp;</p>", "") }} />
                        <span className="price">{product.acf.preco}</span>
                    </div>

                    <div className="full-box">
                        { product._embedded["wp:term"][3].length > 0 ?
                            <h3>Blends exclusivos GoldKo<br />escolha o seu</h3>
                        : null }
                        { product._embedded["wp:term"][3].length > 0 ?
                            product._embedded["wp:term"][3].map(item => {
                                console.log(item)
                                return (
                                    <div className="acompanhamento square-blends">
                                        <img src={item.acf.capa} alt={ item.name } />
                                        <h4>{ item.name } </h4>
                                    </div>
                                )
                            })
                        : null}
                    </div>

                    <div className="full-box">
                        { product._embedded["wp:term"][1].length > 0 ?
                            <h3>Os cafés incluem 1 acompanhamento, escolha o seu</h3>
                        : null }
                        { product._embedded["wp:term"][1].length > 0 ?
                            product._embedded["wp:term"][1].map(item => {
                                
                                return (
                                    <div className="acompanhamento">
                                        {
                                            item.id === 107 ?
                                                <div className="flag">
                                                    <img src={ iconvegano } alt="Vegano" />
                                                </div>
                                            : null
                                        }
                                        <img src={item.acf.capa} alt={ item.name } />
                                        <h4>{ item.name } </h4>
                                    </div>
                                )
                            })
                        : null}
                    </div>
                    
                    <div className="full-box">
                        { product._embedded["wp:term"][2].length > 0 ?
                            <h3>Deixe seu café ainda mais cremoso, inclua acompanhamento extra por R$ 5,50</h3>
                        : null }
                        { product._embedded["wp:term"][2].length > 0 ?
                            product._embedded["wp:term"][2].map(item => {
                                
                                return (
                                    <div className="acompanhamento">
                                        <img src={item.acf.capa} alt={ item.name }  />
                                        <h4>{ item.name } </h4>
                                    </div>
                                )
                            })
                        : null}
                    </div>

                    
                </div>
                : null }
            </div>
        </div>
    )
}

export default Detail;