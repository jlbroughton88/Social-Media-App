import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";


const urlCheck = () => {
    if (typeof window == "undefined") { return false }
    if (window.location.hash === "#_=_") {
        history.replaceState
            ? history.replaceState(null, null, window.location.href.split("#")[0])
            : window.location.hash = "";
    }
}
const Profile = ( props ) => {
    urlCheck();
    return (
        <div>
            <Navbar />
            Profile
            <h1>
              {props.user.userName}  
            </h1>
        
        </div>
    )

}

Profile.getInitialProps = async () => {
    console.log("Getting initial props")
    const res = await fetch("http://localhost:5000/api/user/personal")
    console.log("Got initial props")
    const data = await res.json()
    
    return { 
        user: data
    }
}

export default Profile;