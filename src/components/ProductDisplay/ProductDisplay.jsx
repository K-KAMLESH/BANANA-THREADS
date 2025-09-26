import { useParams } from "react-router-dom";
import "./ProductDisplay.css";
import all_product from "../../assets/all_product";
import star_dull_icon from "../../assets/star_dull_icon.png";
import star_icon from "../../assets/star_icon.png";
import { useState } from "react";
import size_chart from "../../assets/size-chart.png";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
function ProductDisplay() {
    const [popupImage, setPopUpImage] = useState(false);
    const [activeSize, setActiveSize] = useState("L")
    const [productCount, setProductCount] = useState(0);

    const handleProductCountIncrease = () => {
        if (productCount >= 0)
            setProductCount(prev => prev + 1)
    }


    const handleProductCountDecrease = () => {
        if (productCount > 0)
            setProductCount(prev => prev - 1)
    }

    const { id } = useParams();

    const product = all_product.find((product) => product.id === Number(id));
    return (
        <div>
            <div className="product-display">
                <div className="product-display-left">
                    <div className="product-display-left-images">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-display-left-main-image">
                        <img src={product.image} alt="" />
                    </div>
                </div>

                <div className="product-display-right">
                    <h1 className="product-name">{product.name}</h1>
                    <div className="product-prices">
                        <span className="product-new-price">${product.new_price}</span>
                        <span className="product-old-price">${product.old_price}</span>
                    </div>
                    <div className="reviews-stars">
                        <div className="stars">
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_dull_icon} alt="" />
                        </div>
                        <div className="reviews">(22)</div>
                    </div>

                    <div className="product-sizes">
                        <p>sizes</p>
                        <div className="sizebox">
                            <span className={activeSize === "S" ? "active-size" : ""} onClick={() => { setActiveSize("S") }} > S</span>
                            <span className={activeSize === "M" ? "active-size" : ""} onClick={() => { setActiveSize("M") }} > M</span>
                            <span className={activeSize === "L" ? "active-size" : ""} onClick={() => { setActiveSize("L") }} >L</span>
                            <span className={activeSize === "XL" ? "active-size" : ""} onClick={() => { setActiveSize("XL") }} > XL</span>
                            <span className={activeSize === "XXL" ? "active-size" : ""} onClick={() => { setActiveSize("XXL") }} > XXL</span>
                            <span className="sizechart" onClick={() => { setPopUpImage(true) }} >⇩</span>
                        </div>
                        {popupImage ? (
                            <div
                                className="popupImage"
                                onClick={() => {
                                    setPopUpImage(false);
                                }}
                            >
                                {" "}
                                <img src={size_chart} />{" "}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="quantity">
                        <p>Quantity</p>
                        <div className="quantity-controler">
                            {" "}
                            <button onClick={handleProductCountDecrease}>-</button> <span>{productCount}</span> <button onClick={handleProductCountIncrease} >+</button>
                        </div>
                    </div>
                    <div className="buy-buttons">
                        <button className="addbutton" onClick={handleProductCountIncrease}> Add to Cart</button>
                        <button className="buybutton" > Buy it Now</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div >
                {<RelatedProduct category={product.category} />}
            </div>
        </div>
    );
}

export default ProductDisplay;

// import { useState } from "react";

// import sizeChartImage from '../../assets/size-chart.png'
// export default function ProductPage() {
//     const [isOpen, setIsOpen] = useState(false);
//     // Replace with your actual size chart image

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             {/* Product Name */}
//             <h2>Banana Bliss Oversized T-shirt</h2>

//             {/* CTA Button */}
//             <button
//                 onClick={() => setIsOpen(true)}
//                 style={{
//                     marginTop: "10px",
//                     padding: "8px 16px",
//                     background: "#000",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "6px",
//                     cursor: "pointer",
//                 }}
//             >
//                 View Size Chart
//             </button>

//             {/* Modal Pop-up */}
//             {isOpen && (
//                 <div
//                     style={{
//                         position: "fixed",
//                         top: 0,
//                         left: 0,
//                         width: "100vw",
//                         height: "100vh",
//                         backgroundColor: "rgba(0,0,0,0.5)",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                     onClick={() => setIsOpen(false)} // close when clicking background
//                 >
//                     <div
//                         style={{
//                             background: "#fff",
//                             padding: "20px",
//                             borderRadius: "10px",
//                             maxWidth: "600px",
//                             width: "90%",
//                             position: "relative",
//                         }}
//                         onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//                     >
//                         {/* Close button */}
//                         <button
//                             onClick={() => setIsOpen(false)}
//                             style={{
//                                 position: "absolute",
//                                 top: "10px",
//                                 right: "10px",
//                                 background: "transparent",
//                                 border: "none",
//                                 fontSize: "20px",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             ✖
//                         </button>

//                         {/* Size Chart Image */}
//                         <img
//                             src={sizeChartImage}
//                             alt="Size Chart"
//                             style={{ width: "100%", borderRadius: "8px" }}
//                         />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
