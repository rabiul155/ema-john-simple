
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])

    const [cart, setCart] = useState([])


    useState(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exsist = cart.find(product => product.id === selectedProduct.id)
        if (!exsist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exsist.quantity = exsist.quantity + 1;
            newCart = [...rest, exsist]

        }

        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addededProduct = products.find(product => product.id === id)
            if (addededProduct) {
                const quantity = storedCart[id];
                addededProduct.quantity = quantity;
                saveCart.push(addededProduct);
            }

        }
        setCart(saveCart)
    }, [products])


    return (
        <div className='shop-container'>
            <div id="prduct-container">
                {
                    products.map(product => <Product
                        addToCart={addToCart}
                        key={product.id}
                        product={product}

                    ></Product>)
                }
            </div>

            <div id="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;