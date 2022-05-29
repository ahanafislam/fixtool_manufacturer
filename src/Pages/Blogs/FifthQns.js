import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const FifthQns = () => {
    const productArray = `
    const products = [
        {name:"Apple", price: 8, description: "This is very sweet fruit"},
        {name:"Tamarind", price: 5, description: "This is very sour fruit"},
        {name: "Jackfruit", price: 12, description: "This is national fruit of bangladesh"}
    ]`

    const searchFunc = `
    const search = (name, products) => {
        for (const product of products) {
            if (product.name === name) {
                return product;
            }
            else {
                return "Sorry nothing is found"
            }
        }
    }
    `

    const resultStr = `
    const result = search("Apple", products);
    console.log(result);
    `
    const resultStr2 = `
    const result = search("Orange", products);
    console.log(result);
    `

    return (
        <div className="card mx-auto shadow-xl mt-6 bg-base-100">
            <h2 className='text-center font-bold text-white bg-primary text-lg justify-center p-1'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <div className="card-body">
                <p>For example we have an array name product,</p>
                <SyntaxHighlighter className="font-semibold font-mono rounded-xl" language="javascript" style={nord}>
                    {productArray}
                </SyntaxHighlighter>

                <p>Now create a function  that can search product by it’s name</p>
                <SyntaxHighlighter className="font-semibold font-mono rounded-xl" language="javascript" style={nord}>
                    {searchFunc}
                </SyntaxHighlighter>

                <p>Now let call this function and console the result</p>
                <SyntaxHighlighter className="font-semibold font-mono rounded-xl" language="javascript" style={nord}>
                    {resultStr}
                </SyntaxHighlighter>

                <p>Output</p>
                <div className="mockup-code">
                    <pre data-prefix="$"><code>{`{ name: 'Apple',price: 8, description: 'This is very sweet fruit' }`}</code></pre>
                </div>

                <p>Again call this function and console the result</p>
                <SyntaxHighlighter className="font-semibold font-mono rounded-xl" language="javascript" style={nord}>
                    {resultStr2}
                </SyntaxHighlighter>

                <p>Output</p>
                <div className="mockup-code">
                    <pre data-prefix="$"><code>Sorry nothing is found</code></pre>
                </div>
            </div>
        </div>
    );
};

export default FifthQns;