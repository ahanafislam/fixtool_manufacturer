import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PurchaseProduct = () => {
    const {product_id} = useParams();
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm({mode: "onChange"});

    let productDetail =[];
    const { isLoading, error, data, refetch } = useQuery('productDetail', () =>
        fetch(`https://fixtool.herokuapp.com/products/${product_id}`)
        .then(res =>res.json())
    )

    if(isLoading) {
        return <Loading/>
    }

    productDetail = data;

    const {_id, pricePerUnit, name, minOrder, image, description, availableStock} = productDetail;

    const onSubmit = data => {
        const order = {
            products_id: _id,
            product_name: name,
            user_name: user.displayName,
            user_email: user.email,
            order_quantity: data.quantity,
            phone: data.phone,
            address: data.address,
            country: data.country
        }

        fetch('https://fixtool.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) {
                    reset();
                    refetch();
                    toast.success(`Your Order Is Successfully Submitted`);
                }
                else{
                    console.log(data);
                }
            })
    }


    return (
        <section className='container mx-auto px-3 lg:px-10 mt-10'>
            <h1 className='text-center font-bold text-primary text-3xl mb-3'>Confirm Your Purchase</h1>
           <div className="">
                <div className="card lg:card-side mx-auto rounded-none w-full justify-around">
                    <figure className='w-80'><img src={image} alt="product_pic"/></figure>
                    <div className="card-bod max-w-xl">
                        <h2 className="text-primary font-bold text-2xl">Product Name: {name}</h2>
                        <div className="card-actions my-1">
                            <p className="bg-secondary text-sm font-bold text-center rounded-md p-1">Price Per Unit: ${pricePerUnit}</p>
                            <p className="bg-secondary text-sm font-bold text-center rounded-md p-1">Stock: {availableStock}</p> 
                            <p className="bg-secondary text-sm font-bold text-center rounded-md p-1">Minimum Order: {minOrder}</p> 
                        </div>
                        <p className='my-3'>{description}</p>
                        <h2 className="text-primary font-bold text-lg">Order By</h2>
                        <h2 className="text-primary font-medium">Name: {user.displayName}</h2>
                        <h2 className="text-primary font-medium">Email: {user.email}</h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card max-w-2xl mx-auto shadow-xl mt-5">
                        <h1 className='text-center font-bold text-white text-2xl p-1 bg-primary flex items-center justify-center'>
                            <span className='ml-1'>Place Order</span>
                        </h1>
                    <div className="card-body">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={user.displayName}
                                    className="input input-bordered"
                                    disabled
                                    {...register("name", {
                                        value: user.name
                                    })}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered"
                                    disabled
                                    {...register("email", {
                                        value: user.email
                                    })}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder='Enter your Phone Number'
                                    className="input input-bordered"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        }
                                    })}
                                />
                                <label className="label p-0">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-error">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    min={minOrder}
                                    max={availableStock}
                                    className="input input-bordered"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Quantity is Required'
                                        },
                                        min: minOrder,
                                        max: availableStock,
                                        value: minOrder
                                    })}
                                />
                                <label className="label p-0">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-error">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-error">Minimum {minOrder} order is acceptable</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-error">Your order quantity is out of our stock</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shipping Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter your Shipping Address'
                                    className="input input-bordered"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Enter Shipping Address'
                                        }
                                    })}
                                />
                                <label className="label p-0">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-error">{errors.address.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter your Country'
                                    className="input input-bordered"
                                    {...register("country", {
                                        required: {
                                            value: true,
                                            message: 'Country name is Required'
                                        }
                                    })}
                                />
                                <label className="label p-0">
                                    {errors.country?.type === 'required' && <span className="label-text-alt text-error">{errors.country.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className="card-actions mt-6 justify-center label">
                            <button disabled = {errors.quantity} className="btn btn-primary text-white">Purchase</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PurchaseProduct;