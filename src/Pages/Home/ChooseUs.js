import React from 'react';

const ChooseUs = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-primary mb-2'>WHY CHOOSE US</h1>
            <hr className='text-primary hr' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-16 gap-8 mb-20'>
                <div>
                    <h4 className='text-2xl mb-2'>10-Year Experience</h4>
                    <p>With 10-years’ experience in hand tools, C&A Hardware Tools has become a leading manufacturer of high-quality, user friendly and ergonomic cable tools and pipe tools for professional users. With a commitment of manufacturing high quality and affordable tools, C&A Hardware values the importance of quality management which is the foundation of winning the trust of customers.</p>
                </div>
                <div>
                    <h4 className='text-2xl mb-2'>Global Marketing</h4>
                    <p>850,000 pieces of C&A Hardware Tools are sold worldwide. In addition to our standard product line, we offer custom design tooling especially for OEM’s. C&A Hardware tools are regularly presented at the leading international tool shows to attract possible new partners and distributors. Welcome to become a part of C&A Hardware family.</p>
                </div>
                <div>
                    <h4 className='text-2xl mb-2'>Quality Matters</h4>
                    <p>The decisive factor for the function of a pair of pliers is their precision: without accuracy, there is no reliable cutting, gripping or deforming, and no operation without play. Tight tolerances, the compliance of which we ensure with modern manufacturing technology, enable us to meet our strict quality requirements.</p>
                </div>
                <div>
                    <h4 className='text-2xl mb-2'>Human Value</h4>
                    <p>The most important basis for our success are our employees. Their knowledge and skills, commitment and ideas determine our performance and thus our future. Each of them is trained a tool expert. Please tell us the problems we encounter and let us solve them together. Learn more about the C&A Hardware company.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;