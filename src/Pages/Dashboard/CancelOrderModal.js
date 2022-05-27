import React from 'react';
import { toast } from 'react-toastify';
import { CgDanger } from 'react-icons/cg';

const CancelOrderModal = ({deletingOrder, refetch, setDeletingOrder}) => {
    const {_id} = deletingOrder;
    const handleCancel = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Your order is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="cancel-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-error flex flex-col items-center">
                        <CgDanger className='text-6xl'/>
                        Are you sure you want to cancel this order?
                    </h3>
                    <div className="modal-action">
                    <button onClick={() => handleCancel()} className="btn btn-sm btn-error text-white">Yes</button>
                    <label htmlFor="cancel-confirm-modal" className="btn btn-sm btn-warning text-white">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;