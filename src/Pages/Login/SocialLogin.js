import React, { useEffect } from 'react';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        googleUser && navigate(from, { replace: true });
    }, [googleUser, navigate, from])

    if(googleLoading){
        return <Loading></Loading>
    }

    if(googleError) {
        toast.error(googleError?.message);
    }

    return (
    <>  
        <div className="flex flex-col w-full px-4 border-opacity-50">
            <div className="divider text-primary">OR</div>
        </div>
        <div className="card-actions justify-center mb-4">
            <button onClick={() => signInWithGoogle()} className="btn text-white btn-outline btn-primary">
                <FcGoogle className='text-3xl mr-2'/> Continue With Google
            </button>
        </div>
    </>
    );
};

export default SocialLogin;