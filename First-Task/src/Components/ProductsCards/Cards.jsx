import React from 'react'
import './Cards.css'
import Product01 from '../../assets/Product01.jpg'
import Product02 from '../../assets/Product02.jpg'
import Product03 from '../../assets/Product03.jpg'
const Cards = () => {
    return (
        <div>
            <div className="Products-Container">
                <div className="product">
                    <img src={Product01} alt="" />
                    <div className="desc">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="product">
                    <img src={Product02} alt="" />
                    <div className="desc">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="product">
                    <img src={Product03} alt="" />
                    <div className="desc">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
