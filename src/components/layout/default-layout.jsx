import { Fragment } from "react"
import Header from "./header"
import Footer from "./footer"
import Carousel from "./carousel"

function DefaultLayout({ children, showCarousel }) {
    return (
        <Fragment>
            <Header />
            {showCarousel && <Carousel />}
            <div className="bg-gray-100">
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default DefaultLayout