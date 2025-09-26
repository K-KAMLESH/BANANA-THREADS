import { Link } from "react-router-dom";
import "./Item.css";
function Item({ product }) {
    return (
        <div className="item">
            <div className="image">
                <Link to={`/productDisplay/${product.id}`}>
                    <img src={product.image} alt="" />
                </Link>
            </div>
            <div className="prices">
                <div className="new-price"> ${product.new_price}</div>
                <div className="old-price"> ${product.old_price}</div>
            </div>
        </div>
    );
}

export default Item;
