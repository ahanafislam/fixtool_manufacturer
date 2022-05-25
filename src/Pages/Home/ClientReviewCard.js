import React from 'react';

const ClientReviewCard = ({review}) => {
    const {name, rating, comment, image} = review;
    return (
        <div className="card justify-center bg-base-100 shadow-lg m-3">
            <div className="avatar justify-center">
                <div className="w-16 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} alt="client-pic" />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    <p>{name}</p>
                    <div className="text-secondary">{rating} STAR</div>
                </h2>
                <p>{comment.slice(0, 150).concat('...')}</p>
            </div>
        </div>
    );
};

export default ClientReviewCard;