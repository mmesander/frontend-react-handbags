import React from 'react';
import theHandyBag from './assets/bag_1.png'
import theStylishBag from './assets/bag_2.png'
import theSimpleBag from './assets/bag_3.png'
import theTrendyBag from './assets/bag_4.png'
import Button from "./components/Button";
import Product from "./components/Product";
import './App.css';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonType="button"
                    children="to the collection"
                    isDisabled={false}
                />
                <Button
                    buttonType="button"
                    children="shop all bags"
                    isDisabled={false}
                />
                <Button
                    buttonType="button"
                    children="pre-orders"
                    isDisabled={true}
                />
            </nav>
            <main>
                <Product
                    info="Best seller"
                    image={theHandyBag}
                    description="The handy bag"
                    price="€400,-"
                />
                <Product
                    info="Best seller"
                    image={theStylishBag}
                    description="The stylish bag"
                    price="€250,-"
                />
                <Product
                    info="New collection"
                    image={theSimpleBag}
                    description="The simple bag"
                    price="€300,-"
                />
                <Product
                    info="New collection"
                    image={theTrendyBag}
                    description="The trendy bag"
                    price="€150,-"
                />
            </main>
        </>
    );
}

export default App;



