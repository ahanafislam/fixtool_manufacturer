import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const navigate = useNavigate();
    
    let myOrders =[];

    const { isLoading, error, data, refetch } = useQuery('myOrders', async () =>{
            const url = `https://fixtool.herokuapp.com/my_order?email=${user.email}`;
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

    myOrders = data;

    return (
        <section className='px-auto'>
            <h3 className='text-center font-bold text-primary text-2xl mb-3'>Order List</h3>
            <div className="overflow-x-auto">
                <table className="table table-compact mx-auto w-full">
                    <thead>
                        <tr>
                            <th className='bg-primary text-white'>Image</th>
                            <th className='bg-primary text-white'>Name</th>
                            <th className='bg-primary text-white'>Quantity</th>
                            <th className='bg-primary text-white'>Total Price</th>
                            <th className='bg-primary text-white'>Payment Status</th>
                            <th className='bg-primary text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map(order => <MyOrderRow
                                key={order._id}
                                order={order}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {deletingOrder && <CancelOrderModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            />}
        </section>
    );
};

export default MyOrders;