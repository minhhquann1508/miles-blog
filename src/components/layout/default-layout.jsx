import { Fragment } from "react"
import Header from "./header"
import Footer from "./footer"
import Carousel from "./carousel"

function DefaultLayout({ children, showCarousel }) {
    return (
        <Fragment>
            <Header />
            {showCarousel && <Carousel />}
            {children}
            <Footer />
        </Fragment>
    )
}

export default DefaultLayout