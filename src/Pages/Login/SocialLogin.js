import React, { useEffect } from 'react';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    useEffect(() => {
        googleUser && console.log("you are login");
    },[googleUser]);

    if(googleLoading){
        return <Loading></Loading>
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