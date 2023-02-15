import React from 'react'
import { moneyFormat } from '../Helpers'

function Header({ money, total }) {
    return (
        <div className='headerLeft'>
            {total > 0 && money - total !== 0 && (
                <div className='header'><span> €{moneyFormat(money - total)} </span> left to spend!</div>
            )}
            {total === 0 && (
                <div className='header'>There's <span> €{moneyFormat(money)} </span> to spend!</div>
            )}
            {money - total === 0 && (
                <div className='header'>You are out of money!</div>
            )}
        </div>
    )
}

export default Header