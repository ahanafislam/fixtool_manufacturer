import React from 'react';
import FacilityCard from './FacilityCard';

const Facility = () => {
    return (
        <section className='container mx-auto px-3 lg:px-10 mt-10'>
            <div className='grid grid-col-1 md:grid-cols-3 gap-5 mt-5 mx-auto'>
                <FacilityCard title='Worldwide Shipping' text='You can order our product from any where.'/>
                <FacilityCard icon='FaMoneyBillAlt' title="100% Money Back" text='100% money-back guarantee for defective products.'/>
                <FacilityCard icon='MdContactPhone' title="Online Support" text='24/7 Customer Help and support'/>
            </div>
        </section>
    );
};

export default Facility;