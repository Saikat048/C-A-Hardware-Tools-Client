import React from 'react';

const Portfolio = () => {
    return (
        <div className='flex justify-center'>
        <div class="card w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-2xl text-center text-primary font-bold mb-12">My Profile</h2>
              <h2><b>Name</b>: Md Saikat Hossain</h2>
                <h3><b>Email</b>: mdsaikathossain048@gmail.com</h3>
                <p><b>Education</b>: HSC</p>
                <p><b>Skills</b>: HTML5, CSS3, Bootstrap5, Tailwind CSS, Daisy UI, JavaScript, React JS, Node JS, MongoDB</p>

                <h4 className='text-xl font-bold mt-8'>Projects live website link</h4>
                <p><b>Link 1</b>. https://my-assignment-10-27082.web.app/</p>
                <p><b>Link 2</b>. https://assignment-11-894b0.firebaseapp.com/</p>
                <p><b>Link 3</b>. https://velvety-moxie-891c4c.netlify.app</p>
            </div>
        </div>
    </div>
    );
};

export default Portfolio;