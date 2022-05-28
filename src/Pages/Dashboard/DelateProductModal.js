import React from 'react';
import { toast } from 'react-toastify';
import { CgDanger } from 'react-icons/cg';

const DelateProductModal = ({deletingProduct, refetch, setDeletingProduct}) => {
    const {_id} = deletingProduct;
    const handleCancel = () => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Your product is deleted.`)
                    setDeletingProduct(null);
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
                        Are you sure you want to delate this product?
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

export default DelateProductModal;