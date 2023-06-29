import React from "react"
import "./Banner.scss"
import BannerIMG from "../../../assets/banner1.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Sắp ra mắt</p>
                <div className="ctas">
                    <div className="banner-cta"> Read More</div>
                    <div className="banner-cta v2"> Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerIMG} alt="" />
        </div>
    </div>
}

export default Banner;