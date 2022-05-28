import React from 'react';

const MyOrderRow = ({order,refetch,setDeletingOrder}) => {
    const {
            _id,
            image,
            product_name,
            order_quantity,
            total,
            transaction_id
        } = order;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="product_pic" />
                    </div>
                    </div>
                </div>
            </td>
            <td>{product_name}</td>
            <td>{order_quantity}</td>
            <td>${total}</td>
            <td>
                {
                    transaction_id
                    ?
                    transaction_id
                    :
                    <button className='btn btn-xs btn-info text-white'>
                        Payment
                    </button>
                }
            </td>
            <td>
                <label
                    disabled = {transaction_id}
                    onClick={() => setDeletingOrder(order)}
                    htmlFor="cancel-confirm-modal"
                    className="btn btn-xs btn-error text-white">
                    Cancel
                </label>
            </td>
        </tr>
    );
};

export default MyOrderRow;