import React from 'react'
import Header from '../Header/Header'
import Cards from '../ProductsCards/Cards'
import './Home.css'
import Pic01 from '../../assets/02.png'


const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="right">
                    <h1>Your One-Stop Shop for Style, Quality.</h1>
                    <p>Shop with confidence at our e-commerce store, where a wide range of products combines the latest trends, top-notch quality, and exceptional value. Discover everything from fashion and electronics to home essentials, all designed to make your shopping easy and enjoyable.
                    </p>
                </div>
                <div className="left">
                    <img src={Pic01} alt="" />
                </div>
            </div>
            <div className="products">
                <h2>Trending Products</h2>
                <Cards />
            </div>
            {/* Footer Section */}
            <div className="footer">
                <div className="footer-logo">
                    <h1>Logo</h1>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>All Right Reserved By Zaidkhan </p>
            </div>
        </div>
    )
}

export default Home
