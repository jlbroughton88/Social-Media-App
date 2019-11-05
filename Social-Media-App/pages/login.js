import Navbar from "./comps/navbar"

const Login = props => {

    return (
        <div>
            <Navbar />
            <h1>Log in</h1>
            <a href="/auth/facebook">Login here</a>
        </div>
    )
}

export default Login;