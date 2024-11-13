import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


const RestFulApi = () => {

    const [error, setError] = useState(false)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        ; (async () => {
            try {
                setError(false);
                setLoading(true)
                axios.get("https://fakestoreapi.com/products")
                    .then(res => {
                        setProducts(res.data)
                        setLoading(false)
                    })
                //    const image =  products.forEach(element => {
                //         console.log(element.image);
                //    });

                // console.log(products);

            }
            catch (error) {
                setError(true)
                setLoading(false)
            }
        })()
    }, []);

    if (error) {
        console.log("Something Went wrong");
    }
    



    return (
        <>
            {loading ?
                <p style={{fontSize:"3.5rem",textAlign:"center",marginTop:"5.5rem"}}>Loading..</p> : (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {products.map(items => (
                            <div key={items.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", maxWidth: "200px" }}>
                                <img src={items.image} alt={items.title} style={{ width: "100%", height: "auto" }} />
                                <h2>{items.title}</h2>
                                <h3>{items.price}</h3>
                            </div>
                        ))}
                    </div>)
            }
        </>
    )
}

export default RestFulApi
