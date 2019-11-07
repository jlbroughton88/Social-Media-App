import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";

const urlCheck = () => {
    if(typeof window == "undefined"){
        return false;
    }

    if (window.location.hash === "#_=_") {
        history.replaceState
            ? history.replaceState(null, null, window.location.href.split("#")[0])
            : window.location.hash = "";
    }
}



const Profile = () => {
    urlCheck();
    return (
        <div>
            <Navbar />
            <h1>This is your profile</h1>
        </div>
    )
}




export default Profile;