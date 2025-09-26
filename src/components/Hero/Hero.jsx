import { useEffect, useRef, useState } from 'react'
import all_product from '../../assets/all_product'
import './Hero.css'
function Hero() {
    let i = 0;
    const [activeImage, setActiveImage] = useState(all_product[i].image);

    function updateImage() {
        if (i >= all_product.length) i = 0
        setActiveImage(all_product[i].image);
        i++
    }

    useEffect(() => {
        setInterval(updateImage, 3000);
    }, [])




    return (
        <div className='hero'>
            <div className="left">
                <div>
                    <p>Exclusive-offers</p>
                    <p>Deal of the day</p>
                    <p className='lastPara'>Shop 8PM deal</p>
                </div>
            </div>
            <div className="right">
                <img src={activeImage} alt="" />
            </div>

        </div>
    )
}

export default Hero
