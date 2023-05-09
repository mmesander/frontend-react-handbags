import React from 'react';
import theHandyBag from './assets/bag_1.png'
import Button from "./components/Button";
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
                <article>
                    <span>Best seller</span>
                    <img src={theHandyBag} alt="The handy bag"/>
                    <p>The handy bag</p>
                    <h4>€400,-</h4>
                </article>
            </main>
        </>
    );
}

export default App;



