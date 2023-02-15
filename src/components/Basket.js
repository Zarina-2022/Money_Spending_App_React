import React from 'react'
import BasketItem from './BasketItem'


function Basket({ basket, setBasket, products, total }) {
    const resetBasket = () => {
        setBasket([])
      }
    
    return (
        <div className='basket-container container'>
            <h3>Shopping details</h3>
           <ul>
           {basket.map(item => (
                <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
            ))}
           </ul>
            <div className='total'>
                Total: € {total}
            </div>
            <div className='resetDiv'>
                <button onClick={resetBasket} className="resetBtn" >Reset cart</button>
            </div>
            <style jsx>
                {`
                .basket-container{
                    padding: 20px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 10px;
                    width: 87%;
                }
                .basket-container h3{
                    font-size: 20px;
                    margin-bottom: 15px;
                }
                .basket-container .total{
                    border-top: 1px solid #ddd;
                    padding-top: 10px;
                    margin-top: 10px;
                    font-size: 18px;
                    font-weight: bold;
                    text-align: right;
                }
                `}
            </style>
        </div>
    )
}

export default Basket