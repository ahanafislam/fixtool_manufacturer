import React from 'react';

const Projects = () => {
    return (
        <div className="card card-side bg-base-100 shadow max-w-[700px] mx-auto">
            <div className="card-body">
                <h2 className="card-title mb-3">Some Recent Projects</h2>
                <ul className='list-disc'>
                    <li>
                        <span className='font-bold mr-2'>Warehouse Management</span>
                        <br/>
                        <a className='btn btn-sm btn-link' href="https://ashbab-acf4e.web.app/">Live Link</a>
                    </li>
                    <li>
                        <span className='font-bold mr-2'>Independent-service-provider</span>
                        <br/>
                        <a className='btn btn-sm btn-link' href="https://career-guide-607f1.web.app/">Live Link</a>
                    </li>
                    <li>
                        <span className='font-bold mr-2'>Simple Reviews Website</span>
                        <br/>
                        <a className='btn btn-sm btn-link' href="https://raveme.netlify.app/">Live Link</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;