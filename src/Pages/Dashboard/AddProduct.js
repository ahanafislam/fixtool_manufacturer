import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({mode: "onChange"});
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = data => {
        setSubmitting(true)

        fetch('https://fixtool.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) {
                    reset();
                    toast.success(`Your Product Is Successfully Added`);
                }
                else{
                    console.log(data);
                }
                setSubmitting(false);
            })
    }

    if(submitting) {
        return <Loading/>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card max-w-2xl mx-auto shadow-xl my-5 bg-base-100">
                <h1 className='text-center font-bold text-white text-2xl p-1 bg-primary flex items-center justify-center'>
                    <span className='ml-1'>Add Product</span>
                </h1>
                <div className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder='Product Name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product Name is required'
                                    }
                                })}
                            />
                            <label className="label p-0">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Picture</span>
                            </label>
                            <input
                                type="url"
                                className="input input-bordered"
                                placeholder='Product Picture url'
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Product image is required'
                                    }
                                })}
                            />
                            <label className="label p-0">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-error">{errors.image.message}</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Minimum Order Limit</span>
                            </label>
                            <input
                                type="number"
                                className="input input-bordered"
                                placeholder='Minimum order limit'
                                {...register("minOrder", {
                                    required: {
                                        value: true,
                                        message: 'Product minimum order limit is required'
                                    }
                                })}
                            />
                            <label className="label p-0">
                                {errors.minOrder?.type === 'required' && <span className="label-text-alt text-error">{errors.minOrder.message}</span>}
                            </label>
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Stock</span>
                            </label>
                            <input
                                type="number"
                                className="input input-bordered"
                                placeholder='Total stock'
                                {...register("availableStock", {
                                    required: {
                                        value: true,
                                        message: 'Product total stock is required'
                                    }
                                })}
                            />
                            <label className="label p-0">
                                {errors.availableStock?.type === 'required' && <span className="label-text-alt text-error">{errors.availableStock.message}</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price Per Unit</span>
                            </label>
                            <input
                                type="number"
                                className="input input-bordered"
                                placeholder='Product Price Per Unit'
                                {...register("pricePerUnit", {
                                    required: {
                                        value: true,
                                        message: 'Product price is required'
                                    }
                                })}
                            />
                            <label className="label p-0">
                                {errors.pricePerUnit?.type === 'required' && <span className="label-text-alt text-error">{errors.pricePerUnit.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Write Description</span>
                            {errors?.review && <span className="label-text-alt text-error">Please Write Some Review</span>}
                        </label>
                        <textarea
                            rows="4"
                            className="textarea textarea-bordered"
                            placeholder="Write Some Description"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Please Write Some description'
                                }
                            })}
                        ></textarea>
                    </div>
                    </div>
                    <div className="card-actions mt-6 justify-center label">
                        <button disabled = {errors.description} className="btn btn-primary text-white">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;