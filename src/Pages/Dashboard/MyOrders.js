import React from 'react';

const MyOrders = () => {
    return (
        <section>
            <h3 className='text-center font-bold text-primary text-2xl mb-3'>Order List</h3>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="https://i.postimg.cc/Xqm2M2nC/ABN15501.jpg" alt="product_pic" />
                                </div>
                                </div>
                            </div>
                        </td>
                        <td>15-50mm Industrial Nail Gun/Air Brad Nailer</td>
                        <td>1000</td>
                        <td>$5000</td>
                        <td>Delate</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrders;