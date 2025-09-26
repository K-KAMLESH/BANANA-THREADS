import './RelatedProduct.css'
import all_product from '../../assets/all_product'
import Item from '../Item/Item'

function RelatedProduct({ category }) {


    return (
        <div className='related-products'>
            {
                all_product.map((product, i) => {
                    if (product.category === category)
                        return <Item key={i} product={product} />
                })
            }
        </div>
    )
}

export default RelatedProduct
