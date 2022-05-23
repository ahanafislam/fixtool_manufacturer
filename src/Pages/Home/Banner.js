import React from 'react';
import BannerContent from './BannerContent';

const Banner = () => {
    return (
        <section className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <BannerContent
                    heroBackground='bg-hero-bg'
                    heroTitle='Power Tools'
                    heroText="We can make the best quality industrial pressure washers, automatic screwdrivers, circular saws, rotary hammers, drill machines, impact wrenches, chainsaws and many more."
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn border-0 bg-inherit btn-primary">❮</a> 
                    <a href="#slide2" className="btn border-0 bg-inherit btn-primary">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <BannerContent
                    heroBackground='bg-hero-bg-2'
                    heroTitle='Power Tools'
                    heroText="We can make the best quality industrial pressure washers, automatic screwdrivers, circular saws, rotary hammers, drill machines, impact wrenches, chainsaws and many more."
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn border-0 bg-inherit btn-primary">❮</a> 
                    <a href="#slide3" className="btn border-0 bg-inherit btn-primary">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <BannerContent
                    heroBackground='bg-hero-bg-3'
                    heroTitle='Power Tools'
                    heroText="We can make the best quality industrial pressure washers, automatic screwdrivers, circular saws, rotary hammers, drill machines, impact wrenches, chainsaws and many more."
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn border-0 bg-inherit btn-primary">❮</a> 
                    <a href="#slide1" className="btn border-0 bg-inherit btn-primary">❯</a>
                </div>
            </div>
        </section>
    );
};

export default Banner;