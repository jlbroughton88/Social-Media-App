import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";



const Index = (props) => (
    <div>
        <Navbar/>
        Hello 
        {/* {props.user.userName} */}
    </div>
)

export default Index;
