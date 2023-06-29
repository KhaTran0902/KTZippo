import "./Home.scss"
import Banner from "./banner/Banner"
import Category from "./category/Category"
import Popular from "./popular/Popular"
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
         
         </div>
    )
}