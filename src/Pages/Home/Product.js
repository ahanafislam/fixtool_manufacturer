import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {name, image, description, minOrder, availableStock, pricePerUnit} = product;
    const navigate = useNavigate();

    return (
        <div className="card card-compact shadow-lg mx-auto relative">
            <figure><img src={image} alt="product-pic"/></figure>
            <p className="bg-secondary bg-opacity-60 py-1 font-medium text-center absolute top-8 right-0 w-32 text-lg">
                $ {pricePerUnit} Per-unit
            </p>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <div className="card-actions">
                    <button className="btn btn-xs btn-secondary text-primary">Stock: {availableStock}</button>
                </div>
                <p>{description.slice(0, 100).concat('...')}</p>
                <div className="card-actions justify-between items-center">
                    <p className='font-bold text-primary'>Minimum Order:{minOrder}</p>
                    <button onClick={() => navigate('/purchase')} className="btn text-white btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;