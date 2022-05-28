import React from 'react';
import qualityPic from '../../assets/Images/qualityPic.jpg';

const Certification = () => {
    return (
        <section className='container mx-auto px-3 lg:px-10 mt-16 card shadow-lg'>
            <div className="hero min-h-full bg-base-100 my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={qualityPic} alt='img' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='md:max-w-2xl md:mx-7'>
                    <h1 className="text-4xl font-bold text-primary">Quality Statement</h1>
                    <p className="py-6">FixTool Manufacturer Ltd is an ISO-9001:2015 certified anchoring products company and is dedicated to a quality leadership position in the design and manufacture of products for the construction industry. We strive to achieve this mission by seeking to achieve total customer satisfaction through high quality offerings in design and manufacturing. FixTool Anchors & Fastenings values and promotes education and training, continuous product improvement through dedication and teamwork, environmental responsibility and a safe work place.</p>
                    <button className="btn btn-primary text-white">View Certificate</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Certification;