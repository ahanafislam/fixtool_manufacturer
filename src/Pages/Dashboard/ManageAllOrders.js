import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';

const ManageAllOrders = () => {
    const navigate = useNavigate();
    const [isMaking , setIsMaking] = useState(false);
    const [deletingOrder, setDeletingOrder] = useState(null);
    
    let orderList =[];

    const { isLoading, error, data, refetch } = useQuery('allOrderList', async () =>{
            const url = `http://localhost:5000/order`;
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

    if(isLoading || isMaking) {
        return <Loading/>
    }

    orderList = data;

    // Make a user to admin
    const makeShipped = id => {
        setIsMaking(true)

        fetch(`http://localhost:5000/order/status/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    setIsMaking(false);
                    toast.error('Failed to Make an Shipped status');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    setIsMaking(false);
                    toast.success(`Successfully Shipped`);
                }
            })
    }

    return (
        <section className='px-auto'>
            <h3 className='text-center font-bold text-primary text-2xl mb-3'>All Order List</h3>
            <div className="overflow-x-auto">
                <table className="table mx-auto table-compact w-full">
                    <thead>
                        <tr>
                            <th className='bg-primary text-white'>User Name</th>
                            <th className='bg-primary text-white'>Email</th>
                            <th className='bg-primary text-white'>Product Name</th>
                            <th className='bg-primary text-white'>Total Price</th>
                            <th className='bg-primary text-white'>Quantity</th>
                            <th className='bg-primary text-white'>Payment Status</th>
                            <th className='bg-primary text-white'>Order Status</th>
                            <th className='bg-primary text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList?.map(order => <tr key={order._id}>
                                <td>{order.user_name}</td>
                                <td>{order.user_email}</td>
                                <td>{order.product_name}</td>
                                <td>{order.total}</td>
                                <td>{order.order_quantity}</td>
                                <td>
                                    {
                                        order?.transaction_id
                                        ?
                                        <label className='btn btn-xs btn-success text-white'>Paid</label>
                                        :
                                        <label className='btn btn-xs btn-error text-white'>Unpaid</label>
                                    }
                                </td>
                                <td>
                                    {
                                        order?.status
                                        ?
                                        <label className='btn btn-xs btn-success text-white'>Shipped</label>
                                        :
                                        <label className='btn btn-xs btn-warning text-white'>Pending</label>
                                    }
                                </td>
                                <td>
                                    <button
                                        disabled = {!order?.transaction_id}
                                        onClick={() => makeShipped(order?._id)}
                                        className='btn btn-xs btn-info text-white mb-1'>
                                        Shipping order
                                    </button>
                                    <br/>
                                    <label
                                        disabled = {order?.transaction_id}
                                        onClick={() => setDeletingOrder(order)}
                                        htmlFor="cancel-confirm-modal"
                                        className="btn btn-xs btn-error text-white">
                                        Cancel
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {deletingOrder && <CancelOrderModal
                    deletingOrder={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                />}
            </div>
        </section>
    );
};

export default ManageAllOrders;