import { useRouter} from "next/router";
import Navbar from "./comps/Navbar"

const Login = ({children, href}) => {
    const router = useRouter();
    
    const handleClick = e => {
        e.preventDefault();
        router.push(href)
    }

    return(
    <div>
        <Navbar/>
        <h1>Log in</h1>
        <a href="/auth/facebook" onClick={handleClick}>Login here</a>
    </div>
    )

};

export default Login;