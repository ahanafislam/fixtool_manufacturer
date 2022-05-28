import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const MakeAdmin = () => {
    const navigate = useNavigate();
    
    let userList =[];

    const { isLoading, error, data, refetch } = useQuery('userList', async () =>{
            const url = `http://localhost:5000/user`;
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

    userList = data;

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
                            userList?.map(product => <ManageProductRow
                                key={product._id}
                                product={product}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MakeAdmin;