import React from "react";
import { moneyFormat } from "../Helpers";

const Product = ({ product, basket, setBasket, total, money }) => {
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        // urun daha once eklenmis ise:
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }


    return (
        <div className="product">
            <img src={product.image}></img>
            <h5 className="title">{product.title}</h5>
            <p className="price">€{moneyFormat(product.price)}</p>
            <div className="actions">
                <button disabled={!basketItem} onClick={removeBasket} className="removeBtn">Remove from cart</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button disabled={total + product.price > money} onClick={addBasket} className="addBtn">Add to cart</button>
            </div>
        </div>
    )
}

export default Product