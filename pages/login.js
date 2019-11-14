import Navbar from "./comps/navbar"
import Link from "next/link"

const urlCheck = () => {
    if (typeof window == "undefined") { return false }
    if (window.location.hash === "#_=_") {
        history.replaceState
            ? history.replaceState(null, null, window.location.href.split("#")[0])
            : window.location.hash = "";
    }
}

const Login = () => {
    urlCheck()
    return (
        <div>
            <Navbar />
            <h1>Log in</h1>
            <Link href="/auth/facebook">
                <a >Login here</a>
            </Link>
            <a href="/api/login">LOGIN HERE BRUH</a>
            <a href="/api/logout">LOGOUT HERE BRUH</a>
        </div>
    )
}

export default Login;