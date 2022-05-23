import React from 'react';

const BannerContent = ({heroBackground, heroTitle, heroText}) => {
    return (
        <div className={`hero min-h-[500px] ${heroBackground}`}>
            <div className="hero-overlay bg-opacity-60 bg-primary"></div>
            <div className="hero-content text-center text-primary-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-secondary">{heroTitle}</h1>
                    <p className="mb-5">{heroText}</p>
                    <button className="btn btn-primary">Let Explore</button>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;