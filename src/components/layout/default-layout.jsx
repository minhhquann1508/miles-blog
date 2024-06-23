import { Fragment } from "react"
import Header from "./header"
import Footer from "./footer"

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default DefaultLayout