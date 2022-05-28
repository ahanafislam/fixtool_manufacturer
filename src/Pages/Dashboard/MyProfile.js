import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({mode: "onChange"});
    const [user] = useAuthState(auth);
    const [submitting, setSubmitting] = useState(false);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { isLoading, error, data:userProfile, refetch } = useQuery('userProfile', async() => {
        const url = `https://fixtool.herokuapp.com/user/profile/${user.email}`;
        const userPro = await (await fetch(url)).json()

        return userPro[0];
    })

    if(isLoading || submitting || updating) {
        <Loading/>
    }
    
    const onSubmit = data => {
        setSubmitting(true);

        fetch(`https://fixtool.herokuapp.com/user/update/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if(res.status === 403){
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    toast.error('Failed to Make Update');
                }
                return res.json()
            })
            .then(result => {
                if (result.modifiedCount > 0) {
                    updateProfile({ displayName: data.name });
                    refetch();
                    toast.success(`Profile updated Successfully`);
                }
                else {
                    toast.info('Nothing have to update.');
                }
                setSubmitting(false);
            })
    }

    return (
            <div>
                <div className="card max-w-2xl mx-auto shadow-xl mt-6 bg-base-100">
                <h1 className='text-center font-bold text-white text-2xl p-1 bg-primary flex items-center justify-center'>Profile Information</h1>
                {/* <div className="avatar justify-center">
                    <div className="w-16 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt="client-pic" />
                    </div>
                </div> */}
                <div className="card-body">
                    <h2 className="text-lg"><span className='font-bold mr-2'>Name:</span> {user.displayName}</h2>
                    <h2 className="text-lg"><span className='font-bold mr-2'>Email:</span> {userProfile?.email}</h2>
                    <h2 className="text-lg"><span className='font-bold mr-2'>LinkedIn:</span> <Link className='text-info' to={`${userProfile?.linkedIn}`}>{userProfile?.linkedIn}</Link></h2>
                    <h2 className="text-lg"><span className='font-bold mr-2'>Phone:</span> {userProfile?.phone}</h2>
                    <h2 className="text-lg"><span className='font-bold mr-2'>Address:</span> {userProfile?.address}</h2>
                    <h2 className="text-lg"><span className='font-bold mr-2'>Education:</span> {userProfile?.education}</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card max-w-2xl mx-auto shadow-xl my-5 bg-base-100">
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
                                className="input input-bordered"
                                {...register("name", {
                                    value: user.displayName
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
                                    },
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
                                    },
                                })}
                            />
                            <label className="label p-0">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-error">{errors.address.message}</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Enter your Education Background'
                                className="input input-bordered"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Education Background is Required'
                                    },
                                })}
                            />
                            <label className="label p-0">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-error">{errors.education.message}</span>}
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