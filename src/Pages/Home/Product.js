import React from 'react';

const Product = ({product}) => {
    const {name, image, description, minOrder, availableStock, pricePerUnit} = product;

    return (
        <div className="card card-compact shadow-lg mx-auto">
            <figure><img src={image} alt="product-pic"/></figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{description.slice(0, 100).concat('...')}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-white btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;