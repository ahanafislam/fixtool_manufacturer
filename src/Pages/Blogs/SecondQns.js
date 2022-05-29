import React from 'react';

const SecondQns = () => {
    return (
        <div className="card mx-auto shadow-xl mt-6 bg-base-100">
            <h2 className='text-center font-bold text-white bg-primary text-2xl justify-center p-1'>What are the different ways to manage a state in a React application?</h2>
            <div className="card-body">
                <p>There are four main types of states we need to properly manage in our react apps:</p>
                <ol className='list-disc'>
                    <li><span className='font-bold'>Local state:</span> It’s data that we manage in one or another component. In maximum cases, local state is managed in React by using useState.</li>
                    <li><span className='font-bold'>Global state:</span> It’s necessary when we need to get and update data anywhere in our application or multiple components.</li>
                    <li><span className='font-bold'>Server state:</span> It’s a data that comes from an external server that we integrated with our UI state.</li>
                    <li><span className='font-bold'>URL state:</span> URL state is that exists on our URLs and their query parameters also. URL state is often missing as a category of the state, but it is important.</li>
                </ol>
                <p>There are more pieces of state that we can indentify,  but these are major category that we focusing for most applications we build.</p>
            </div>
        </div>
    );
};

export default SecondQns;