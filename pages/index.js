import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";



const Index = (props) => (
    <div>
        <Navbar/>
        <h1>Home</h1>
        {/* {props.user.userName} */}
    </div>
)

Index.getInitialProps = async ({req}) => {
    if(req) {
        return { user: req.user }
    } else {
        return ( "Welcome!" )
    }
}

export default Index;
