import "./Popular.scss";
import ProductPopular from "./popular_products/ProductPopular";
export default function Popular () {
    return (
        <div className="products-container">
            <div className="sec-heading">Popular products</div>
            <div className="products">
            <ProductPopular/>
            </div>
          
        </div>
    )
}