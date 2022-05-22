import React from 'react';
import useParts from '../../Costumhook';
import Footer from '../Shared/Footer';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useParts();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16 mt-10 mb-20'>
                {
                    parts.map(part => <Part part={part}></Part>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Parts;