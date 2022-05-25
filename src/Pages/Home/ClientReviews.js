import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ClientReviewCard from './ClientReviewCard';

const ClientReviews = () => {
    let userReview =[];
    const items = [];
    const { isLoading, error, data } = useQuery('review', () =>
        fetch('http://localhost:5000/review')
        .then(res =>res.json())
    )

    if(isLoading) {
        return <Loading/>
    }

    userReview = data;

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    userReview.forEach(review => {
        items.push(<ClientReviewCard
            review={review}
        ></ClientReviewCard>)
    });

    return (
        <section className='container mx-auto px-3 lg:px-10 mt-16'>
            <h1 className='text-center font-bold text-primary text-4xl mb-4'>What our client say?</h1>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                // controlsStrategy="alternate"
            />
        </section>
    );
};

export default ClientReviews;