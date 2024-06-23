import { Link } from "react-router-dom"

import { APP_NAME } from "../../utils/constant"

function Logo() {
    return (
        <Link className="uppercase font-extrabold !text-3xl" to='/'>{APP_NAME}</Link>
    )
}

export default Logo