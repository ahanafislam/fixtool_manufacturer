import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DelateProductModal from './DelateProductModal';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const navigate = useNavigate();
    
    let products =[];

    const { isLoading, error, data, refetch } = useQuery('manageProducts', async () =>{
            const url = `https://fixtool.herokuapp.com/products`;
            const options = {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
            const orderList = await (await fetch(url, options)).json()
            
            if (orderList.status === 401 || orderList.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
            }
            return orderList;
        }
    )

    if(isLoading) {
        return <Loading/>
    }

    products = data;

    return (
        <section className='px-auto'>
            <h3 className='text-center font-bold text-primary text-2xl mb-3'>All Product List</h3>
            <div className="overflow-x-auto">
                <table className="table mx-auto w-full">
                    <thead>
                        <tr>
                            <th className='bg-primary text-white'>Image</th>
                            <th className='bg-primary text-white'>Name</th>
                            <th className='bg-primary text-white'>Stock</th>
                            <th className='bg-primary text-white'>Price per Unit</th>
                            <th className='bg-primary text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => <ManageProductRow
                                key={product._id}
                                product={product}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DelateProductModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            />}
        </section>
    );
};

export default ManageProducts;