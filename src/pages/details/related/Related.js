import React from "react"
import { Data1 } from "../../../components/fetchdata/Data"
import { Link } from "react-router-dom"
import "./Related.scss"
import RealtedProducts from "./RealtedProduct"
export default function Related(){
    return(
        <div className="products-container">
        <div className="sec-heading">Popular products</div>
        <div className="products">
        <RealtedProducts/>
        </div>
      
    </div>
    )
}