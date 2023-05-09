import React from "react";

function Product({info, image, description, price}){
    return(
        <article>
            <span>{info}</span>
            <img src={image} alt={description}/>
            <p>{description}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;