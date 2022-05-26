import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, getValues, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let signInError;

    useEffect( () =>{
        user && console.log("Welcome");
    }, [user])

    if (loading || sending) {
        return <Loading></Loading>
    }

    if(error){
        signInError= <p className='text-error text-sm'>{error?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    const resetPassword = async () => {
        const email = getValues('email');
        await sendPasswordResetEmail(email);
        
        if(email) {
            toast.success("Please Check Your Email.");
        }
        else {
            toast.warning("Please Provide email id");
        }
    }

    return (
        <section className='container mx-auto px-3 lg:px-10'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card w-[21rem] max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center font-bold text-white text-2xl p-2 bg-primary flex items-center justify-center'>
                            <FaSignInAlt/> <span className='ml-1'>Login</span>
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-2 pt-2">
                            {signInError}
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
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label p-0">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                </label>
                                <label className="label">
                                    <button type='button' onClick={resetPassword} className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-primary text-white">Login</button>
                            </div>
                        </form>
                        <p className='text-center text-sm p-2'>New to Fixtool <Link className='text-success hover:text-warning' to="/signup">Create New Account</Link></p>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;