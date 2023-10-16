import React from "react";

function MaSection(props) {
    const prixPromo = props.prixPromo ? (
        <p className='block__promo-prix'>{props.prixPromo} € (promo)</p>
    ) : null;

    return (
        <section className='shops'>
            <div className='container'>
                <div className='shops--title'>
                    <h1>Offres du jour</h1>
                </div>
                <div className='shops--blocks'>
                    <div className='shops--block'>
                        <img src='./images.jpg' alt='Image du produit' />
                        <a href='#'>{props.shopName}</a>
                        <p className='block__desc'>{props.productName}</p>
                        <p className='block__prix'>{props.price} €</p>
                        {prixPromo}
                        <button onClick={props.onAddToCart}>
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MaSection;
