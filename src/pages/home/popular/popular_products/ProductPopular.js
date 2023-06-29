import { Data } from "../../../../components/fetchdata/Data";
import "./ProductPopular.scss";
import { Link } from "react-router-dom";
export default function ProductPopular() {
  return (
    <>
      {Data.map((item) => (
        <div className="products-card" key={item.id}>
          <div className="thumbnail">
            <Link to={`/products/${item.id}`}>
            <img src={item.img} />
            </Link>
          </div>
          <div className="prod-details">
            <span className="name">{item.title}</span>
            <span className="price">$ {item.price}</span>
        
          </div>
        </div>
      ))}
    </>
  );
}
