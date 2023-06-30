import { Sliders } from "react-bootstrap-icons"
import "./Home.scss"
import Banner from "./banner/Banner"
import Category from "./category/Category"
import Popular from "./popular/Popular"
import PauseOnHover from "./slider/Slider"
import Slider1 from "./slider/Slider"
export default function Home () {
    return (
         <div className="home">
            <Banner/>
         
            <div className="main-content">
                <div className="layout">
                <Category/>
                <Popular/>
              
                </div>
               
            </div>
            <PauseOnHover/>
         </div>
    )
}