import React from 'react';
import { GiFactory, GiWorld } from 'react-icons/gi';
import {AiTwotoneLike} from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';

const BusinessSummary = () => {
    return (
        <section className='mx-auto px-3 lg:px-10 mt-10'>
            <h1 className='text-center text-4xl font-bold text-primary uppercase'>Millions of customer trust us</h1>
            <h5 className='text-center text-md text-secondary mt-1 mb-3'>Customer demand is our first priority</h5>
            <div className="stats shadow-lg w-full stats-vertical lg:stats-horizontal text-center">
                <div className="stat">
                    <GiFactory className="mx-auto text-6xl font-bold text-primary text-center"></GiFactory>
                    <div className="stat-value text-secondary">9</div>
                    <div className="stat-desc text-lg">Mega Factory</div>
                </div>

                <div className="stat">
                    <GiWorld className="mx-auto text-6xl font-bold text-primary text-center"></GiWorld>
                    <div className="stat-value text-secondary">10M</div>
                    <div className="stat-desc text-lg">International client</div>
                </div>

                <div className="stat">
                    <FaAward className="mx-auto text-6xl font-bold text-primary text-center"></FaAward>
                    <div className="stat-value text-secondary">5</div>
                    <div className="stat-desc text-lg">Times MX Award</div>
                </div>

                <div className="stat">
                    <AiTwotoneLike className="mx-auto text-6xl font-bold text-primary text-center"></AiTwotoneLike>
                    <div className="stat-value text-secondary">459+</div>
                    <div className="stat-desc text-lg">Client review</div>
                </div>
            </div>

            <div className="stats shadow-lg w-full stats-vertical lg:stats-horizontal justify-center mt-1">
                <div className="stat">
                    <div>
                        <h1 className='text-2xl font-bold text-primary uppercase'>Have any products request?</h1>
                        <h5 className='text-md text-secondary mt-1 mb-3 text-center'>Don't hesitate to contact us</h5>
                        <div className='text-center'>
                            <button className="btn btn-primary text-white">Request for Product</button>
                            <button className="btn btn-secondary ml-2 text-primary">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;