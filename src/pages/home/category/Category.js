import { Link } from "react-router-dom";
import category1 from "../../../assets/category1.jpg";
import category2 from "../../../assets/category2.png";
import category3 from "../../../assets/category3.jpg";
import "./Category.scss";
export default function Category() {
  return (
    <div className="shop-by-category">
      <div className="categories">
       
        <div className="category">
          <Link to="/products/uni">
          <img src={category3} alt="" />
          </Link>
       
          <div className="category_title">Universal Zippo</div>
        </div>

        <div className="category">
          <img src={category1} alt="" />
          <div className="category_title">Premium Zippo</div>
        </div>
        <div className="category">
          <img src={category2} alt="" />
          <div className="category_title">Utility</div>
        </div>
      </div>
    </div>
  );
}
