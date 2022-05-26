import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../Hooks/CustomHook';
import Part from '../Parts/Part';
import './HomeParts.css';
import { BsArrowRight } from 'react-icons/bs';

const HomeParts = () => {
    const [parts, setParts] = useParts();
    return (
        <div className='px-16 mb-20'>
            <h1 className='text-center text-4xl text-primary mb-2'>Tools</h1>
            <hr className='text-primary hr' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.slice(0, 6).map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
            <div className='flex items-center mt-16'>
                <Link className='text-2xl text-primary font-bold hover:underline' to="/parts">See All Tools </Link>
                <span className='ml-3 text-2xl text-primary font-bold'><BsArrowRight></BsArrowRight></span>
            </div>
        </div>
    );
};

export default HomeParts;