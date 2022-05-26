import React from 'react';
import notFound from '../../assets/Images/notFound.png';

const NotFound = () => {
    return (
        <section className='mx-auto my-0 h-screen p-0 flex flex-col justify-center items-center'>
            <img src={notFound} alt="notFound" className='w-80'/>
            <h1 className='text-primary text-5xl text-center'>Sorry! Page Not Found</h1>
        </section>
    );
};

export default NotFound;