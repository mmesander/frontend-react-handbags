import React from 'react';
import theHandyBag from './assets/bag_1.png'
import theStylishBag from './assets/bag_2.png'
import theSimpleBag from './assets/bag_3.png'
import theTrendyBag from './assets/bag_4.png'
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
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
            <footer>
                <Tile>
                    <h2>The Brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt dolor doloremque ducimus ex odio quae quam rerum sapiente tempora!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dolores eius eum, maxime numquam quisquam recusandae ut! Earum, placeat.</p>
                </Tile>
                <Tile>
                    <img src={brand} alt="The brand"/>
                </Tile>
                <Tile>
                    <img src={ourStory} alt="Our story"/>
                </Tile>
                <Tile>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis deleniti dignissimos dolores eligendi ipsa magnam natus necessitatibus, numquam, perspiciatis qui repellendus tempora tempore tenetur totam unde ut veritatis vitae.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



