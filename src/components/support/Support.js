import { BsFillTelephoneFill } from "react-icons/bs";
import {FaCcAmazonPay,FaTruckMoving,FaShopify} from "react-icons/fa"
import "./Support.css"
export default function Support() {
  return (
    <div className="support">
      <div className="support__footer">
        <div className="support__item">
          <div className="support__icon">
            <BsFillTelephoneFill />
          </div>
          <div className="support__content">
            <strong>PRODUCT CONSULTING</strong>
            <span>039.5678.343</span>
          </div>
        </div>
        <div className="support__item">
          <div className="support__icon">
            <FaCcAmazonPay />
          </div>
          <div className="support__content">
            <strong>SUPPORT PAYMENT</strong>
            <span>COD/Online</span>
          </div>
        </div>
        <div className="support__item">
          <div className="support__icon">
            <FaTruckMoving />
          </div>
          <div className="support__content">
            <strong>DELIVERY</strong>
            <span>24/7 delivery</span>
          </div>
        </div>
        <div className="support__item">
          <div className="support__icon">
            <FaShopify />
          </div>
          <div className="support__content">
            <strong>GUARANTEE</strong>
            <span>Lifetime warranty</span>
          </div>
        </div>
      </div>
    </div>
  );
}
