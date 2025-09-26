import "./CategoryPage.css";
import all_product from "../../assets/all_product";
import Item from "../Item/Item";
function CategoryPage({ category }) {
    return (
        <div className="category-page">
            {all_product.map((product, i) => {
                if (product.category === category)
                    return <Item key={i} product={product} />;
            })}
        </div>
    );
}

export default CategoryPage;
