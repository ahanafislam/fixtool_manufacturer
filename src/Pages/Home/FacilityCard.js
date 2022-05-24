import React from 'react';
import { MdContactPhone, MdLocalShipping } from 'react-icons/md';
import { FaMoneyBillAlt } from 'react-icons/fa';

const FacilityCard = ({icon, title, text}) => {
    let facilityIcon;
    
    if(icon === 'FaMoneyBillAlt') {
        facilityIcon = <FaMoneyBillAlt/>
    }
    else if(icon === 'MdContactPhone' ) {
        facilityIcon = <MdContactPhone/>
    }
    else {
        facilityIcon = <MdLocalShipping/>
    }

    return (
        <section className="card card-side w-full shadow-lg mx-auto text-primary">
            <figure className='p-5'>
                {facilityIcon}
            </figure>
            <div className="card-body text-primary px-0">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className='text-sm'>{text}</p>
            </div>
        </section>
    );
};

export default FacilityCard;