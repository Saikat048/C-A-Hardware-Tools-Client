import React from 'react';
import Footer from '../Shared/Footer';

const Blog = () => {
    return (
        <div>
            <div className='text-center blogs px-60 mb-20'>
                <h1 className='mb-14 mt-10 text-3xl font-bold text-center'>Blogs</h1>

                <h4 className='mb-4'><b>Question-1</b>: How will you improve the performance of a React Application...?</h4>
                <p className='mb-10'><b>Answer :</b> Get insights into how your app performs from your users' point of view. Firebase Performance Monitoring gives you realtime & customized performance tracing. Build Extraordinary Apps. Release Apps Confidently. Accelerate Development. Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import(). Windowing or list virtualization in React. Lazy loading images in React.</p>

                <h4 className='mb-4'><b>Question-2</b>: What are the different ways to manage a state in a React application...?</h4>
                <p className='mb-10'><b>Answer :</b>There are four main types of state you need to properly manage in your React apps: 1. Local state.  2. Global state. 3. Server state.  4. URL state.</p>

                <h4 className='mb-4'><b>Question-3</b>: How does prototypical inheritance work...?</h4>
                <p className='mb-10'><b>Answer :</b> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                <h4 className='mb-4'><b>Question-4</b>: What is the differences between SQL and NoSQL databases...?</h4>
                <p className='mb-10'><b>Answer :</b> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

                <h4 className='mb-4'><b>Question-5.1</b>: What is a unit test...?</h4>
                <p className='mb-10'><b>Answer :</b> Unit testing is testing the smallest testable unit of an application. It is done during the coding phase by the developers. To perform unit testing, a developer writes a piece of code (unit tests) to verify the code to be tested (unit) is correct.</p>

                <h4 className='mb-4'><b>Question-5.2</b>: Why should write unit tests...?</h4>
                <p className='mb-10'><b>Answer :</b> Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;