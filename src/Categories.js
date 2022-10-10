import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from './Header'

import categories from "./data/taxonomies.json";

function Categories() {

    const [categories, setCategories] = useState([])

    useLayoutEffect(() => {
        fetch("https://goldko1.websiteseguro.com/blog/wp-json/wp/v2/categoria?taxonomie").then(response => {
            response.json().then(response => {
                console.log(response)
                setCategories(response)
            })
        })
    }, []);

    return (
        <div>
            <Header />
            <ul className="wdt-categories">
                {categories.length > 0 ?
                    categories.map(item => {
                        console.log("itens")
                        console.log(item)
                        return (
                            <li key={item.id} className={'category-' + item.name} style={{ order: item.acf.ordenacao ? item.acf.ordenacao : null }}>
                                <Link to={"/category/" + item.id}>
                                    <img src={item.acf.capa} alt={item.name} />
                                    <h2>{item.name}</h2>
                                </Link>
                            </li>
                        )
                    })
                    : null}
            </ul>
        </div>
    )
}

export default Categories;