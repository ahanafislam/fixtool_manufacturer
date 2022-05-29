import React from 'react';
import FifthQns from './FifthQns';
import FirstQns from './FirstQns';
import FourthQns from './FourthQns';
import SecondQns from './SecondQns';
import ThirdQns from './ThirdQns';

const Blogs = () => {
    return (
        <section className='container mx-auto px-3 lg:px-10 mt-6'>
            <FirstQns/>
            <SecondQns/>
            <ThirdQns/>
            <FourthQns/>
            <FifthQns/>
        </section>
    );
};

export default Blogs;