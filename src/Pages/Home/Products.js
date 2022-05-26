import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Products = () => {
    let products =[];
    const { isLoading, error, data } = useQuery('products', () =>
        fetch('https://fixtool.herokuapp.com/products')
        .then(res =>res.json())
    )

    if(isLoading) {
        return <Loading/>
    }

    products = data;

    return (
        <section className='container mx-auto px-3 lg:px-10 mt-10'>
            <h1 className='text-center font-bold text-primary text-4xl'>Our Products</h1>
            <div className='grid grid-col-1 md:grid-cols-3 gap-10 mt-5 mx-auto'>
                {
                    products?.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
            <div className="card-actions justify-center mt-8">
                <Link to='/' className="btn btn-outline btn-primary">
                    <span className="animate-bounce mr-2"><BsChevronDoubleDown></BsChevronDoubleDown></span>
                    See More
                </Link>
            </div>
        </section>
    );
};

export default Products;