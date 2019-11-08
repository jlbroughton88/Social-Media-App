import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";



const Index = (props) => (
    <div>
        <Navbar/>
        <h1>Home</h1>
        {/* {props.user.userName} */}
    </div>
)

export default Index;
