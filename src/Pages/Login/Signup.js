import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let signUpError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);

    useEffect( () =>{
        token && navigate(from, { replace: true });
    }, [token, navigate, from])

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        signUpError = <p className='text-error text-sm'>{error?.message || updateError?.message}</p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    return (
        <section className='container mx-auto px-3 lg:px-10'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card w-[21rem] max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center font-bold text-white text-2xl p-2 bg-primary flex items-center justify-center'>
                            <FaSignInAlt/> <span className='ml-1'>SignUp</span>
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2 pt-2">
                            {signUpError}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                type="text"
                                placeholder="Your Full Name"
                                className="input input-bordered"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                                />
                                <label className="label p-0">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                />
                                <label className="label p-0">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: 'Password must be minimum 8 characters, at least one letter and one number'
                                        }
                                    })}
                                />
                                <label className="label p-0">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-primary text-white">SignUp</button>
                            </div>
                        </form>
                        <p className='text-center text-sm p-2'>Already have an account? <Link className='text-success hover:text-warning' to="/login">Please Login</Link></p>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;