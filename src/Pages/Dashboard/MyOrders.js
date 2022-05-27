import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    
    let myOrders =[];

    const { isLoading, error, data } = useQuery('myOrders', async () =>{
            const url = `http://localhost:5000/my_order?email=${user.email}`
            const orderList = await (await fetch(url)).json()
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
                <table className="table mx-auto w-full">
                    <thead>
                        <tr>
                            <th className='bg-primary text-white'>Image</th>
                            <th className='bg-primary text-white'>Name</th>
                            <th className='bg-primary text-white'>Quantity</th>
                            <th className='bg-primary text-white'>Total Price</th>
                            <th className='bg-primary text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map(order => <MyOrderRow
                                key={order._id}
                                order={order}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrders;