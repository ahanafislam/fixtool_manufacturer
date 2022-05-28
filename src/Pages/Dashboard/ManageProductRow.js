import React from 'react';

const ManageProductRow = ({product, refetch, setDeletingProduct}) => {
    const {
            name,
            image,
            availableStock,
            pricePerUnit,
        } = product;

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
            <td>{name}</td>
            <td>{availableStock}</td>
            <td>${pricePerUnit}</td>
            <td>
                <label
                    onClick={() => setDeletingProduct(product)}
                    htmlFor="cancel-confirm-modal"
                    className="btn btn-xs btn-error text-white">
                    Delate
                </label>
            </td>
        </tr>
    );
};

export default ManageProductRow;