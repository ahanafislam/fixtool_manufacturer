import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({mode: "onChange"});
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card max-w-2xl mx-auto shadow-xl mt-5 bg-base-100">
                <h1 className='text-center font-bold text-white text-2xl p-1 bg-primary flex items-center justify-center'>
                    <span className='ml-1'>Update Profile</span>
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
                                <span className="label-text">LinkedIn profile link</span>
                            </label>
                            <input
                                type="url"
                                placeholder='Enter your LinkedIn profile link'
                                className="input input-bordered"
                                {...register("linkedIn")}
                            />
                            <label className="label p-0">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-error">{errors.address.message}</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Enter your Shipping Address'
                                className="input input-bordered"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Enter Address'
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
                        <button className="btn btn-primary text-white">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyProfile;