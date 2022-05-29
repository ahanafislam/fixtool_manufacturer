import React from 'react';

const FourthQns = () => {
    return (
        <div class="card mx-auto shadow-xl mt-6 bg-base-100">
            <h2 className='text-center font-bold text-white bg-primary text-2xl justify-center p-1'>Why you do not set the state directly in React?</h2>
            <div class="card-body">
                <p>We should not update the state directly because, when we directly update it doesn’t change this.state instantly. Rather, it create a pending state transition and accessing it after calling this method will only return the present value. If we do this we will lose control of the state across all components. If we set the state directly the mutating state will be not trigger the component re-render, this could be cause some odd bugs. setState() make changes to the component state and tells react that this component and its children need to be re-rendered with the updated state.</p>
            </div>
        </div>
    );
};

export default FourthQns;