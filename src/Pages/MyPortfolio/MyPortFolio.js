import React from 'react';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

const MyPortFolio = () => {
    return (
        <section className='container mx-auto px-3 lg:px-10 mt-6'>
            <div className="hero min-h-[500px] bg-base-100">
                <div className="hero-content flex-col lg:flex-row justify-evenly">
                    <img src="https://lh3.googleusercontent.com/a-/AOh14GjB0bs5tofYis6qqc7IlXxAXj29hHVozz81vdU8cQ=s288-p-rw-no" className="max-w-sm rounded-lg shadow-2xl" alt='pic' />
                    <div className='w-96'>
                        <h1 className="text-5xl font-bold">Md Ahanaf Islam</h1>
                         <p className="py-6">Email: ahanafislam@gmail.com</p>
                    </div>
                </div>
            </div>
            <Skills/>
            <Projects/>
            <Education/>
        </section>
    );
};

export default MyPortFolio;