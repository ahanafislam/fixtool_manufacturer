import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    return (
        <section className='container mx-auto px-3 lg:px-10'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center font-bold text-white text-2xl p-2 bg-primary flex items-center justify-center'>
                            <FaSignInAlt/> <span className='ml-1'>Login</span>
                        </h1>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <button type='button' class="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                            <button class="btn btn-primary text-white">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;