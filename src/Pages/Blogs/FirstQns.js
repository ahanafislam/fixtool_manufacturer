import React from 'react';

const FirstQns = () => {
    return (
        <div class="card mx-auto shadow-xl mt-6 bg-base-100">
            <h2 className='text-center font-bold text-white bg-primary text-2xl justify-center p-1'>How will you improve the performance of a React Application?</h2>
            <div class="card-body">
                <p>Naturally, React uses many clever techniques to short down the number of costly DOM operations that are required to update UI. Even then, we can use some techniques to improve React performance. Below are some of the ways are shown.</p>
                <ol className='list-disc'>
                    <li>Using Function components and React.PureComponent. Functional components prevent making class while reducing the overall size as it is better than class.</li>
                    <li>When we want to consider optimizing any application bundle size, it’s better to check how much code we are actually utilizing from dependencies. If we don’t need to support multiple languages, then we can use moment-locales-webpack-plugin
                         to remove unused locales for your final bundle.
                    </li>
                    <li>Sometimes we use index for set the key value. But it’s better to use the shortid module which generates a unique key if we don’t have any unique key value.</li>
                    <li>We can use CSS Animations instead of using javascript animations.</li>
                    <li>We can consider server-side rendering. The main benefit of server-side rendering is users will receive viewable content faster than client-side.</li>
                </ol>
                <p>Also, there are various other ways in which we can improve the performance of React.</p>
            </div>
        </div>
    );
};

export default FirstQns;