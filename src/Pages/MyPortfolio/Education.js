import React from 'react';

const Education = () => {
    return (
        <div className="card card-side bg-base-100 shadow max-w-[700px] mx-auto">
            <div className="card-body">
                <h2 className="card-title mb-3">Educational background</h2>
                <p>
                   <span className='font-bold'>Daffodil International University</span> - B.Sc in Software Engineering
                    <br/>
                    <small className='text-start'>2015 - 2021</small>
                </p>
                <p>
                   <span className='font-bold'>Rangpur Technical School And College</span> - HSC
                    <br/>
                    <small className='text-start'>2011 - 2013</small>
                </p>
                <p>
                   <span className='font-bold'>Rangpur Technical School And College</span> - SSC
                    <br/>
                    <small className='text-start'>2009 - 2011</small>
                </p>
            </div>
        </div>
    );
};

export default Education;