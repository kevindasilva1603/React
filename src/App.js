import React, { useState } from "react";
import "./App.css";
import "./main.css";
import "./index.css";

import burgerImage from "./logo.svg";
import burgerImages from "./images.jpg";

// Composant BurgerBlock
function BurgerBlock({
    imagePath,
    restaurantName,
    burgerName,
    price,
    prixPromo,
}) {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className='shops--block'>
            <img src={imagePath} alt={restaurantName} />
            <a href='#'>{restaurantName}</a>
            <p className='block__desc'>{burgerName}</p>
            <p className='block__prix'>{price} €</p>
            {prixPromo && (
                <p className='block__promo-prix'>{prixPromo} € (promo)</p>
            )}

            <div className='quantity-controls'>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
            </div>
        </div>
    );
}

// Composant App
function App() {
    const addToCart = (burgerName, quantity) => {
        // Mettez en œuvre ici la logique d'ajout au panier avec la quantité
        console.log(`Ajout de ${quantity} ${burgerName}(s) au panier.`);
    };

    return (
        <div className='App'>
            {/* Votre contenu HTML */}
            <header>
                <div className='container'>
                    <div className='header'>
                        <div className='headerlogo'>
                            <img
                                className='logi'
                                src={burgerImage}
                                alt='Image de burger'
                            />
                        </div>

                        <div className='header--buttons'>
                            <div>
                                <a href=''>Sign In</a>
                                <a href=''>Register</a>
                            </div>
                            <div className='header--cart'>
                                <svg
                                    viewBox='0 0 40 72'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    {/* ... (votre contenu SVG) */}
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className='shops'>
                <div className='container'>
                    <div className='shops--title'>
                        <h1>Offres du jour</h1>
                    </div>

                    <div className='shopsblocks'>
                        <BurgerBlock
                            imagePath={burgerImages}
                            burgerName='BIG MAC™'
                            price='11,45'
                            prixPromo='9,99'
                        />
                        <BurgerBlock
                            imagePath={burgerImages}
                            burgerName='BIG MAC™'
                            price='11,45'
                            prixPromo='9,99'
                        />
                        <BurgerBlock
                            imagePath={burgerImages}
                            burgerName='BIG MAC™'
                            price='11,45'
                            prixPromo='9,99'
                        />
                        <BurgerBlock
                            imagePath={burgerImages}
                            burgerName='BIG MAC™'
                            price='11,45'
                            prixPromo='9,99'
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
