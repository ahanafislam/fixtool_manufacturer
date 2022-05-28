import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddNewReview = () => {
    const { register, getValues, formState: { errors }, handleSubmit, reset } = useForm({mode: "onChange"})
    const [user] = useAuthState(auth);
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = data => {
        setSubmitting(true)

        const review = {
            name: user.displayName,
            user_email: user.email,
            rating: data.rating,
            comment: data.review
        }

        fetch('https://fixtool.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) {
                    reset();
                    toast.success(`Your Review Is Successfully Submitted`);
                }
                else{
                    console.log(data);
                }
                setSubmitting(false);
            })
    }

    if(submitting) {
        return <Loading/>
    }

    return (
        <section className='flex justify-between items-center mt-10'>
            <div className="card w-full max-w-sm shadow-lg bg-base-100 mx-auto my-auto">
                <h1 className='text-center font-bold text-white text-2xl p-2 bg-primary flex items-center justify-center'>
                <span className='ml-1'>Add Review</span>
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <select {...register('rating')} className="select input-bordered w-full max-w-xs">
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                        </select>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Write review</span>
                            {errors?.review && <span className="label-text-alt text-error">Please Write Some Review</span>}
                        </label>
                        <textarea
                            rows="4"
                            className="textarea textarea-bordered"
                            placeholder="What you think about us?"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Please Write Some Review'
                                }
                            })}
                        ></textarea>
                    </div>
                    <div className="form-control mt-3">
                        <button disabled = {errors.review} type='submit' className="btn btn-primary text-white">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddNewReview;