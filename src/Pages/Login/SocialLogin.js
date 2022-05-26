import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
    <>  
        <div className="flex flex-col w-full px-4 border-opacity-50">
            <div className="divider text-primary">OR</div>
        </div>
        <div className="card-actions justify-center mb-4">
            <button className="btn text-white btn-outline btn-primary">
                <FcGoogle className='text-3xl mr-2'/> Continue With Google
            </button>
        </div>
    </>
    );
};

export default SocialLogin;