import React, { useState } from 'react';
import styles from './Products.module.css';
import product1 from "../../assets/buttery-bread.png"
import product2 from "../../assets/milky-bread.png"
import product3 from "../../assets/creamy-patis.png"
import product4 from "../../assets/chocolaty-bread.png"
import product5 from "../../assets/buttery-bun.png"
import product6 from "../../assets/buttery-bread.png"
import product7 from "../../assets/donuts.png"

const Product = () => {
   
    return(
        <section>
            <div className={styles.title}>
                <h1> Menu Of The Day</h1>
            </div>
            <div className={styles.products}>
                {
                    data.map((product)=>{
                        return (
                            <div className={styles.product}>
                                <div className={styles.image}>
                                    <img src={product.image} alt='Product Image'/>
                                </div>
                                <h2>{product.Name}</h2>
                                <h3>{product.price}</h3>
                                <p>{product.description}</p>
                                <div className={styles.buttons}>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
    
};

export default Product;
