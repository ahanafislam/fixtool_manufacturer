import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    let products =[];
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('products.json').then(res =>
        res.json()
        )
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
        </section>
    );
};

export default Products;